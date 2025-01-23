<script lang="ts">

	import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
	import type { BreadcrumbItemType } from "./types/breadcrumb";

  export let items: BreadcrumbItemType[] = [];

</script>
<div class="col-span-full xl:mb-0">
  <Breadcrumb class="mb-6">
    <BreadcrumbItem home>Home</BreadcrumbItem>
    {#each items as item}
      <BreadcrumbItem href={item.href}>{item.name}</BreadcrumbItem>
    {/each}
  </Breadcrumb>
</div>