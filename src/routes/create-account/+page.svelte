<script lang="ts">
  import BaseInput from "$lib/components/BaseInput.component.svelte";
  import ErrorText from "$lib/components/ErrorText.component.svelte";
  import PrimaryButton from "$lib/components/PrimaryButton.svelte";
	import Engine from "$lib/core/Engine";
	import { PhoneNumber } from "$lib/core/value-objects/PhoneNumber";
	import { DialogService } from "$lib/services/DialogService";
	import { ToastService } from "$lib/services/ToastService";
	import { UsersService } from "$lib/services/UsersService";
  import type { JsObject } from "$lib/types/JsObject";
  import YupValidation from "$lib/validation/yup";
  import { Checkbox } from "flowbite-svelte";
	import { onMount } from "svelte";
  import * as yup from 'yup';

  let errors: JsObject | null = null;
  let submittingForm: boolean = false;
  let usersService: UsersService;

  const values = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    phone: "",
    termsAccepted: false,
  };

  const formSchema = yup.object().shape({
    email: yup.string().required('Por favor, digite seu email.').email('Por favor, digite um email válido.'),
    password: yup.string().required('Por favor, digite sua senha.').min(6, 'Sua senha deve ter no mínimo 6 caracteres.'),
    confirmPassword: yup.string().required('Por favor, confirme sua senha.').oneOf([yup.ref('password')], 'As senhas devem ser iguais.'),
    phone: yup.string().required('Por favor, digite seu telefone.'),
    termsAccepted: yup.boolean().oneOf([true], 'Você deve aceitar os termos e condições.'),
  });

  export let handleFormSubmit = async () => {
    errors = await YupValidation.validateSchema(formSchema, values);

    if(errors) return;

    submittingForm = true;

    const phoneNumber = PhoneNumber.parse(values.phone);

    const createUserRes = await usersService.register({
      email: values.email,
      name: values.name,
      password: values.password,
      phone: phoneNumber.toString(),
    })

    console.log(createUserRes);
    submittingForm = false;

    switch(createUserRes.status) {
      case 'SUCCESS':
        Engine.navigateTo('/login');
        break;

      case 'USER_ALREADY_EXISTS':
        DialogService.info({
          title: 'Usuário já existe',
          message: 'O email informado já está cadastrado em nossa base de dados. Por favor, tente fazer login.',
        })
        break;

      default:
        DialogService.error({
          title: 'Erro ao criar conta',
          message: 'Ocorreu um erro ao tentar criar sua conta. Por favor, tente novamente.',
        })
        break;
    }
  };

  onMount(() => {
    usersService = new UsersService();
  })

</script>

<div class="space-y-4 md:space-y-6 sm:p-8 w-5/6 md:w-3/4 lg:w-3/5 xl:w-2/5 mt-36 mx-auto">
  <form class="p-8 rounded-lg flex flex-col space-y-6 bg-[#1F2937]" on:submit={handleFormSubmit}>
    <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0 place-self-center">Crie sua conta</h3>
    <BaseInput
      label="Nome" 
      id="name-input" 
      name="name" 
      inputType="text" 
      classes="text-white" 
      bind:value={values.name} 
      error={errors?.name}
    />

    <BaseInput
      label="Email" 
      id="email-input" 
      name="email" 
      inputType="email" 
      classes="text-white" 
      bind:value={values.email} 
      error={errors?.email}
    />
    
    <BaseInput
      label="Sua senha" 
      id="password-input" 
      name="password" 
      inputType="password" 
      classes="text-white" 
      bind:value={values.password} 
      error={errors?.password}
    />

    <BaseInput
      label="Confirme sua senha" 
      id="confirm-password-input" 
      name="confirm-password" 
      inputType="password" 
      classes="text-white" 
      bind:value={values.confirmPassword} 
      error={errors?.confirmPassword}
    />

    <BaseInput
      label="Telefone" 
      id="phone-input" 
      name="phone" 
      mask="(00) 00000-0000"
      inputType="tel" 
      classes="text-white" 
      bind:value={values.phone} 
      error={errors?.phone}
    />

    <div class="items-start">
      <Checkbox bind:checked={values.termsAccepted}>
        Eu aceito os &nbsp
        <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/"> 
          Termos e condições
        </a>
      </Checkbox>
      <ErrorText error={errors?.termsAccepted as string} />
    </div>

    <PrimaryButton 
      classes="w-full" 
      text="Criar conta" 
      loadingText="Criando conta..." 
      type="submit" 
      bind:isLoading={submittingForm}
    />

    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Já tem uma conta? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Clique aqui</a>
    </div>

  </form>
</div>
