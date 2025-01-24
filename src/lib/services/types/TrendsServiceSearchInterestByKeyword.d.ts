export type SearchInterestByKeywordInput = {
  keyword: string;
  startDate?: string;
  endDate?: string;
}


export type SearchInterestByKeywordOutput = {
  status: 'SUCCESS' | 'UNAUTHORIZED' | 'UNKNOWN';
  result?: SearchInterestApiResponse;
}

export type SearchInterestApiResponse = {
  default: {
    timelineData: TimelineData[];
  }
}

export type TimelineData = {
  time: string;
  formattedTime: string;
  formattedAxisTime: string;
  value: number[];
  hasData: boolean[];
  isPartial?: boolean;
}