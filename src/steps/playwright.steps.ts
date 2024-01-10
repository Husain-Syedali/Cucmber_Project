import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';
//import { expect } from '@playwright/test';

Given('JDoodle website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator('.absolute > button').click();
});

When('Clicked on Execute option', async function (this: ICustomWorld) {
  const page = this.page!;

  await page.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(2000);
});

When('{string} verify menu items', async function (this: ICustomWorld, Item: string) {
  const page = this.page!;

  await page.getByRole('button', { name: Item }).click();
  if (Item == 'Products') {
    expect.soft(page.getByRole('link', { name: '/assets/product_coding-' })).toBeVisible();
    await page.getByRole('link', { name: '/assets/product_coding-' }).click();
  } else {
    expect.soft(page.getByRole('heading', { name: 'By Industry' })).toBeVisible();
    await page.getByRole('heading', { name: 'By Industry' }).click();
  }
  await page.getByRole('button', { name: Item }).click();
  if (Item == 'Products') {
    expect.soft(page.getByRole('link', { name: '/assets/product_integrate-' })).toBeVisible();
    await page.getByRole('link', { name: '/assets/product_integrate-' }).click();
  } else {
    expect.soft(page.getByRole('heading', { name: 'Use Cases' })).toBeVisible();
    await page.getByRole('heading', { name: 'Use Cases' }).click();
  }

  await page.getByRole('button', { name: Item }).click();

  if (Item == 'Products') {
    await page.getByRole('link', { name: '/assets/product_teach-' }).click();
  }
});
let icount = false;
Given('Verify {string} language selection', async function (this: ICustomWorld, language: string) {
  const page = this.page!;
  await page.waitForTimeout(2000);
  if (icount == false) {
    icount = true;
    await page.goto(config.BASE_URL);
    await page.locator('#navbar-collapse-basic div').filter({ hasText: 'Ada' }).nth(4).click();
  } else {
    await page.getByPlaceholder('Search Language').click();
  }

  await page.getByRole('link', { name: language }).last().click();
  await page.waitForTimeout(2000);
});

Given('click on Price tab', async function () {
  const page = this.page!;
  await page.goto('https://www.jdoodle.com/online-java-compiler');
  await page.getByRole('link', { name: 'Pricing' });

  await page.getByRole('link', { name: 'Pricing' }).click();

  //Verification
  await page.waitForTimeout(2000);
});

Then('verify Platform Price page', async function () {
  const page = this.page!;
  await expect
    .soft(page.getByRole('tabpanel'))
    .toContainText(
      `Team🔥 Most Popular$100/ MonthPower your team\'s successIDE and Plugins Standard`,
    );
  await expect.soft(page.getByRole('tabpanel')).toContainText(`Unlock the basics`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`/ Month`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`IDE and Plugins`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`Standard IDE`);
  await expect
    .soft(page.getByRole('tabpanel'))
    .toContainText(`Unlimited customizable WYSIWYG Plugins`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`File upload feature`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`Plugin to host page communication`);
  await page.waitForTimeout(2000);
});

Then('verify API Price page', async function () {
  // Write code here that turns the phrase above into concrete actions
  const page = this.page!;
  await page.getByRole('tab', { name: 'API' }).click();
  await expect.soft(page.getByRole('tabpanel')).toContainText(`Credits to execute your code`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`API Usage Report`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`Email Support`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`Unlimited integration`);
  await expect
    .soft(page.getByRole('tabpanel'))
    .toContainText(`Hassle-free integration process, reliable code execution`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`$300`);
  await expect.soft(page.getByRole('tabpanel')).toContainText(`/monthly`);

  await page.waitForTimeout(2000);
});

Given('Code Snippet in editor', async function (this: ICustomWorld) {
  const page = this.page!;

  await page
    .locator('#code div')
    .filter({ hasText: 'public class MyClass { public' })
    .nth(1)
    .waitFor();

  await page
    .locator('#code div')
    .filter({ hasText: 'public static void main(String args[]) {' })
    .nth(1)
    .waitFor();
});
