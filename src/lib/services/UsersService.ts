import { ApiService } from "./ApiService";
import type { ConnectWithFacebookRequest, ConnectWithFacebookResponse } from "./types/ConnectWithFacebookTypes";
import type { BaseForgotUserPasswordOutput, ResetPasswordInput, VerifyPasswordRecoveryCodeInput, VerifyPasswordRecoveryCodeOutput } from "./types/ForgotUserPassword";
import type { AuthUserRequest, AuthUserResponse } from "./types/UsersServiceAuthTypes";
import type { RegisterUserRequest, RegisterUserResponse } from "./types/UsersServiceRegisterTypes";
import type { UpdateUserPasswordRequest, UpdateUserPasswordResponse } from "./types/UsersServiceUpdatePasswordTypes";
import type { UpdateUserRequest, UpdateUserResponse } from "./types/UsersServiceUpdateTypes";
import type { BaseResponseVerificationUserByEmail, VerifyCodeToValidateUserInput, VerifyCodeToValidateUserOutput } from "./types/VerificationUserByEmail";


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
      status: 'UNKNOWN',
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
      status: 'UNKNOWN',
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
      status: 'UNKNOWN',
    }
  }

  public async sendVerificationEmailToUser(token: string): Promise<BaseResponseVerificationUserByEmail> {
    const response = await this.get('/users/2fa', { token });

    if (response.statusCode === 204) {
      return {
        status: 'SUCCESS',
      }
    }

    if (response.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED',
      }
    }

    return {
      status: 'UNKNOWN',
    }
  }

  public async verifyCodeToValidateUser(input: VerifyCodeToValidateUserInput): Promise<VerifyCodeToValidateUserOutput> {
    const response = await this.post('/users/2fa/verify', {
      code: input.code,
    }, {
      token: input.token,
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

    if (response.statusCode === 401) {
      return {
        status: 'UNAUTHORIZED',
      }
    }

    return {
      status: 'UNKNOWN',
    }
  }

  public async connectWithFacebook(params: ConnectWithFacebookRequest): Promise<ConnectWithFacebookResponse> {
    const response = await this.post('/users/facebook-account/connect', {
      accessToken: params.accessToken,
      userIdOnFacebook: params.userIdOnFacebook,
      expiresIn: params.expiresIn
    }, {
      token: params.bearerToken,
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
}