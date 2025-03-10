/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiProviderAxios } from './implementations/ApiProviderAxios';

export type ApiProvider = {
	get(url: string, headers?: ApiHeaders): Promise<ApiResponse>;
	post(url: string, params: object, headers?: ApiHeaders): Promise<ApiResponse>;
	patch(url: string, params: object, headers?: ApiHeaders): Promise<ApiResponse>;
	put(url: string, params: object, headers?: ApiHeaders): Promise<ApiResponse>;
	delete(url: string, params: object, headers?: ApiHeaders): Promise<ApiResponse>;
	resolve(p1: string, p2: string): string;
}

export const apiProviderAlias = 'ApiProvider';

export type ApiResponse = {
	statusCode: number;
	data: any;
}

export type ApiHeaders = {
	[key: string]: string;
}

export const apiProvider = new ApiProviderAxios();
