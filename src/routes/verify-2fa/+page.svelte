<script lang="ts">
	import BaseFormLayout from "$lib/components/BaseFormLayout.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
	import { A, Button, P, Span } from "flowbite-svelte";
	import MetaTag from "../utils/MetaTag.svelte";
	import Card from "../utils/widgets/Card.svelte";
	import BaseInput from "$lib/components/BaseInput.svelte";
  import * as yup from "yup";
	import { onMount } from "svelte";
	import { UsersService } from "$lib/services/UsersService";
	import { userAuthStore } from "$lib/stores/userAuthStore";
	import type { JsObject } from "$lib/types/JsObject";
	import YupValidation from "$lib/validation/yup";
	import { userStore } from "$lib/stores/userStore";
	import Engine from "$lib/core/Engine";
	import { DialogService } from "$lib/services/DialogService";
	import { recoveryTimer } from "$lib/stores/recoveryTimer";
	import dayjs from "dayjs";

  const path: string = '';
  const description: string = 'Verificar usuário';
  const title: string = 'Verificar usuário';
  const subtitle: string = 'Verificar usuário';

  let usersService: UsersService | null = null;
  let timeFormated: string = '';
  let intervalTimer: any = null;
  let disabled: boolean = false;

  let codeValues = {
    code: '',
  }
  let errorFormCode: JsObject | null = null;
  const codeFormSchema = yup.object().shape({
    code: yup.string().required('Digite o código de verificação').length(6, 'O código deve ter 6 dígitos'),
  });

  const handleSendCodeByEmail = async () => {
    if (!isAllowedToSendCode()) {
      startRecoveryTimer();
      return;
    } 

    disabled = true;
    const response = await usersService!.sendVerificationEmailToUser($userAuthStore!.token);
    disabled = false;

    if (response.status === 'SUCCESS') {
      saveRecoveryTimer();
      startRecoveryTimer();
    } 
  }

  const startRecoveryTimer = () => {
    intervalTimer = setInterval(() => {
      formatTimeToSendCode();
    }, 1000);
  }

  const formatTimeToSendCode = () => {
    const nextTimeAllowedToSendInSeconds = Math.floor($recoveryTimer!.nextAllowedSendTime / 1000);
    const diff = dayjs.unix(nextTimeAllowedToSendInSeconds).diff(dayjs(), 'second');

    if (diff < 0) {
      timeFormated = '';
      clearInterval(intervalTimer);
      return;
    }

    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    
    timeFormated = `${minutes < 1 ? '00': minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  const saveRecoveryTimer = () => {
    const nextTimeAllowedToSend = Date.now() + 62000; // add 1 minute from now (in milliseconds)

    if (!$recoveryTimer) {
      $recoveryTimer = {
        nextAllowedSendTime: nextTimeAllowedToSend,
      }
      return;
    }
    $recoveryTimer!.nextAllowedSendTime = nextTimeAllowedToSend;
  }

  const isAllowedToSendCode = () => {
    if (!$recoveryTimer) return true;
    return Date.now() >= $recoveryTimer!.nextAllowedSendTime;
  }

  const verifyCodeToValidateUser = async () => {
    errorFormCode = await YupValidation.validateSchema(codeFormSchema, codeValues);

    if (errorFormCode) return;

    const response = await usersService!.verifyCodeToValidateUser({
      code: codeValues.code,
      token: $userAuthStore!.token,
    });
  
    switch (response.status) {
      case 'SUCCESS':
        $userStore!.verified2fa = true;
        Engine.navigateTo('/home/historical-metrics');
        break;
      case 'INVALID_CODE': 
        DialogService.error({
          title: 'Oopss!',
          message: 'Código inválido. Verifique o código digitado e tente novamente.',
        });
        break;
        case 'UNKNOWN':
        DialogService.error({
          title: 'Oopss!',
          message: 'Algo deu errado. Tente novamente mais tarde.',
        });  
        break;
      default:
        DialogService.error({
          title: 'Oopss!',
          message: 'Algo deu errado. Tente novamente mais tarde.',
        });  
        break;    
    }
  }

  onMount(() => {
    usersService = new UsersService();
    handleSendCodeByEmail();
  });

</script>


<MetaTag {path} {description} {title} {subtitle} />

<Navbar />

<BaseFormLayout>
  <Card title="" class="lg:w-[35%] w-full">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Verificar Usuário</h1>
    <P class="mt-5 text-lg">
      Enviamos um código para o email <b> {$userStore?.email} </b>. Por favor, digite-o abaixo para concluir a verificação.
    </P>
    <div class="mt-10">
      <BaseInput 
        label="Digite o código abaixo"
        placeholder="000000"
        mask="000000"
        additionalLabelClasses="text-base text-gray-900 dark:text-white"
        name="code"
        bind:value={codeValues.code}  
        error={errorFormCode?.code}
      />
    </div>
    {#if !timeFormated}
      <A 
        class="mt-2 {disabled ? 'opacity-60 pointer-events-none' : ''}" 
        on:click={!disabled ? handleSendCodeByEmail : () => {}}
      >
        Reenviar código
      </A>
    {:else}
      <P class="{timeFormated ? '' : 'hidden'} mt-2">
        Você poderá reenviar o código em <Span>{timeFormated}</Span>
      </P>
    {/if}
    <Button class="mt-5 w-44" on:click={verifyCodeToValidateUser}>
      Verificar
    </Button>
  </Card>
</BaseFormLayout>    