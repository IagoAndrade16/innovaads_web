<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../../app.pcss';
	import BreadcrumbsComponent from './BreadcrumbsComponent.svelte';
	import FacebookNotConnectedWarning from './FacebookNotConnectedWarning.svelte';
	import Footer from './Footer.svelte';
	import TrialPeriodWarning from './TrialPeriodWarning.svelte';
	import type { BreadcrumbItemType } from './types/breadcrumb';

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
	<div class="relative h-full overflow-y-auto lg:ml-64 pt-[70px]">
		
		<FacebookNotConnectedWarning />
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
