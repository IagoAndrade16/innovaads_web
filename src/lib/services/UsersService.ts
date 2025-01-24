import { ApiService } from "./ApiService";
import type { AuthUserRequest, AuthUserResponse } from "./types/UsersServiceAuthTypes";
import type { RegisterUserRequest, RegisterUserResponse } from "./types/UsersServiceRegisterTypes";


export class UsersService extends ApiService {
  constructor() {
    super();
  }

  public async auth(params: AuthUserRequest): Promise<AuthUserResponse> {
    const response = await this.post('/users/auth', {}, {
      email: params.email,
      password: params.password
    });

    if(response.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED',
        data: null
      }
    }

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

  public async register(params: RegisterUserRequest): Promise<RegisterUserResponse> {
    const response = await this.post('/users', {
      email: params.email,
      password: params.password,
      name: params.name,
      phone: params.phone
    });

    if (response.statusCode === 201) {
      return {
        status: 'SUCCESS',
      }
    }

    if (response.statusCode === 400) {
      return {
        status: response.data.reason,
      }
    }

    return {
      status: 'UNKNOWN',
    }
  }
}