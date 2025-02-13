import type { CoordinatesData } from "$lib/services/types/MostInterestedRegions";
import { writable } from "svelte/store";

export const coordinatesDataStore = writable<CoordinatesData[]>([]);
