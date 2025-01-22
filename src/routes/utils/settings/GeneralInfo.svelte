<script lang="ts">
	import BaseInput from '$lib/components/BaseInput.svelte';
	import { UsersService } from '$lib/services/UsersService';
	import { userStore } from '$lib/stores/userStore';
	import type { JsObject } from '$lib/types/JsObject';
	import YupValidation from '$lib/validation/yup';
	import { Button, Spinner } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import * as yup from 'yup';
	import Card from '../widgets/Card.svelte';
	import { userAuthStore } from '$lib/stores/userAuthStore';
	import { ToastService } from '$lib/services/ToastService';

	const values = {
		name: $userStore?.name ?? '',
		email: $userStore?.email ?? '',
		phone: $userStore?.phone ?? '',
	}

	let errors: JsObject | null = {};
	let usersService: UsersService;
	let isUpdatingUser = false;

	const updateFormSchema = yup.object().shape({
		name: yup.string().required('Preencha o nome para salvar as alterações'),
		email: yup.string().email('Email inválido').required('Preencha o email para salvar as alterações'),
		phone: yup.string().required('Preencha o telefone para salvar as alterações'),
	});

	const handleUpdateUser =  async () => {
		errors = await YupValidation.validateSchema(updateFormSchema, values);

		if(errors) {
			return;
		}

		isUpdatingUser = true;

		const response = await usersService.update({
			email: values.email,
			name: values.name,
			phone: values.phone,
			bearerToken: $userAuthStore!.token,
		})

		switch (response.status) {
			case 'SUCCESS':
				isUpdatingUser = false;
				$userStore = {
					...$userStore,
					email: values.email,
					name: values.name,
					phone: values.phone,
				};
				ToastService.success('Perfil atualizado com sucesso.');
				break;

			default:
				ToastService.error('Erro ao atualizar perfil.');
				break;
		}
	}

	onMount(async () => {
		usersService = new UsersService();
	})
</script>

<Card title="Informações gerais do perfil" class="-mt-px max-w-none">
	<form class="grid grid-cols-4 gap-2">
		<BaseInput
			label="Nome completo" 
			additionalLabelClasses="col-span-6 space-y-2 sm:col-span-4 mt-5"
			bind:value={values.name} 
			inputType="text" 
			name="name" 
			placeholder="Exemplo: João da silva" 
			required 
			error={errors?.name}
		/>

		<BaseInput 
			additionalLabelClasses="col-span-6 space-y-2 sm:col-span-4"
			label="Email" 
			bind:value={values.email} 
			inputType="email" 
			name="email" 
			placeholder="email@email.com"
			required
			error={errors?.email}
		/>

		<BaseInput 
			label="Telefone" 
			bind:value={values.phone} 
			additionalLabelClasses="col-span-6 space-y-2 sm:col-span-4"
			inputType="text" 
			name="phone" 
			placeholder="(00) 12345-6789"
			required
			error={errors?.phone}
		/>

	</form>

	<div class="flex">
		<Button 
			class="mt-5 w-full lg:w-fit whitespace-nowrap"
			disabled={isUpdatingUser}
			on:click={handleUpdateUser}
		>
			{#if isUpdatingUser}
				<Spinner class="me-3" size="4" color="white" />
				Salvando...
			{:else}
				Salvar alterações
			{/if}
		</Button>
	</div>
</Card>
