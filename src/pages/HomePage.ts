import { Page } from "playwright";
import { BasePage } from "./BasePage";

type Tab = "Women" | "Dresses" | "T-shirts";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    await super.navigate(`${process.env.BASE_URL}/index.php`);
  }

  public goto(clothing: string) {
    return {
      under: async (tab: Tab) => {
        await this.hoverElementByTitle(tab);
        await this.clickElementByTitle(clothing);
        await this.waitForPageLoaded();
      },
    };
  }
}
