<script lang="ts">
  import { Cnpj } from '$lib/core/value-objects/Cnpj';
  import { Document } from '$lib/core/value-objects/Document';
  import BaseInput from './BaseInput.svelte';

  const cpfMask = '000.000.000-00';
  const cnpjMask = '00.000.000/0000-00';

	export let value: string = '';
  export let error: unknown = '';
  export let useCustomText: boolean = false;
  export let customText: string = '';
  let isValidDocument: boolean | null = value ? Document.isValid(value) : null;

  let mask = Cnpj.isValid(value) ? cnpjMask : cpfMask;

  const handleInput = (el: HTMLInputElement) => {
    isValidDocument = Document.isValid(value);
    const dispatchUpdate = (newValue: string) => {
      setTimeout(
          () => {
            // eslint-disable-next-line no-param-reassign
            el.value = newValue;
            el.dispatchEvent(new Event('input'));
          },
          0,
      );
    };

    if (Cnpj.isValid(value) && mask !== cnpjMask) {
    mask = cnpjMask;
      dispatchUpdate(value);
      return;
    }

    if (value.length > cpfMask.length) {
      if (value.length === cpfMask.length + 1 && !value.includes('/') && mask !== cnpjMask) {
        dispatchUpdate(value);
      }
  
      mask = cnpjMask;
    } else {
      mask = cpfMask;
    }
  };
</script>

<BaseInput
  label={useCustomText ? customText : 'CPF/CNPJ'}
  name="document"
  mask={mask}
  placeholder="999.999.999-99"
  error={error}
  onInput={handleInput}
  bind:value={value}
  maxLength={18}
/>
