<script lang="ts">
	import BaseFormLayout from "$lib/components/BaseFormLayout.svelte";
	import { Button, P, Spinner } from "flowbite-svelte";
	import Card from "../utils/widgets/Card.svelte";
	import BaseInput from "$lib/components/BaseInput.svelte";
	import Navbar from "$lib/components/landing/Navbar.svelte";
	import { onMount } from "svelte";
	import { UsersService } from "$lib/services/UsersService";
  import * as yup from "yup";
	import YupValidation from "$lib/validation/yup";
	import type { JsObject } from "$lib/types/JsObject";
	import { DialogService } from "$lib/services/DialogService";
	import { ToastService } from "$lib/services/ToastService";
	import Engine from "$lib/core/Engine";
	import MetaTag from "../utils/MetaTag.svelte";

  const path: string = '';
  const description: string = 'Esqueceu Senha';
  const title: string = 'Esqueceu Senha';
  const subtitle: string = 'Esqueceu Senha';

  let currentStep = 0;
  let disabledButton = false;
  let steps: { step: 'first' | 'second'| 'third', title: string, description: string }[] = [
    {
      step: 'first',
      title: 'Esqueceu a senha ?',
      description: 'Não se preocupe! Basta digitar seu e-mail e enviaremos um código para redefinir sua senha!',
    },
    {
      step: 'second',
      title: 'Código de recuperação',
      description: 'Enviamos um código para o seu e-mail. Digite-o abaixo para continuar.',
    },
    {
      step: 'third',
      title: 'Nova senha',
      description: 'Digite sua nova senha abaixo.',
    },
  ]

  let usersService: UsersService;

  let emailError: JsObject | null = null;
  const emailValue = {
    email: '',
  };

  let codeError: JsObject | null = null;
  const codeValue = {
    code: '',
  };

  let passwordsError: JsObject | null = null;
  const passwordsValues = {
    newPassword: '',
    repeatNewPassword: '',
  }

  const validateEmailSchema = yup.object().shape({
    email: yup.string().email().required('Por favor, digite um e-mail válido.'),
  }); 
  const validateCodeSchema = yup.object().shape({
    code: yup.string().required('Por favor, digite o código enviado para o seu e-mail.'),
  });
  const validatePasswordsSchema = yup.object().shape({
    newPassword: yup.string().required('Por favor, digite sua nova senha.'),
    repeatNewPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'As senhas devem ser iguais.')
      .required('Por favor, repita sua nova senha.'),
  });

  const sendRecoveryEmail = async () => {
    emailError = await YupValidation.validateSchema(validateEmailSchema, emailValue);    

    if (emailError) return;
    disabledButton = true;

    const response = await usersService.sendPasswordRecoveryEmail(emailValue.email);

    disabledButton = false;
    switch (response.status) {
      case 'SUCCESS':
        currentStep = 1;
        break;
      case 'USER_NOT_FOUND':
        DialogService.error({
          title: 'Oopss!',
          message: 'Usuário não encontrado. Verifique o e-mail digitado e tente novamente.',
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

  const verifyPasswordRecoveryCode = async () => {
    codeError = await YupValidation.validateSchema(validateCodeSchema, codeValue);    

    if (codeError) return;
    
    disabledButton = true;
    const response = await usersService.verifyPasswordRecoveryCode({
      code: codeValue.code,
      email: emailValue.email,
    });

    disabledButton = false;
    switch (response.status) {
      case 'SUCCESS':
        currentStep = 2;
        ToastService.success('Código verificado com sucesso!', {
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
          padding: '15px',
          borderRadius: '8px',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        });
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

  const resetPassword = async () => {
    passwordsError = await YupValidation.validateSchema(validatePasswordsSchema, passwordsValues);    

    if (passwordsError) return;
    
    disabledButton = true;
    const response = await usersService.resetPassword({
      email: emailValue.email,
      newPassword: passwordsValues.newPassword,
    });

    disabledButton = false;
    switch (response.status) {
      case 'SUCCESS':
        ToastService.success('Senha redefinida com sucesso!', {
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
          padding: '15px',
          borderRadius: '8px',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        });
        Engine.navigateTo('/')
        break;
      case 'USER_NOT_FOUND':
        DialogService.error({
          title: 'Oopss!',
          message: 'Usuário não encontrado. Verifique o e-mail digitado e tente novamente.',
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
  });

</script>

<MetaTag {path} {description} {title} {subtitle} />

<Navbar />

<BaseFormLayout>
  <Card title="" class="lg:w-[35%] w-full">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{steps[currentStep].title}</h1>
    <P class="mt-5 text-lg">
      {steps[currentStep].description}
    </P>
    <div class="mt-8">
      {#if steps[currentStep].step === 'first'}
        <BaseInput 
          name="email"
          label="E-mail"
          placeholder="email@email.com"
          additionalLabelClasses="text-base text-gray-900 dark:text-white"
          bind:value={emailValue.email}
          error={emailError?.email}
        />
      {/if}
      {#if steps[currentStep].step === 'second'}
        <BaseInput 
          name="code"
          label="Código Enviado"
          placeholder="000000"
          mask="000000"
          additionalLabelClasses="text-base text-gray-900 dark:text-white"
          bind:value={codeValue.code}
          error={codeError?.code}
        />
      {/if}
      {#if steps[currentStep].step === 'third'}
        <BaseInput 
          name="newPassword"
          label="Digite sua nova senha"
          placeholder="********"
          additionalLabelClasses="text-base text-gray-900 dark:text-white"
          bind:value={passwordsValues.newPassword}
          error={passwordsError?.newPassword}
        />
        <BaseInput 
          name="RepeatNewPassword"
          label="Repita sua nova senha"
          placeholder="********"
          additionalLabelClasses="text-base text-gray-900 dark:text-white"
          bind:value={passwordsValues.repeatNewPassword}
          error={passwordsError?.repeatNewPassword}
        />
      {/if}
    </div>
    <div>
      {#if steps[currentStep].step !== 'first'}
        <Button 
          class="mt-8 w-32 text-base dark:bg-gray-500 bg-gray-500 hover:bg-gray-700"
          on:click={() => currentStep -= 1}
        >
          Voltar
        </Button>
      {/if}
      <Button 
        class="mt-8 w-44 text-base"
        on:click={
          steps[currentStep].step === 'first' ? sendRecoveryEmail 
          : steps[currentStep].step === 'second' ? verifyPasswordRecoveryCode : resetPassword
          }
          disabled={disabledButton}
        >
        {#if disabledButton}
          <Spinner class="me-3" size="4" />
        {/if}
        Enviar código
      </Button>
    </div>
  </Card>
</BaseFormLayout>