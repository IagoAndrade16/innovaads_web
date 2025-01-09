<script lang="ts">
	import type { HtmlInputTypes } from "$lib/types/html/html-types";
	import ErrorText from "./ErrorText.component.svelte";
	import Utils from "$lib/core/Utils";
	import { Patterns, type PatternType } from "$lib/core/Pattern";
	import FloatingLabelInput from "../../template/FloatingLabelInput.svelte";

  export let label: string; 
  export let value: string;
  export let id: string;
  export let name: string = '';
  export let inputType: HtmlInputTypes = 'text';
  export let classes: string = '';
  export let error: unknown = '';
  export let mask: string | null = null;
  export let maxLength: number | null = null;
  export let onInput: ((el: HTMLInputElement) => void) | null = null;
  export let resetErrorOnInput: boolean = true;
  export let pattern: PatternType | null = null;

  let inputEl: HTMLInputElement;

  const maskInput = () => {
    if (mask) value = Utils.applyMask(mask, value, maxLength ?? undefined);
  };

  maskInput();
  function onInputHandle() {
    if(maxLength) {
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

<FloatingLabelInput
  id="{id}" 
  name="{name}" 
  type="{inputType}"
  class="{classes}"
  bind:inputEl
  bind:value
  on:input="{onInputHandle}"
>
  {label}
</FloatingLabelInput>

<ErrorText error={error as string}/>