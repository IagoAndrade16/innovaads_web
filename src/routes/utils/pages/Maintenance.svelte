<script lang="ts">
	import { imagesPath } from '../variables';
	import { Button, P } from 'flowbite-svelte';
	export let title = 'Em manutenção';
	export let description =
		`Desculpe a inconveniência, mas estamos fazendo uma manutenção no momento. Se necessário, você sempre pode 
			<a href="/" class="text-primary-700 hover:underline dark:text-primary-500">contatar-nos</a>, 
			caso contrário, voltaremos a ficar on-line em breve!
		`;
	export let image = {
		src: imagesPath('illustrations/maintenance.svg'),
		alt: 'maintenance'
	};
	export let btnTitle = 'Voltar para a página inicial';
	export let btnHref = '/';
	export let mainClass = 'bg-gray-50 dark:bg-gray-900';
	export let mainDivClass =
		'flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900';
	export let h1Class =
		'mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white';
	export let imgDiv = 'block mb-5 md:max-w-md';
	export let div2Class = 'text-center xl:max-w-4xl';
</script>

<main class={mainClass}>
	<div class={mainDivClass}>
		<div class={imgDiv}>
			<img src={image.src} alt={image.alt} />
		</div>
		<div class={div2Class}>
			<h1 class={h1Class}>{title}</h1>
			<P class="mb-5 text-base font-normal text-gray-500 dark:text-gray-400 md:text-lg">
				{@html description}
			</P>
			<Button href={btnHref}>
				<svg
					class="-ml-1 mr-2 h-5 w-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
						clip-rule="evenodd"
					/></svg
				>
				{btnTitle}
			</Button>
		</div>
	</div>
</main>
