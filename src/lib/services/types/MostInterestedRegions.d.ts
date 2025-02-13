export type MostInterestedRegionsInput = {
  keyword: string;
  startDate?: string;
  endDate?: string;
}

export type MostInterestedRegionsOutput = {
  status: 'SUCCESS' | 'UNAUTHORIZED' | 'UNKNOWN';
  result?: MostInterestedRegionsOutputResult[];
}

type MostInterestedRegionsOutputResult = {
  lat: number;
  lng: number;
  intesity: number;
  city: string;
}

export type CoordinatesData = MostInterestedRegionsOutputResult;