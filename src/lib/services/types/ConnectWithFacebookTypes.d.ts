export type ConnectWithFacebookRequest = {
  accessToken: string;
  bearerToken: string;
  userIdOnFacebook: string;
  expiresIn: number;
};

export type ConnectWithFacebookResponse = {
  status: 'SUCCESS' | 'UNKNOWN' | 'UNAUTHORIZED';
  data?: ConnectWithFacebookResponseData | null;
}

export type ConnectWithFacebookResponseData =  {
  accessToken: string;
  userIdOnFacebook: string;
  expiresIn: number;
};