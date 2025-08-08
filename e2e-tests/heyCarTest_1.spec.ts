import { test } from '../fixtures/page-object-fixture';

test.describe('james test', () => {
  test.beforeEach(async ({ cameraPhotoPage }) => {
      await cameraPhotoPage.navigateToCameraPhotoPage();
  });

  test(`select a product item and confirm the modal appears when clicking on 'select address...' `, async ({ cameraPhotoPage }) => {
      await cameraPhotoPage.selectAProductItem()
      await cameraPhotoPage.openEstimateShippingPopup()
  });


  // test('remove item from cart', async ({ inventoryPage }) => {
  //     await inventoryPage.removeItemFromCart();
  // });

});





// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


