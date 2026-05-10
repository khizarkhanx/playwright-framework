import { test, expect } from '../../fixture/loginFixture/login-lib';

const userName = process.env.USER_NAME || '';
const password = process.env.PASSWORD || '';

test.describe('Login Tests', () => {

  test('Simple Login Test', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.clickLoginLink();
    await loginPage.login(userName, password);
    await loginPage.verifyLoginPageHeader();
  });

  test('Negative Test - Invalid Username ', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.clickLoginLink();
    await loginPage.login('wrongUser@abc.com', password);
    await expect(loginPage.errorMsg).toBeVisible();
    await expect(loginPage.errorMsg).toHaveText('Your email or password is incorrect!');
  });

  test('Negative Test - Invalid Password', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.clickLoginLink();
    await loginPage.login(userName, 'wrongPass');
    await expect(loginPage.errorMsg).toBeVisible();
    await expect(loginPage.errorMsg).toHaveText('Your email or password is incorrect!');
  });

});