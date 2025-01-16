<script lang="ts">
	import ErrorText from '$lib/components/ErrorText.svelte';
import { A, Checkbox, Button, Card, Spinner } from 'flowbite-svelte';
	export let title = 'Criar conta grátis';
	export let site = {
		name: 'InnovaADS',
		img: '/images/main-logo.png',
		link: '/',
		imgAlt: 'InnovaADS Logo'
	};
	export let acceptTerms: boolean = true;
	export let haveAccount: boolean = true;
	export let btnTitle = 'Criar conta';
	export let termsLink = '/privacy-policy';
	export let loginLink = '/';
	export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
	export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
	export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
	export let siteImgClass = 'mr-4 h-20';
	export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white';
	export let haveAccountDivClass = 'text-sm font-medium text-gray-500 dark:text-gray-400';
	export let handleFormSubmit: () => void;
	export let termsAccepted: boolean;
	export let termsAcceptedError: string = '';
	export let submittingForm: boolean = false;
</script>

<main class={mainClass}>
	<div class={mainDivClass}>
		<a href={site.link} class={siteLinkClass}>
			<img src={site.img} class={siteImgClass} alt={site.imgAlt} />
			<!-- <span>{site.name}</span> -->
		</a>
		<!-- Card -->
		<Card class="w-full" size="md" border={false}>
			<h1 class={cardH1Class}>
				{title}
			</h1>
			<form class="mt-8 space-y-6">
				<slot />
				{#if acceptTerms}
					<Checkbox bind:checked={termsAccepted} class="pt-1" name="accept">
						<span>
							Eu aceito os <A href={termsLink}>Termos e condições</A>
						</span>
					</Checkbox>
					<ErrorText error={termsAcceptedError} />
				{/if}
				<Button disabled={submittingForm} type="button" on:click={handleFormSubmit} size="lg">
					{#if submittingForm}
						<Spinner class="me-3" size="4" />
						Entrando...
					{:else}
						{btnTitle}
					{/if}
				</Button>
				
				{#if haveAccount}
					<div class={haveAccountDivClass}>
						Já tem uma conta? <A href={loginLink}>Clique aqui</A>
					</div>
				{/if}
			</form>
		</Card>
	</div>
</main>
