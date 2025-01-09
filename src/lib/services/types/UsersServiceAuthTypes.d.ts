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
}

export type AuthUserResponseStatus = 'SUCCESS' | 'UNKNOWN' | 'UNAUTHORIZED';