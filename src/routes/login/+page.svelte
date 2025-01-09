<script lang="ts">
	import BaseInput from "$lib/components/BaseInput.component.svelte";
	import ErrorText from "$lib/components/ErrorText.component.svelte";
	import PrimaryButton from "$lib/components/PrimaryButton.svelte";
	import Engine from "$lib/core/Engine";
	import { DialogService } from "$lib/services/DialogService";
	import { UsersService } from "$lib/services/UsersService";
	import { userAuthStore } from "$lib/stores/userAuthStore";
	import { userStore } from "$lib/stores/userStore";
	import type { JsObject } from "$lib/types/JsObject";
	import YupValidation from "$lib/validation/yup";
	import { onMount } from "svelte";
	import * as yup from 'yup';

  let errors: JsObject | null = null;
  let usersService: UsersService;
  let isLoading: boolean = false;

  const values = {
    email: "",
    password: "",
  };

  const formSchema = yup.object().shape({
    email: yup.string().required('Por favor, digite seu email.').email('Por favor, digite um email válido.'),
    password: yup.string().required('Por favor, digite sua senha.').min(6, 'Sua senha deve ter no mínimo 6 caracteres.'),
  });

  const handleFormSubmit = async () => {
    errors = await YupValidation.validateSchema(formSchema, values);

    if(errors) {
      return;
    }

    isLoading = true;

    const res = await usersService.auth({
      email: values.email,
      password: values.password,
    });

    isLoading = false;

    switch(res.status) {
      case 'SUCCESS':
        $userAuthStore = {
          ...$userAuthStore,
          token: res.data?.auth.token!,
        };
        $userStore = {
          ...$userStore,
          name: res.data?.name!,
        }
        Engine.navigateTo('/dashboard');
        break;
      case 'UNAUTHORIZED':
        DialogService.error({
          message: 'Email ou senha incorretos.',
          title: 'Ooops!',
        })
        break;
      default:
        DialogService.error({
          message: 'Algo deu errado ao entrar na sua conta. Por favor, tente novamente.',
          title: 'Ooops!',
        })
        break;
    }

  };

  onMount(() => {
    usersService = new UsersService();
  })
</script>

<div class="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-lg w-2/3 lg:w-1/3 mx-auto rounded-md mt-48 bg-[#1F2937]">
  <form class="flex flex-col space-y-6" on:submit={handleFormSubmit}>
    <h1 class="text-2xl font-medium text-white dark:text-white p-0">Entre na sua conta</h1>

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
      label="Senha" 
      id="password-input" 
      name="password" 
      inputType="password" 
      classes="text-white"
      bind:value={values.password} 
      error={errors?.password}
    />
    
    <div class="flex items-start">
      <a href="/" class="ml-auto text-sm text-primary-500 hover:underline dark:text-primary-500">Esqueceu sua senha?</a>
    </div>
    
    <PrimaryButton 
      classes="w-full"
      text="Entrar"
      loadingText="Entrando..."
      type="submit"
      bind:isLoading={isLoading}
    />

    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Não tem uma conta ainda? <a href="/create-account" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Criar uma</a>
    </p>
  </form>
</div>
