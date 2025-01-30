<script>
	import Engine from '$lib/core/Engine';
	import { userStore } from '$lib/stores/userStore';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input, DarkMode } from 'flowbite-svelte';
	import { ArrowLeftToBracketOutline } from 'flowbite-svelte-icons';
</script>

<Navbar
	class="fixed start-0 top-0 z-20 w-full border-b border-gray-200 px-2 py-1 dark:border-gray-700 sm:px-4"
	color="dark"
>
	<NavBrand href="/">
    <img src="/images/logo-only-rocket.png" class="me-3 h-10 sm:h-12" alt="InnovaADS Logo" />
    <span class="self-center whitespace-nowrap text-xl font-normal dark:text-white font-days">Innova ADS</span>
	</NavBrand>
	<NavUl class="me-auto ms-8">
		<NavLi href="/">Home</NavLi>
		<NavLi href="#pricing">Preços</NavLi>
		<NavLi href="#contact">Contato</NavLi>
		<NavLi href="/#faq">FAQ</NavLi>
	</NavUl>
	<div class="py-4 flex gap-4">
		<DarkMode />
    {#if $userStore}
      <Button class="gap-2 px-3" on:click={() => Engine.navigateTo('/home/dashboard')}>Dashboard</Button>
    {:else}
      <Button class="gap-2 px-3" on:click={() => Engine.navigateTo('/create-account')}>
				Testar grátis
				<ArrowLeftToBracketOutline />
			</Button>
    {/if}
	  <NavHamburger /> 
	</div>
</Navbar>