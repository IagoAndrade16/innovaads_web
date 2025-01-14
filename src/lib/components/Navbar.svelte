<script>
	import {
		DarkMode,
		NavBrand,
		NavHamburger,
		Navbar
	} from 'flowbite-svelte';
	import '../../app.pcss';
	import UserMenu from '../../routes/utils/widgets/UserMenu.svelte';

	export let fluid = true;
	export let drawerHidden = false;
	export let list = false;
</script>

<Navbar {fluid} class="text-black" color="default" let:NavContainer>
	<NavHamburger
		onClick={() => (drawerHidden = !drawerHidden)}
		class="m-0 me-3 md:block lg:hidden"
	/>
	<NavBrand href="/" class={list ? 'w-40' : 'lg:w-60'}>
		<img
			src="/images/flowbite-svelte-icon-logo.svg"
			class="me-2.5 h-6 sm:h-8"
			alt="Flowbite Logo"
		/>
		<span
			class="ml-px self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl"
		>
			Innova ADS
		</span>
	</NavBrand>
	
	<div class="ms-auto flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
		<!-- <Notifications />
		<AppsMenu /> -->
		<DarkMode />
		<UserMenu />
	</div>
</Navbar>
