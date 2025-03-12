import { Enviroment } from "$lib/core/Enviroment";

type GoogleOAuthParams = {
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  access_type: string;
  prompt: string;
}

export class GoogleOAuthSetup {
  buildUrl(): string {
    const params = new URLSearchParams(this.getParams());
    return `${Enviroment.vars.VITE_GOOGLE_AUTH_BASE_URL}?${params.toString()}`;
  } 

  private getParams(): GoogleOAuthParams {
    return {
      client_id: Enviroment.vars.VITE_GOOGLE_CLIENT_ID,
      redirect_uri: Enviroment.vars.VITE_GOOGLE_REDIRECT_URI,
      response_type: 'code',
      scope: this.scopes(),
      access_type: 'offline',
      prompt: 'consent',
    };
  }

  private scopes(): string {
    const scopes = Enviroment.vars.VITE_GOOGLE_SCOPES;

    if (scopes.length > 0) {
      return scopes.join(' ');
    }
    return '';
  }

  async loginOnGoogle(): Promise<string | null> {
    return new Promise((resolve) => {
      const authUrl = this.buildUrl();
      const windowOpened = window.open(authUrl, 'GoogleAuth', 'width=600,height=600');
  
      if (!windowOpened) {
        resolve(null);
        return;
      }
  
      const checkCodeInterval = setInterval(() => {
        const code = new URL(windowOpened.location.href).searchParams.get('code');
        if (code) {
          clearInterval(checkCodeInterval);
          windowOpened.close();
          resolve(code);
        }
      }, 400);
    });
  }

  public static getInstance(): GoogleOAuthSetup {    
    return new GoogleOAuthSetup();
  }
}