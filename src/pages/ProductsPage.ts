import { Page } from "playwright";
import { BasePage } from "./BasePage";

type Tab = "WOMEN" | "DRESSES" | "T_SHIRTS";

export class ProductsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  firstProductContainer = ".product-container";
  addToCartButtonSelector = "[data-id-product]";

  async clickProductName(productName: string) {
    await this.clickElementByTitle(productName);
  }

  async addNthProductToCart(productnum: number) {
    await this.hoverElement(this.firstProductContainer);
    const addToCartButtons = await page.$$(this.addToCartButtonSelector);
    await addToCartButtons[productnum - 1].click();
  }

  public goto(clothing: string) {
    return {
      under: async (tab: Tab) => {
        await this.hoverElementByTitle(tab);
        await this.clickElementByTitle(clothing);
      },
    };
  }

  public successfullyAdded() {
    return {
      click: async (buttonTitle: string) => {
        await this.clickElementByTitle(buttonTitle);
        await this.waitForPageLoaded();
      },
    };
  }
}
