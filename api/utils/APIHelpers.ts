import { APIResponse, expect } from '@playwright/test';

export class APIHelper {
  static async validateSuccessResponse(
    response: APIResponse
  ) {
    expect(response.status()).toBeGreaterThanOrEqual(200);
    expect(response.status()).toBeLessThan(300);
  }

  static async validateJsonResponse(
    response: APIResponse
  ) {
    const contentType = response.headers()['content-type'];

    expect(contentType).toContain('application/json');
  }
}