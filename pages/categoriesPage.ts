import {Page, Locator, expect} from '@playwright/test';

export class CategoriesPage {
    readonly page: Page;
    readonly categoriesHeader: Locator;
    constructor(page: Page) {
        this.page = page;
        this.categoriesHeader = page.locator('h2');
    }

    categoryLink(category: string): Locator {
        return this.page.locator(`[href="#${category}"]`);
    }

    categorySubCategoryLink(category: string): Locator {
        return this.page.locator(`[id="${category}"] li`);
    }

    async clickCategory(category: string) {
        await this.page.waitForLoadState('networkidle');
        await expect(this.categoryLink(category)).toBeVisible();
        await this.categoryLink(category).click();
    }

    async verifySubCategories(category: string, expectedSubCategories: string[]) {
    
        for (let i = 0; i < expectedSubCategories.length; i++) {
            await this.categorySubCategoryLink(category).nth(i).waitFor({ state: 'visible' });
            await expect(this.categorySubCategoryLink(category).nth(i)).toHaveText(expectedSubCategories[i]);
        }
    }
    }