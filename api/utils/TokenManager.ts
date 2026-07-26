import { APIRequestContext } from '@playwright/test';
import { AuthClient } from '../clients/AuthClient';
import { createLoginPayload } from '../payloads/LoginPayload';
import { env } from '../../data/env';

export class TokenManager {
  private static token: string | null = null;

  static async getToken(
    request: APIRequestContext
  ): Promise<string> {
    if (this.token) {
      return this.token;
    }

    const authClient = new AuthClient(request);

    const response = await authClient.login(
      createLoginPayload(
        env.api.username,
        env.api.password
      )
    );

    const body = await response.json();

    this.token = body.token;

    if (!this.token) {
    throw new Error("Token not received from API");
}

    return this.token;
  }
}