export interface CancelSubscriptionRequest {
  bearerToken: string;
}


export interface CancelSubscriptionResponse {
  status: 'SUCCESS' | 'SUBSCRIPTION_NOT_FOUND' | 'UNAUTHORIZED' | 'UNKNOWN';
}