import type { FacebookSdkReference, GetLoginStatusOutput } from "./types/FacebookSdkTypes";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
	  FB: unknown;
  }
}

export class FacebookSdk implements FacebookSdkReference {
  private static instance: FacebookSdk;
  private sdk: FacebookSdkReference | null = null;

  constructor() {
    this.initSdk().then((sdk: any) => {
      this.sdk = sdk;
    });
  }

  private initSdk(): any {
    return new Promise(resolve => {
			if (window.FB) {
				resolve(window.FB);
			} else {
				const interval = setInterval(() => {
					if (window.FB) {
						clearInterval(interval);
						resolve(window.FB);
					}
				}, 100);
			}
		});
  }

  public async getLoginStatus(): Promise<GetLoginStatusOutput> {
    return new Promise(resolve => {
      this.sdk?.getLoginStatus((response: unknown) => {
        resolve(response as GetLoginStatusOutput);
      });
    });
  }

  public async logout(): Promise<void> {
    const response = await this.getLoginStatus();

    if (response && response.status === 'connected') {
      return new Promise(resolve => {
        this.sdk?.logout(() => {
          resolve();
        });
      });
    }
  }

  public async api(path: string, method: "get" | "post" | "delete", params: unknown, callback: (response: unknown) => void): Promise<void> {
    return new Promise(resolve => {
      this.sdk?.api(path, method, params, (response: unknown) => {
        callback(response);
        resolve();
      });
    });
  }
  
  public async login(callback: (response: unknown) => void): Promise<void> {
    return new Promise(resolve => {
      this.sdk?.login((response: unknown) => {
        callback(response);
        resolve();
      });
    });
  }

  public static async getInstance(): Promise<FacebookSdk> {
    if (!FacebookSdk.instance) {
      FacebookSdk.instance = new FacebookSdk();
    }

    return FacebookSdk.instance;
  }
}