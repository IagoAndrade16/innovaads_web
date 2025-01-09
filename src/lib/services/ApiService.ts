import { Config } from "$lib/core/Config";
import { type ApiHeaders, type ApiProvider, type ApiResponse } from "$lib/providers/api/ApiProvider";
import { ApiProviderAxios } from "$lib/providers/api/implementations/ApiProviderAxios";

export abstract class ApiService {
	private _cachedBaseUrl: string | null = null;
  private apiProvider: ApiProvider = new ApiProviderAxios()

	private async _baseUrl(): Promise<string> {
		if (!this._cachedBaseUrl) {
			const { apiBaseUrl } = Config;
			this._cachedBaseUrl = apiBaseUrl;
		}

		// console.log('this._cachedBaseUrl', this._cachedBaseUrl);

		return this._cachedBaseUrl!;
	}

  protected async get(route: string, auth?: AuthData): Promise<ApiResponse> {
		return this.apiProvider.get(await this._path(route), this.getHeaders(auth));
	}

	protected async patch(route: string, params: object, auth?: AuthData): Promise<ApiResponse> {
		return this.apiProvider.patch(await this._path(route), params, this.getHeaders(auth));
	}

	protected async put(url: string, params: object, auth?: AuthData): Promise<ApiResponse> {
		return this.apiProvider.put(await this._path(url), params, this.getHeaders(auth));
	}

	protected async post(url: string, params: object, auth?: AuthData): Promise<ApiResponse> {
		return this.apiProvider.post(await this._path(url), params, this.getHeaders(auth));
	}

	protected async delete(url: string, params: object, auth?: AuthData): Promise<ApiResponse> {
		return this.apiProvider.delete(await this._path(url), params, this.getHeaders(auth));
	}

  private getHeaders(auth?: AuthData): ApiHeaders {
		const headers: ApiHeaders = {
			'Content-Type': 'application/json; charset=UTF-8',
			Accept: 'application/json',
		};

		if (auth) {
			if ('token' in auth) {
				const bearerAuthData = auth as BearerAuthData;
				headers.Authorization = `Bearer ${bearerAuthData.token}`;
			} else {
				const basicAuthData = auth as BasicAuthData;
				const base64 = btoa(`${basicAuthData.email}:${basicAuthData.password}`);
				headers.Authorization = `Basic ${base64}`;
			}
		}

		return headers;
	}

	private async _path(route: string): Promise<string> {
		return this.apiProvider.resolve(await this._baseUrl(), route);
	}
}

export type AuthData = BasicAuthData | BearerAuthData;

export type BasicAuthData = {
	email: string;
	password: string;
}

export type BearerAuthData = {
	token: string;
}