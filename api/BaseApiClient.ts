import { env } from '@data/env';
import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseApiClient {
  constructor(protected request: APIRequestContext) { }

  async get(url: string, options?: any): Promise<APIResponse> {
    const fullUrl = `${env.api.baseURL}${url}`;

    console.log('=================================');
    console.log('GET   :', url);
    console.log('=================================');

    return this.request.get(fullUrl, options);
  }

  async post(url: string, data: any, option?: any): Promise<APIResponse> {

    const fullUrl = `${env.api.baseURL}${url}`;

    console.log('=================================');
    console.log('POST   :', fullUrl);
    console.log('=================================');

    const response = await this.request.post(fullUrl, {
      data,
      ...option,
    });

    return response;
  }

  async put(url: string, data: any, options?: any): Promise<APIResponse> {
    const fullUrl = `${env.api.baseURL}${url}`;

    const response = await this.request.put(fullUrl, {
      data,
      ...options,
    });
    return response;
  }

  async patch(url: string, data: any, options?: any): Promise<APIResponse> {
    const fullUrl = `${env.api.baseURL}${url}`;

    const response = await this.request.patch(fullUrl, {
      data,
      ...options,
    });
    return response;
  }

  async delete(url: string, options?: any): Promise<APIResponse> {
    const fullUrl = `${env.api.baseURL}${url}`;

    const response = await this.request.delete(fullUrl, options);
    return response;
  }
}