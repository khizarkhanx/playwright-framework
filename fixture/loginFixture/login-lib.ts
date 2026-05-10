import dotenv from 'dotenv';
import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

dotenv.config();

type Pages = {
    loginPage: LoginPage;
};

export const test = base.extend<Pages>({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    }
});

export { expect } from '@playwright/test';