<script lang="ts">
	import BaseInput from '$lib/components/BaseInput.svelte';
	import { DialogService } from '$lib/services/DialogService';
	import { ToastService } from '$lib/services/ToastService';
	import { UsersService } from '$lib/services/UsersService';
	import { userAuthStore } from '$lib/stores/userAuthStore';
	import type { JsObject } from '$lib/types/JsObject';
	import YupValidation from '$lib/validation/yup';
	import { Button, Spinner } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import * as yup from 'yup';
	import Card from '../widgets/Card.svelte';

	let errors: JsObject | null = {};
	let usersService: UsersService;
	let isUpdatingPassword = false;

	const values = {
		actualPassword: '',
		newPassword: '',
		confirmNewPassword: '',
	}

	const updatePasswordFormSchema = yup.object().shape({
		actualPassword: yup.string().required('Preencha a senha atual'),
		newPassword: yup.string().required('Preencha a nova senha'),
		confirmNewPassword: yup.string().required('Confirme a nova senha').oneOf([yup.ref('newPassword')], 'As senhas não coincidem'),
	});

	const handleUpdatePassword = async () => {
		errors = await YupValidation.validateSchema(updatePasswordFormSchema, values);

		if(errors) {
			return;
		}

		isUpdatingPassword = true;

		const response = await usersService.updatePassword({
			actualPassword: values.actualPassword,
			newPassword: values.newPassword,
			bearerToken: $userAuthStore!.token,
		});

		isUpdatingPassword = false;
		switch (response.status) {
			case 'SUCCESS':
				values.actualPassword = '';
				values.newPassword = '';
				values.confirmNewPassword = '';
				ToastService.success('Senha atualizada com sucesso.');
				break;

			case 'INVALID_PASSWORD':
				DialogService.info({
					message: 'Senha atual inválida. Por favor tente novamente.',
					title: 'Erro ao atualizar senha',
				});
				break;

			default:
				ToastService.error('Erro ao atualizar senha. Por favor tente novamemente mais tarde.');
				break;
		}
	}

	onMount(() => {
		usersService = new UsersService();
	});
</script>

<Card title="Informações de senha" class="-mt-px max-w-none">
	<form class="grid grid-cols-4 gap-2">
		<BaseInput
			label="Senha atual" 
			additionalLabelClasses="col-span-6 space-y-2 sm:col-span-4 mt-5"
			bind:value={values.actualPassword} 
			inputType="password" 
			name="actualPassword" 
			placeholder="*********" 
			required
			error={errors?.actualPassword}
		/>

		<BaseInput 
			additionalLabelClasses="col-span-6 space-y-2 sm:col-span-4"
			label="Nova senha" 
			bind:value={values.newPassword} 
			inputType="password" 
			name="newPassword" 
			placeholder="*********" 
			required
			error={errors?.newPassword}
		/>

		<BaseInput 
			label="Confirme a nova senha" 
			bind:value={values.confirmNewPassword} 
			additionalLabelClasses="col-span-6 space-y-2 sm:col-span-4"
			inputType="password" 
			name="confirmNewPassword" 
			placeholder="*********" 
			required
			error={errors?.confirmNewPassword}
		/>
	</form>
	
	<div class="flex">
		<Button 
			class="sm:col-full mt-6  col-span-6 lg:w-fit w-full"
			on:click={handleUpdatePassword}
			disabled={isUpdatingPassword}
			>
			{#if isUpdatingPassword}
			<Spinner class="me-3" size="4" color="white" />
			Salvando...
			{:else}
			Salvar senha
			{/if}
		</Button>
	</div>
</Card>
