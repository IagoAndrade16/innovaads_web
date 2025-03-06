<script lang="ts">
	import type { HtmlInputTypes } from "$lib/types/html/html-types";


	import { Label } from "flowbite-svelte";
	import ErrorText from "./ErrorText.svelte";
	import Utils from "$lib/core/Utils";
	import { Patterns, type PatternType } from "$lib/core/Pattern";
	import Input from "../../template/Input.svelte";

  export let label: string = '';
  export let value = '';
  export let inputType: HtmlInputTypes = 'text';
  export let name: string;
  export let placeholder: string;
  export let required: boolean = true;
  export let error: unknown = '';
  export let additionalLabelClasses: string = '';
  export let mask: string | null = null;
  export let maxLength: number | null = null;
  export let maxLengthInput: number | null = null;
  export let pattern: PatternType | null = null;
  export let onInput: ((el: HTMLInputElement) => void) | null = null;
  export let resetErrorOnInput: boolean = true;
  export let addiotionalInputClasses: string = '';
  
	const labelClass = 'space-y-2 dark:text-white';
  let inputEl: HTMLInputElement;

  const maskInput = () => {
    if (mask) value = Utils.applyMask(mask, value, maxLength ?? undefined);
  };

  maskInput();
  function onInputHandle() {
    if (maxLength) {
      if (onInput) onInput(inputEl);
      maskInput();
    } else {
      maskInput();
      if (onInput) onInput(inputEl);
    }

    if (resetErrorOnInput) error = null;

    value = Patterns.filter(value, pattern);
  }

</script>

  <Label class="{labelClass} {additionalLabelClasses}">
    <span>{label}</span>
    <Input
      bind:value
      type="{inputType}"
      name="{name}}"
      placeholder="{placeholder}"
      bind:inputEl={inputEl}
      on:input={onInputHandle}
      bind:required
      class="border outline-none dark:border-gray-600 dark:bg-gray-700 {addiotionalInputClasses}"
      maxlength={maxLengthInput}
    />

    <ErrorText error={String(error ?? '')}/>
  </Label>