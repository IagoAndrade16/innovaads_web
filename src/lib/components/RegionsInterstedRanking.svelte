<script lang="ts">
	import type { CoordinatesData, MostInterestedRegionsOutputResult } from "$lib/services/types/MostInterestedRegions";
	import { coordinatesDataStore } from "$lib/stores/coordinatesStore";
	import { Button } from "flowbite-svelte";
	import { onMount } from "svelte";

  let coordinatesData: CoordinatesData[] = [];
  let onClick: (() => void) | null = null;
  export let heatMap: L.Map | null = null;

  const setNewMapPlace = (input: MostInterestedRegionsOutputResult) => {
    heatMap?.setView([input.lat, input.lng], input.intesity);
  }

  onMount(() => {
    coordinatesDataStore.subscribe(async (value) => {
      coordinatesData = value;
    });
  });
</script>

<div class="space-y-3 max-h-[30rem] overflow-y-auto mt-5">
  {#each coordinatesData as coordinateData}
    <div class="rounded-xl backdrop-blur-lg border-2 mr-3 p-4">
      <div class="flex justify-between items-center">
        <h3 class="text-gray-900 dark:text-white"><b>{coordinateData.city}</b></h3>
        <Button size="sm" 
          on:click={(() => setNewMapPlace(coordinateData))}
        >
          Ver
        </Button>
      </div>
    </div>
  {/each}
</div>