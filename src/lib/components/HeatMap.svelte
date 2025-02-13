<script lang="ts">
  import { onMount } from 'svelte';
  import 'leaflet/dist/leaflet.css';
  import type { CoordinatesData } from '$lib/services/types/MostInterestedRegions';
  import { coordinatesDataStore } from '$lib/stores/coordinatesStore';
  import type { HeatLatLngTuple, HeatLayer } from 'leaflet';

  export let map: L.Map | null = null;
  let heatLayer: HeatLayer | null = null;
  let coordinatesData: CoordinatesData[] = [];

  const initializeMap = async () => {
    if (typeof window === 'object') {
      const L = await import('leaflet');
      await import('leaflet.heat');

      if (!map && coordinatesData.length > 0) {
        map = L.map('map').setView([coordinatesData[0].lat, coordinatesData[0].lng], coordinatesData[0].intesity);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
      }
    }
  };

  const updateHeatLayer = async () => {
    if (typeof window === 'object') {
      const L = await import('leaflet');
      await import('leaflet.heat');

      if (map) {
        if (heatLayer) {
          map.removeLayer(heatLayer);
        }

        const heatData: HeatLatLngTuple[] = coordinatesData.map(item => [item.lat, item.lng, item.intesity]);

        heatLayer = L.heatLayer(heatData, { 
          radius: 25,
          blur: 15,
          maxZoom: 17,
        }).addTo(map);
      }
    }
  };

  onMount(() => {
    coordinatesDataStore.subscribe(async (value) => {
      coordinatesData = value;      
      if (coordinatesData.length > 0) {
        await initializeMap();
        await updateHeatLayer();
      }
    });
  });
</script>

<div class="h-[30rem] mt-5 {coordinatesData.length === 0 ? 'hidden' : ''}" id="map"></div>