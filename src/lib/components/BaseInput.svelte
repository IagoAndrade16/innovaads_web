<script lang="ts">
	import type { HtmlInputTypes } from "$lib/types/html/html-types";


	import { Input, Label } from "flowbite-svelte";
	import ErrorText from "./ErrorText.svelte";

  export let label: string;
  export let value = '';
  export let inputType: HtmlInputTypes = 'text';
  export let name: string;
  export let placeholder: string;
  export let required: boolean = true;
  export let error: unknown = '';
  export let additionalLabelClasses: string = '';
  
	const labelClass = 'space-y-2 dark:text-white';

</script>

  <Label class="{labelClass} {additionalLabelClasses}">
    <span>{label}</span>
    <Input
      bind:value
      type="{inputType}"
      name="{name}}"
      placeholder="{placeholder}"
      bind:required
      class="border outline-none dark:border-gray-600 dark:bg-gray-700"
    />
  </Label>
  <ErrorText error={String(error ?? '')}/>