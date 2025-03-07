import { ApiService } from "./ApiService";
import type { CancelSubscriptionRequest, CancelSubscriptionResponse } from "./types/CancelSubscriptionTypes";
import type { GetSubscriptionSummaryRequest, GetSubscriptionSummaryResponse } from "./types/GetSubscriptionSummary";
import type { CreateSubscritionRequest, CreateSubscritionResponse } from "./types/SubscriptionsServiceCreate";

export class SubscriptionsService extends ApiService {
  constructor() {
    super();
  }

  public async create(input: CreateSubscritionRequest): Promise<CreateSubscritionResponse> {
    const response = await this.post('/packages/subscriptions', input, {
      token: input.bearerToken,
    });

    if(response.statusCode === 201) {
      return {
        status: 'SUCCESS',

      }
    }

    if(response.statusCode === 404 || response.statusCode === 400) {
      return {
        status: response.data.reason,
      }
    }

    if(response.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED',
      }
    }

    return {
      status: 'UNKNOWN',
    }
  }

  public async getSummary(input: GetSubscriptionSummaryRequest): Promise<GetSubscriptionSummaryResponse> {
    const response = await this.get('/packages/subscriptions', {
      token: input.bearerToken,
    });

    if(response.statusCode === 200) {
      return {
        status: 'SUCCESS',
        data: response.data,
      }
    }

    if(response.statusCode === 404 || response.statusCode === 400) {
      return {
        status: response.data.reason,
        data: null,
      }
    }

    if(response.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED',
        data: null,
      }
    }

    return {
      status: 'UNKNOWN',
      data: null,
    }
  }

  public async cancelSubscription(input: CancelSubscriptionRequest): Promise<CancelSubscriptionResponse> {
    const response = await this.delete('/packages/subscriptions', {}, {
      token: input.bearerToken,
    });

    if(response.statusCode === 204) {
      return {
        status: 'SUCCESS',
      }
    }

    if(response.statusCode === 404 || response.statusCode === 400) {
      return {
        status: response.data.reason,
      }
    }

    if(response.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED',
      }
    }

    return {
      status: 'UNKNOWN',
    }
  }
}