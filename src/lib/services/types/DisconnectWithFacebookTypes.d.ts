export type DisconnectWithFacebookRequest = {
  bearerToken: string;
};

export type DisconnectWithFacebookResponse = {
  status: 'SUCCESS' | 'UNKNOWN' | 'UNAUTHORIZED';
  data?: null;
}