<script>
	import Engine from '$lib/core/Engine';
	import { userStore } from '$lib/stores/userStore';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/logo-only-rocket.png" class="me-3 h-10 sm:h-12" alt="InnovaADS Logo" />
    <span class="self-center whitespace-nowrap text-xl font-normal dark:text-white font-days">Innova ADS</span>
  </NavBrand>
  <div class="flex md:order-2">
    {#if $userStore === null}
      <Button on:click={() => Engine.navigateTo('/sign-up')} size="sm">Começar agora</Button>
    {:else}
      <Button on:click={() => Engine.navigateTo('/home/dashboard')} size="sm">Dashboard</Button>
    {/if}
    <NavHamburger />
  </div>
  <NavUl class="order-1">
    <NavLi href="/" >Home</NavLi>
    <NavLi href="/about">Sobre</NavLi>
    <NavLi href="/pricing">Preços</NavLi>
  </NavUl>
</Navbar>