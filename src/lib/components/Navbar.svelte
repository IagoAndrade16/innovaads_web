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
			src="/images/logo-only-rocket.png"
			class="me-2.5 h-8 sm:h-10"
			alt="Flowbite Logo"
		/>
		<span
			class="ml-px self-center font-days whitespace-nowrap text-[#ef552f] text-lg font-semibold dark:text-white sm:text-xl"
		>
			Innova ADS
		</span>
	</NavBrand>
	
	<div class="ms-auto me-3 flex items-center text-gray-500 dark:text-gray-400 sm:order-2">
		<!-- <Notifications />
		<AppsMenu /> -->
		<DarkMode />
		<UserMenu />
	</div>
</Navbar>
