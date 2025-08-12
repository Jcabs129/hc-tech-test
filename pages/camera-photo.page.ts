import { Page, expect} from '@playwright/test';

export class CameraPhotoPage {
  constructor(private page: Page) {}

  getLocatorByTestId(testId: string) {
    return this.page.getByTestId(testId);
  }

  getLocatorByLabel(label: string) {
    return this.page.getByLabel(label);
  }

  async navigateToCameraPhotoPage(): Promise<void> {
    const currentUrl = this.page.url();
    await this.page.goto('/camera-photo');
    await expect(this.page).toHaveURL(/.*\/camera-photo/);
    await expect(this.page.getByRole('heading', { name: 'Camera & photo' })).toBeVisible();
  }

  
  async selectAProductItem(): Promise<void> {
    await this.getLocatorByTestId('13').getByText('Nikon D5500 DSLR').click();
    await expect(this.page.getByRole('heading', { name: 'Nikon D5500 DSLR' })).toBeVisible();
  }

  async openEstimateShippingPopup(): Promise<void> {
    await this.getLocatorByTestId('estimate-shipping-popup-14').isVisible();
    await this.page.locator('#open-estimate-shipping-popup-14').click();
  }
}