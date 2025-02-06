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
    card: {
      brand: string;
      lastFourDigits: string;
      firstSixDigits: string;
    }
  } | null;
}