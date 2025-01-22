export interface UpdateUserRequest {
  name: string;
  phone: string;
  email: string;
  bearerToken: string;
}

export interface UpdateUserResponse {
  status: 'SUCCESS' | 'UNKNOWN';
}