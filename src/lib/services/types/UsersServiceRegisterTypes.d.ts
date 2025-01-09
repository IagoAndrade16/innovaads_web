export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface RegisterUserResponse {
  status: RegisterUserResponseStatus;
}

export type RegisterUserResponseStatus = 'SUCCESS' | 'UNKNOWN' | 'USER_ALREADY_EXISTS';