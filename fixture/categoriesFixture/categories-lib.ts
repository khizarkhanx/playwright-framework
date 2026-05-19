import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { test as base } from '@playwright/test';
import { CategoriesPage } from '../../pages/categoriesPage';
import { LoginPage } from '../../pages/LoginPage';

const envPaths = [
    path.resolve(process.cwd(), '.env.automation'),
];
const envFile = envPaths.find((file) => fs.existsSync(file));
if (envFile) {
    dotenv.config({ path: envFile, override: true });
} else {
    dotenv.config({ override: true });
}

type Pages = {
    categoriesPage: CategoriesPage;
    loginPage: LoginPage;
};

export const test = base.extend<Pages>({

    categoriesPage: async ({ page }, use) => {

        await use(new CategoriesPage(page));
    },
    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    }
});

export { expect } from '@playwright/test';