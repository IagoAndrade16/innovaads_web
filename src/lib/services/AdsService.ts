import { ApiService } from "./ApiService";
import type { FetchCreativesRequest, FetchDailyAdsResponse } from "./types/AdsService";

export class AdsService extends ApiService {
  constructor() {
    super();
  }

  public async fetchCreatives(input: FetchCreativesRequest, token: string): Promise<FetchDailyAdsResponse> {
    const response = await this.post('/ads/creatives/fetch', {
      filters: {
        ...input,
      }
    }, {
      token,
    })

    if (response.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED',
        data: [],
      }
    }

    if (response.statusCode === 200) {
      return {
        status: 'SUCCESS',
        data: response.data.ads as FetchDailyAdsResponse['data'],
      }
    }

    if (response.statusCode === 400) {
      return {
        status: response.data.reason,
        data: [],
      }
    }
    
    return {
      status: 'UNKNOWN',
      data: [],
    }
  }
}