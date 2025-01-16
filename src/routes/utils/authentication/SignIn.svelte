<script lang="ts">
	import { A, Button, Card, Spinner } from 'flowbite-svelte';
	export let title = 'Faça login na plataforma';
	export let site = {
		name: 'InnovaADS',
		img: '/static/images/logo-only-rocket.png',
		link: '/',
		imgAlt: 'InnovaADS Logo'
	};

	export let isSubmitting = false;
	export let lostPassword = true;
	export let createAccount = true;
	export let lostPasswordLink = '';
	export let loginTitle = 'Entrar na sua conta';
	export let registerLink = '';
	export let createAccountTitle = 'Criar conta';
	export let handleFormSubmit: () => void;

	export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
	export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
	export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
	export let siteImgClass = 'mr-4 h-20';
	export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white';
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
			<form class="mt-8 space-y-6" on:submit|preventDefault>
				<slot />
				{#if lostPassword}
					<div class="flex items-start">
						{#if lostPassword}
							<A href={lostPasswordLink} aClass="ml-auto text-sm">Esqueceu sua senha?</A>
						{/if}
					</div>
				{/if}
				<Button disabled={isSubmitting ? true : false} type="button" size="lg" on:click={handleFormSubmit}>
					{#if isSubmitting}
						<Spinner class="me-3" size="4" />
						Entrando...
					{:else}
						{loginTitle}
					{/if}
				</Button>
				{#if createAccount}
					<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
						Não tem conta? <A href={registerLink}>{createAccountTitle}</A>
					</div>
				{/if}
			</form>
		</Card>
	</div>
</main>
