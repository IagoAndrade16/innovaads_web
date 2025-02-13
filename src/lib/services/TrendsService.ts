import { MomentUtils } from "$lib/core/MomentUtils";
import Utils from "$lib/core/Utils";
import { ApiService } from "./ApiService";
import type { MostInterestedRegionsInput, MostInterestedRegionsOutput, MostInterestedRegionsOutputResult } from "./types/MostInterestedRegions";
import type { FetchDailyTrendsOutput, FetchDailyTrendsOutputResult, FetchDailyTrendsRequestInput } from "./types/TrendsServiceFetchDailyTrends";
import type { SearchInterestApiResponse, SearchInterestByKeywordInput, SearchInterestByKeywordOutput } from "./types/TrendsServiceSearchInterestByKeyword";

export class TrendsService extends ApiService {
  constructor() {
    super();
  }

  public async fetchDailyTrends(input: FetchDailyTrendsRequestInput, token: string): Promise<FetchDailyTrendsOutput> {
    const trendsDateFormatted = MomentUtils.formattedDate(input.trendsDate ? new Date(input.trendsDate) : new Date(), 'YYYY-MM-DD');

    const queryParams = Utils.buildQueryParams<FetchDailyTrendsRequestInput>({
      ...input,
      trendsDate: trendsDateFormatted,
    });

    const response = await this.get(`/analytics/trends/daily?${queryParams}`, {
      token,
    });

    if (response.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED'
      }
    }

    if (response.statusCode === 200) {
      return {
        status: 'SUCCESS',
        result: response.data.result as FetchDailyTrendsOutputResult,
      }
    }

    if (response.statusCode === 400) {
      return {
        status: response.data.reason,
      }
    }
    
    return {
      status: 'UNKNOWN'
    }
  }

  public async searchInterest(input: SearchInterestByKeywordInput, token: string): Promise<SearchInterestByKeywordOutput> {
    const queryParams = Utils.buildQueryParams<SearchInterestByKeywordInput>(input);

    const response = await this.get(`/analytics/trends/search-interest?${queryParams}`, {
      token,
    });

    if (response.statusCode === 200) {
      return {
        status: 'SUCCESS',
        result: response.data.result as SearchInterestApiResponse,
      } 
    }

    if (response.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED'
      }
    }

    if (response.statusCode === 400) {
      return {
        status: response.data.reason,
      }
    }

    return {
      status: 'UNKNOWN'
    }
  }

  public async mostInterestedRegions(data: MostInterestedRegionsInput, token: string): Promise<MostInterestedRegionsOutput> {
    const queryParams = Utils.buildQueryParams<MostInterestedRegionsInput>(data);

    const res = await this.get(`/analytics/trends/regions?${queryParams}`, {
      token,
    });

    if (res.statusCode === 200) {
      return {
        status: 'SUCCESS',
        result: res.data.result as MostInterestedRegionsOutputResult[],
      }
    }
    
    if (res.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED'
      }
    }

    if (res.statusCode === 400) {
      return {
        status: res.data.reason,
      }
    }

    return {
      status: 'UNKNOWN'
    }
  }
}