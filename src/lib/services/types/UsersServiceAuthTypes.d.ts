export interface AuthUserRequest {
  email: string;
  password: string;
}

export interface AuthUserResponse {
  status: AuthUserResponseStatus;
  data: AuthUserResponseData | null;
}

export interface AuthUserResponseData {
  auth: {
    token: string;
  };
  name: string;
  email: string;
  phone: string;
  isOnTrial: boolean;
  daysRemainingForTrial: number;
  packageId: string | null;
  verified2fa: boolean;
  subscriptionStatus: string | null;
  canUsePlatformUntil: Date | null;
}

export type AuthUserResponseStatus = 'SUCCESS' | 'UNKNOWN' | 'UNAUTHORIZED';