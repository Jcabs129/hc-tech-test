import { test } from '../fixtures/page-object-fixture';

test.describe('james test', () => {
  test.beforeEach(async ({ cameraPhotoPage }) => {
      await cameraPhotoPage.navigateToCameraPhotoPage();
  });

  test(`select a product item and confirm the modal appears when clicking on 'select address...' `, async ({ cameraPhotoPage }) => {
      await cameraPhotoPage.selectAProductItem()
      await cameraPhotoPage.openEstimateShippingPopup()
  });
});


