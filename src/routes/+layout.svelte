<script>
	import { onMount } from 'svelte';
	import modeobserver from './utils/modeobserver';

	onMount(modeobserver);

</script>

<slot />
