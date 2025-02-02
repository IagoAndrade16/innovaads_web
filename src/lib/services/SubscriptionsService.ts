import { ApiService } from "./ApiService";
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
}