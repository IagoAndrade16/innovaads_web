<script>
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import modeobserver from './utils/modeobserver';
	import { onMount } from 'svelte';

	onMount(modeobserver);
</script>
<Navbar />

<slot />
