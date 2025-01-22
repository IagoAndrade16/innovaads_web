<script lang="ts">
	import BaseInput from '$lib/components/BaseInput.svelte';
	import Engine from '$lib/core/Engine';
	import { DialogService } from '$lib/services/DialogService';
	import { UsersService } from '$lib/services/UsersService';
	import { userAuthStore } from '$lib/stores/userAuthStore';
	import { userStore } from '$lib/stores/userStore';
	import type { JsObject } from '$lib/types/JsObject';
	import YupValidation from '$lib/validation/yup';
	import { onMount } from 'svelte';
	import * as yup from 'yup';
	import SignIn from '../utils/authentication/SignIn.svelte';
	import MetaTag from '../utils/MetaTag.svelte';

	let title = 'Entrar na plataforma';
	let site = {
		name: 'Innova ADS',
		img: '/images/logo-only-rocket.png',
		link: '/',
		imgAlt: 'InnovaADS Logo'
	};

	let lostPassword = true;
	let createAccount = true;
	let lostPasswordLink = 'forgot-password';
	let loginTitle = 'Entrar na sua conta';
	let registerLink = '/sign-up';
	let createAccountTitle = 'Criar conta';

	const path: string = '/sign-in';
	const metaTitle: string = 'InnovaADS - Entrar na conta';
  const subtitle: string = 'Entrar';

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
					email: res.data?.email!,
					phone: res.data?.phone!,
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

<MetaTag {path} title={metaTitle} {subtitle} />

<SignIn
	{handleFormSubmit}
	isSubmitting={isLoading}
	{title}
	{site}
	{lostPassword}
	{createAccount}
	{lostPasswordLink}
	{loginTitle}
	{registerLink}
	{createAccountTitle}
>
	<BaseInput 
		inputType="email"
		label="Seu email"
		name="email"
		placeholder="nome@gmail.com"
		required
		bind:value={values.email}
		error={errors?.email}
	/>



	<BaseInput
		inputType="password"
		label="Senha"
		name="password"
		placeholder="********"
		required
		bind:value={values.password}
		error={errors?.password}
	/>
</SignIn>
