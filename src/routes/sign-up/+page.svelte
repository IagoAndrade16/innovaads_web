<script lang="ts">
	import { Label, Input } from 'flowbite-svelte';
	import SignUp from '../utils/authentication/SignUp.svelte';
  import MetaTag from '../utils/MetaTag.svelte';
	import BaseInput from '$lib/components/BaseInput.svelte';

	import * as yup from 'yup';
	import { UsersService } from '$lib/services/UsersService';
	import { onMount } from 'svelte';
	import { DialogService } from '$lib/services/DialogService';
	import YupValidation from '$lib/validation/yup';
	import { PhoneNumber } from '$lib/core/value-objects/PhoneNumber';
	import Engine from '$lib/core/Engine';
	import type { JsObject } from '$lib/types/JsObject';

  let errors: JsObject | null = null;
  let submittingForm: boolean = false;
  let usersService: UsersService;

  const values = {
    email: "",
    name: "",
    password: "",
    phone: "",
    termsAccepted: false,
  };

  const formSchema = yup.object().shape({
    name: yup.string().required('Por favor, digite seu nome.'),
    email: yup.string().required('Por favor, digite seu email.').email('Por favor, digite um email válido.'),
    password: yup.string().required('Por favor, digite sua senha.').min(6, 'Sua senha deve ter no mínimo 6 caracteres.'),
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

    submittingForm = false;

    switch(createUserRes.status) {
      case 'SUCCESS':
        Engine.navigateTo('/sign-in');
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


	const title = 'Criar conta';
	const site = {
		name: 'InnovaADS',
		img: '/images/logo-only-rocket.png',
		link: '/',
		imgAlt: 'InnovaADS Logo'
	};
	const acceptTerms = true;
	const haveAccount = true;
	const btnTitle = 'Criar conta';
	const termsLink = '/privacy-policy';
	const loginLink = 'sign-in';

	const path: string = '/sign-up';
  const description: string = 'Crie sua conta';
	const metaTitle: string = 'InnovaADS - Criar conta';
  const subtitle: string = 'Criar conta';
</script>

<MetaTag {path} {description} title={metaTitle} {subtitle} />


<SignUp
	bind:termsAccepted={values.termsAccepted}
	{title}
	{site}
	{acceptTerms}
	{haveAccount}
	{btnTitle}
	{termsLink}
	{loginLink}
	{submittingForm}
	handleFormSubmit={handleFormSubmit}
>
	<BaseInput 
		inputType="text"
		label="Nome completo"
		name="name"
		placeholder="João da Silva"
		required
		bind:value={values.name}
		error={errors?.name}
	/>

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

	<BaseInput 
		inputType="text"
		label="Telefone"
		name="phone"
		placeholder="(99) 99999-9999"
		required
		bind:value={values.phone}
		error={errors?.phone}
	/>
</SignUp>
