export interface UpdateUserPasswordRequest {
  actualPassword: string;
  newPassword: string;
  bearerToken: string;
}

export interface UpdateUserPasswordResponse {
  status: 'SUCCESS' | 'UNKNOWN' | 'INVALID_PASSWORD' | 'USER_NOT_FOUND';
}