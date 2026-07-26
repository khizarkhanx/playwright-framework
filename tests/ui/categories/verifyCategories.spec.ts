import { test } from "@fixture/categoriesFixture/categories-lib";
import { userName, password } from "@data/constants";

const categoryType = ['Women', 'Men', 'Kids'];
const subCategories1 = ['Dress', 'Tops', 'Saree'];
const subCategories2 = ['Tshirts', 'Jeans'];
const subCategories3 = ['Dress', 'Tops & Shirts'];

test.describe('Categories Tests', () => {

  test('Verify subcategories @smoke', async ({ loginPage, categoriesPage }) => {
    await loginPage.navigateAndLogin(userName, password);
    await categoriesPage.clickCategory(categoryType[0]);
    await categoriesPage.verifySubCategories(categoryType[0], subCategories1);
    await categoriesPage.clickCategory(categoryType[1]);
    await categoriesPage.verifySubCategories(categoryType[1], subCategories2);
    await categoriesPage.clickCategory(categoryType[2]);
    await categoriesPage.verifySubCategories(categoryType[2], subCategories3);
  });

});