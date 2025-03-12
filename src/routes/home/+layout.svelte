<script lang="ts">
	import Engine from "$lib/core/Engine";
	import { Enviroment } from "$lib/core/Enviroment";
	import { userStore } from '$lib/stores/userStore';

  Engine.assert([$userStore !== null], '/login');
  Engine.assert([$userStore?.verified2fa !==  false], '/verify-2fa');
  Enviroment.init();
  
</script>

<slot />