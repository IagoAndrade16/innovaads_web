export type GetSubscriptionSummaryRequest = {
  bearerToken: string;
}

export type GetSubscriptionSummaryResponse = {
  status: 'SUCCESS' | 'UNAUTHORIZED' | 'UNKNOWN';
  data: GetSubscriptionSummaryResponseData | null;
}

export type GetSubscriptionSummaryResponseData = {
  package: {
    id: string;
    name: string;
    price: number;
    description: string;
    details: PackageDetails[];
  } | null,
  subscription: {
    nextBillingAt: string;
    status: 'active' | 'failed' | 'canceled'
    card: {
      brand: string;
      lastFourDigits: string;
      firstSixDigits: string;
    }
  } | null;
}