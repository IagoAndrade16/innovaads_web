import { ApiService } from "./ApiService";
import type { ListPackagesResponse } from "./types/ListPackagesResponse";

export class PackagesService extends ApiService {
  constructor() {
    super();
  }

  public async listPackages(): Promise<ListPackagesResponse> {
    const response = await this.get('/packages');

    if(response.statusCode === 200) {
      return {
        status: 'SUCCESS',
        data: {
          ...response.data
        }
      }
    }

    return {
      status: 'UNKNOWN',
      data: null
    }
  }
}