import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from '../BaseApiClient';
import { Endpoints } from '../constants/Endpoints';
import { LoginPayload } from '../payloads/LoginPayload';

export class AuthClient extends BaseApiClient {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async login(payload: LoginPayload): Promise<APIResponse> {
    return this.post(Endpoints.authUser, payload);
  }
}