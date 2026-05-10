import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitBtn: Locator;
  readonly errorMsg: Locator;
  readonly successText: Locator;
  readonly logoutBtn: Locator;
  readonly loginPageHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.locator('[href="/login"]');
    this.usernameInput = page.locator('.login-form [placeholder="Email Address"]');
    this.passwordInput = page.locator('.login-form [placeholder="Password"]');
    this.submitBtn = page.locator('.login-form [data-qa="login-button"]');
    this.errorMsg = page.locator('.login-form p');
    this.successText = page.locator('h1');
    this.logoutBtn = page.locator('text=Log out');
    this.loginPageHeader = page.locator('[src="/static/images/home/logo.png"]');
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL || '');
  }

  async clickLoginLink() {
    await this.page.waitForLoadState('networkidle');
    await expect(this.loginLink).toBeVisible();
    await this.loginLink.click();
  } 

  async enterUsername(username: string) {
    await this.page.waitForLoadState('networkidle');
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.submitBtn.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async verifyLoginPageHeader() {
    await this.page.waitForLoadState('networkidle');
    await expect(this.loginPageHeader).toBeVisible();
  }
} 