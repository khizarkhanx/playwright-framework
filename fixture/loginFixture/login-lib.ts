import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

const envPaths = [
    path.resolve(process.cwd(), '.env.automation'),
    path.resolve(process.cwd(), '.env'),
];
const envFile = envPaths.find((file) => fs.existsSync(file));
if (envFile) {
    dotenv.config({ path: envFile });
} else {
    dotenv.config();
}

type Pages = {
    loginPage: LoginPage;
};

export const test = base.extend<Pages>({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    }
});

export { expect } from '@playwright/test';