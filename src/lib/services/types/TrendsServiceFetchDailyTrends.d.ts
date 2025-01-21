/* eslint-disable @typescript-eslint/no-explicit-any */

export type FetchDailyTrendsRequestInput = {
  geoLocation?: string;
  trendsDate?: string;
}

export type FetchDailyTrendsOutputResult = {
  default: {
    trendingSearchesDays: TrendingSearchesDays[];
  }
}

export type FetchDailyTrendsOutput = {
  status: 'SUCCESS' | 'UNAUTHORIZED' | 'USER_NOT_FOUND' | 'UNKNOWN';
  result?: FetchDailyTrendsOutputResult;
}

export type TrendingSearchesDays = {
  date: string;
  formattedDate: string;
  trendingSearches: TrendingSearch[];
};

export type TrendingSearch = {
  title: {
    query: string;
    exploreLink: string;
  };
  formattedTraffic: string;
  relatedQueries: any[];
  image: {
    newsUrl: string;
    source: string;
    imageUrl: string;
  };
  articles: ArticleDailyTrends[];
}

export type ArticleDailyTrends = {
  title: string;
  timeAgo: string;
  source: string;
  url: string;
  image: {
    newsUrl: string;
    source: string;
    imageUrl: string;
  };
  snippet: string;
}