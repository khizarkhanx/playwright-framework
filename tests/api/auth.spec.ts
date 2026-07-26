import { test, expect } from '@playwright/test';
import { AuthClient } from '../../api/clients/AuthClient';
import { createLoginPayload } from '../../api/payloads/LoginPayload';
import { env } from '@data/env';

test('should generate authentication token', async ({ request }) => {

    const authClient = new AuthClient(request);

    const payload = createLoginPayload(
        env.api.username,
        env.api.password
    );

    const response = await authClient.login(payload);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.data.accessToken).toBeDefined();
    expect(body.data.refreshToken).toBeDefined();
    expect(body.data.tokenType).toBe('Bearer');
    expect(body.data.user.email).toBe(env.api.username);
});