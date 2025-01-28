<script lang="ts">
	import type { JsObject } from "$lib/types/JsObject";
  import { Steps } from "svelte-steps";

  export let steps: JsObject[];
  export let currentStep: number;

</script>

<div>
  <Steps {steps} current={currentStep} clickable={false}  primary="#EB4F27" secondary="#FFF1EE" />
</div>