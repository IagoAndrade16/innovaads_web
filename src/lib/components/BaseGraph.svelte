<script lang="ts">
	import type { ApexOptions } from 'apexcharts';
  import { Card, Chart } from 'flowbite-svelte';

  export let options: ApexOptions;
  export let title: string = '';
  export let clazz: string = '';  

  export { clazz as class };
</script>

<Card class="mt-5 mb-5 max-w-full">
  <h5 class="leading-none text-xl lg:text-2xl font-bold text-gray-900 dark:text-white pb-2">{title}</h5>
  <Chart class={clazz} {options}/>
</Card>

