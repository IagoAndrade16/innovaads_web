export type ConnectWithGoogleRequest = {
  code: string;
}

export type ConnectWithGoogleReponse = {
  status: 'SUCCESS' | 'UNKNOWN' | 'UNAUTHORIZED' | 'FAILED_TO_CONNECT_ACCOUNT';
  data?: ConnectWithGoogleResponseData | null;
}

export type ConnectWithGoogleResponseData = {
  expiresIn: Date;
  accessToken: string;
  expiresRefreshIn: Date;
}