import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When } from '@cucumber/cucumber';
//import { expect } from '@playwright/test';

Given('JDoodle website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);



});

Given('Code Snippet in editor', async function (this: ICustomWorld) {
  const page = this.page!;

  await page.locator('#code div').filter({ hasText: 'public class MyClass { public' }).nth(1).waitFor()

  await page.locator('#code div').filter({ hasText: 'public static void main(String args[]) {' }).nth(1).waitFor()


});

When('Clicked on Execute option', async function (this: ICustomWorld) {
  const page = this.page!;

  await page.getByRole('button', { name: 'Execute' }).click();
  await page.waitForTimeout(10000);

});

When('Products menu items', async function (this: ICustomWorld) {
  const page = this.page!;

  await page.getByRole('button', { name: 'Products' }).click();
  await page.getByRole('link', { name: '/assets/product_coding-' }).click();
  await page.getByRole('button', { name: 'Products' }).click();
  await page.getByRole('link', { name: '/assets/product_integrate-' }).click();
  await page.getByRole('button', { name: 'Products' }).click();
  await page.getByRole('link', { name: '/assets/product_teach-' }).click();

});
let icount = false
Given('Verify {string} language selection', async function (this: ICustomWorld, language: string) {

  const page = this.page!;
  await page.waitForTimeout(2000);
  //await page.locator('#code div').filter({ hasText: 'public class MyClass { public' }).nth(1).waitFor()
  if (icount == false) {
    icount = true
    await page.locator('#navbar-collapse-basic div').filter({ hasText: 'Ada' }).nth(4).click();
  } else {
    await page.getByPlaceholder('Search Language').click();
  }

  await page.getByRole('link', { name: language }).last().click();
  await page.waitForTimeout(10000);
})

// Then('We see {string} mode', async function (this: ICustomWorld, mode: string) {
//   const page = this.page!;
//   const theme = await page.locator('html').getAttribute('data-theme');
//   expect(theme).toEqual(mode);
// });
