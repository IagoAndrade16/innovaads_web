type FacebookSdkMethods = 'get' | 'post' | 'delete';

export type GetLoginStatusOutput = {
  status: 'connected' | 'not_authorized' | 'unknown';
  authResponse: {
    accessToken: string;
    expiresIn: number;
    signedRequest: string;
    userID: string;
  };
}

export type FacebookSdkReference = {
  api(path: string, method: FacebookSdkMethods, params: unknown, callback: (response: unknown) => void): void;
  getLoginStatus(callback: (response: unknown) => void): void;
  login(callback: (response: unknown) => void): void;
  logout(callback: () => void): void;
}