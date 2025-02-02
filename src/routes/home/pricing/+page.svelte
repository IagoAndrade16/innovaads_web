<script lang="ts">
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import { CloseOutline } from 'flowbite-svelte-icons';
	import MetaTag from '../../utils/MetaTag.svelte';
	import PriceCard from './PriceCard.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ListPackages from '$lib/components/ListPackages.svelte';

	let yearly: boolean = false;
	let prices: string[][] = [
		['$24', '$200'],
		['$49', '$400'],
		['$499', '$1500']
	];
	$: period = yearly ? 'year' : 'month';

	const path: string = '/pages/pricing';
  const description: string = 'InnovaADS - Planos';
  const title: string = 'InnovaADS - Planos';
  const subtitle: string = 'Preços';
</script>

<MetaTag {path} {description} {title} {subtitle} />

<Navbar />
<main class="mx-auto bg-gray-50 dark:bg-gray-900">
	<div class="container mx-auto px-4 pt-24 dark:bg-gray-900 md:pt-32 lg:px-0">
		<ListPackages />
	</div>
</main>

<div class="mt-12">
	<Footer />
</div>
