<script lang="ts">
  import Flatpickr from 'svelte-flatpickr';
  import 'flatpickr/dist/flatpickr.css';
  import { Portuguese } from 'flatpickr/dist/l10n/pt.js';
	import { Label } from 'flowbite-svelte';

  export let fromDate: string;
  export let toDate: string;

  const options = {
    mode: 'range' as 'single' | 'range' | 'multiple' | 'time',
    locale: Portuguese,
  }

  const handleChange = (selectedDate: CustomEvent) => {
    const dateRange: string = selectedDate.detail[1];
    [fromDate, toDate] = dateRange.split(' até ');    
  }

  const labelClass = 'space-y-2 dark:text-white';
</script>

<div>
  <Label class={labelClass}>
    <span>Selecione a Data</span>
    <Flatpickr
      children
      options={options}
      class="border rounded-md h-[40px] px-2 w-full outline-none border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
      placeholder="Selecione a data"
      on:change={handleChange}
    />
  </Label>
</div>