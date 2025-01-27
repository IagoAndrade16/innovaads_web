<script>
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import modeobserver from './utils/modeobserver';
	import { onMount } from 'svelte';
	import { LocalStorage } from  'node-localstorage';

	onMount(() => {
		modeobserver();
		// localStorage = new LocalStorage('./src/scratch')
	});
</script>
<Navbar />

<slot />
