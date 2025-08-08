# HeyCar Tech Test

A Playwright-based end-to-end testing project for the nopCommerce demo website, specifically focused on testing camera and photo product functionality.

## 🚀 Project Overview

This project contains automated tests for the nopCommerce demo website (`https://demo.nopcommerce.com`), with a focus on testing the camera and photo product page. The tests are built using Playwright and follow the Page Object Model pattern for maintainable and scalable test automation.

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hc-tech-test
```

2. Install dependencies:
```bash
npm install
```

## 🧪 Running Tests

### Run all tests
```bash
# Run tests in headed mode (to see browser)
npx playwright test --headed 
```

### Run tests with specific options


# Run tests with debug mode
npx playwright test --debug

# Run tests and generate HTML report
npx playwright test --reporter=html
```

## 📁 Project Structure

```
hc-tech-test/
├── e2e-tests/                 # Test specifications
│   └── heyCarTest_1.spec.ts   # Main test file
├── fixtures/                  # Test fixtures and setup
│   └── page-object-fixture.ts # Page object fixtures
├── pages/                     # Page Object Model classes
│   └── camera-photo.page.ts   # Camera & Photo page object
├── playwright-report/         # Generated test reports
├── test-results/             # Test artifacts and traces
├── playwright.config.ts      # Playwright configuration
└── package.json              # Project dependencies
```

## 🧩 Test Architecture

### Page Object Model
The project uses the Page Object Model pattern to separate test logic from page interactions:

- **`CameraPhotoPage`**: Handles all interactions with the camera and photo product page
- **Custom fixtures**: Provides page objects to tests through dependency injection

### Test Structure
- Tests are located in `e2e-tests/heyCarTest_1.spec.ts`
- Each test focuses on specific user workflows
- Tests use custom fixtures for clean, maintainable code

## 🔧 Configuration

### Playwright Configuration (`playwright.config.ts`)
- **Base URL**: `https://demo.nopcommerce.com`
- **Browser**: Chromium (Desktop Chrome)
- **Test Directory**: `./e2e-tests`
- **Reporter**: HTML reporter for detailed test results
- **Timeout**: 30 seconds for assertions
- **Retries**: 2 retries on CI, 0 on local development

### Test ID Strategy
The project uses `data-productid` as the test ID attribute for reliable element selection.

## 📊 Test Reports

After running tests, you can view detailed reports:

```bash
# Open the HTML report
npx playwright show-report
```

Reports are generated in the `playwright-report/` directory.

## 🧪 Current Test Coverage

### Camera & Photo Product Tests
- **Product Selection**: Selects a Nikon D5500 DSLR product
- **Shipping Modal**: Opens and validates the shipping address selection modal

## 📝 Development

### Adding New Tests
1. Create new test files in `e2e-tests/`
2. Use the existing page objects or create new ones in `pages/`
3. Follow the established naming conventions and patterns

### Adding New Page Objects
1. Create new page object classes in `pages/`
2. Add them to the fixtures in `fixtures/page-object-fixture.ts`
3. Import and use in your tests

## 🔍 Debugging

### Debug Mode
```bash
npx playwright test --debug
```

## 📦 Dependencies

- **@playwright/test**: ^1.54.2 - Playwright testing framework
- **@types/node**: ^24.2.0 - TypeScript definitions for Node.js


For more information about Playwright, visit [playwright.dev](https://playwright.dev).
