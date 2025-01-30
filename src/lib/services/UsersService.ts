import { ApiService } from "./ApiService";
import type { BaseForgotUserPasswordOutput, ResetPasswordInput, VerifyPasswordRecoveryCodeInput, VerifyPasswordRecoveryCodeOutput } from "./types/ForgotUserPassword";
import type { AuthUserRequest, AuthUserResponse } from "./types/UsersServiceAuthTypes";
import type { RegisterUserRequest, RegisterUserResponse } from "./types/UsersServiceRegisterTypes";
import type { UpdateUserPasswordRequest, UpdateUserPasswordResponse } from "./types/UsersServiceUpdatePasswordTypes";
import type { UpdateUserRequest, UpdateUserResponse } from "./types/UsersServiceUpdateTypes";


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

  public async update(params: UpdateUserRequest): Promise<UpdateUserResponse> {
    const response = await this.put('/users', {
      email: params.email,
      name: params.name,
      phone: params.phone
    }, { token: params.bearerToken});

    if(response.statusCode === 204) {
      return {
        status: 'SUCCESS',
      }
    }

    if(response.statusCode === 400) {
      return {
        status: response.data.reason,
      }
    }

    return {
      status: 'UNKNOWN',
    }
  }

  public async updatePassword(params: UpdateUserPasswordRequest): Promise<UpdateUserPasswordResponse> {
    const response = await this.patch('/users/password', {
      actualPassword: params.actualPassword,
      newPassword: params.newPassword
    }, { token: params.bearerToken });

    if(response.statusCode === 204) {
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

  public async sendPasswordRecoveryEmail(email: string): Promise<BaseForgotUserPasswordOutput> {
    const response = await this.post('/users/2fa/forgot-password', {
      email,
    });    

    if (response.statusCode === 204) {
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
      status: 'BAD_REQUEST',
    }
  }

  public async verifyPasswordRecoveryCode(input: VerifyPasswordRecoveryCodeInput): Promise<VerifyPasswordRecoveryCodeOutput> {
    const response = await this.post('/users/2fa/forgot-password/verify', {
      code: input.code,
      email: input.email,
    });    

    if (response.statusCode === 204) {
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
      status: 'BAD_REQUEST',
    }
  }

  public async resetPassword(input: ResetPasswordInput): Promise<BaseForgotUserPasswordOutput> {
    const response = await this.post('/users/2fa/forgot-password/reset', {
      email: input.email,
      newPassword: input.newPassword,
    });    

    if (response.statusCode === 204) {
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
      status: 'BAD_REQUEST',
    }
  }
}