export type FetchCreativesRequest = {
  search_terms: string;
  ad_reached_countries: string;
};

export type FetchDailyAdsResponse = {
  status: 'SUCCESS' | 'UNAUTHORIZED' | 'UNKNOWN';
  data: {
    id?: string;
    ad_creation_time?: string;
    ad_creative_body?: string[];
    ad_creative_link_captions?: string[];
    ad_creative_link_descriptions?: string[];
    ad_creative_link_titles?: string[];
    ad_delivery_start_time?: string;
    ad_delivery_stop_time?: string;
    ad_snapshot_url?: string;
    age_country_gender_reach_breakdown?: {
      age_range?: string;
      female?: number;
      male?: number;
      unknown?: number;
    }[];
    beneficiary_payers?: {
      beneficiary?: string;
      current?: string;
      payer?: string;
    }[];
    br_total_reach?: number
    bylines?: string;
    currency?: string;
    delivery_by_region: AudienceDistribution[];
    demographic_distribution?: AudienceDistribution[];
    estimated_audience_size?: InsightsRangeValue;
    eu_total_reach?: number;
    impressions?: InsightsRangeValue;
    languages?: string[];
    page_id?: string;
    page_name?: string;
    publisher_platforms?: AdPublisherPlatform[];
    spend?: InsightsRangeValue;
    target_ages?: string[];
    target_gender?: string[];
    target_location?: {
      excluded: boolean;
      name: string;
      num_obfuscated: number;
      type: 'country' | 'region' | 'postal' | 'code' | 'city';
    }[];
  }[];
}