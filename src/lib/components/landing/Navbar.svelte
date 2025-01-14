<script>
	import Engine from '$lib/core/Engine';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="InnovaADS Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">InnovaADS</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button on:click={() => Engine.navigateTo('/sign-up')} size="sm">Começar agora</Button>
    <NavHamburger />
  </div>
  <NavUl class="order-1">
    <NavLi href="/" >Home</NavLi>
    <NavLi href="/about">Sobre</NavLi>
    <NavLi href="/pricing">Preços</NavLi>
  </NavUl>
</Navbar>