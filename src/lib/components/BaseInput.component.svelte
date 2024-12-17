<script lang="ts">
	import type { HtmlInputTypes } from "$lib/types/html/html-types";
	import { FloatingLabelInput } from "flowbite-svelte";
	import InputTextError from "./InputTextError.component.svelte";

  export let label: string; 
  export let value: string;
  export let id: string;
  export let name: string = '';
  export let inputType: HtmlInputTypes = 'text';
  export let classes: string = '';
  export let error: unknown = '';

</script>

<FloatingLabelInput 
  id="{id}" 
  name="{name}" 
  type="{inputType}" 
  class="{classes}" 
  bind:value
>
  {label}
</FloatingLabelInput>
<InputTextError error={error as string}/>