<script lang="ts">
	import '../../app.pcss';
  import Navbar from '$lib/components/Navbar.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
	import { userStore } from '$lib/stores/userStore';
	import { Alert } from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import Footer from './Footer.svelte';
	import BreadcrumbsComponent from './BreadcrumbsComponent.svelte';
	import type { BreadcrumbItemType } from './types/breadcrumb';
	import TrialPeriodWarning from './TrialPeriodWarning.svelte';

	let drawerHidden = false;

	export let breadcrums: BreadcrumbItemType[] = [];
</script>

<header
	class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
>
	<Navbar bind:drawerHidden />
</header>
<div class="overflow-hidden">
	<Sidebar bind:drawerHidden />
	<div class="ml-3 mr-3 sm:mx-6 lg:ml-72 pt-[85px]">
		<slot />
	</div>

	<div class="relative h-full w-full overflow-y-auto lg:ml-64 pt-[70px]">
		
		<TrialPeriodWarning />

		<main class="p-4">
			<BreadcrumbsComponent 
				items={breadcrums}
			/>
			<slot />
		</main>
		
		<Footer />
		
	</div>
</div>
