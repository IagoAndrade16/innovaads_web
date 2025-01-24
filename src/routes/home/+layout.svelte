<script lang="ts">
	import Engine from "$lib/core/Engine";
	import { userStore } from '$lib/stores/userStore';

  Engine.assert([$userStore !== null], '/login')
  
</script>

<slot />