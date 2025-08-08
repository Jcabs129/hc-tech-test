import { test as base } from '@playwright/test';
import { CameraPhotoPage } from '../pages/camera-photo.page';

export type FrameworkFixtures = {
  cameraPhotoPage: CameraPhotoPage;
}

export const test = base.extend<{
  cameraPhotoPage: CameraPhotoPage;
}>({
  
  cameraPhotoPage: async ({ page }, use) => {
    await use(new CameraPhotoPage(page));
  },

});
