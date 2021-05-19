import { Page } from "playwright";

export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    console.log("navigating to ", url);
    await this.page.goto(url);
    console.log("navigated");
  }

  async hoverElement(selector: string) {
    console.log("hovering element", selector);

    await page.hover(selector);
  }

  async hoverElementByTitle(title: string) {
    await this.hoverElement(`[title="${title}"]`);
  }

  async clickElement(selector: string) {
    console.log("clicking element", selector);
    await page.click(selector);
  }

  async clickElementByTitle(title: string) {
    await this.clickElement(`[title="${title}"]`);
  }

  async waitForPageLoaded() {
    await page.waitForLoadState("networkidle");
  }

  async fillField(selector: string, text: string) {
    await page.fill(selector, text);
  }

  async getTextFromElement(selector: string) {
    return await page.$eval(selector, (el) => {
      return el.innerHTML;
    });
  }
}
