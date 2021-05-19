import { Page } from "playwright";
import { BasePage } from "./BasePage";

type PaymentOptions = "Pay by bank wire" | "Pay by check.";
export class CartNavigationFlow extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  public signin() {
    return {
      withCredentials: async (email: string, password: string) => {
        await this.fillField("#email", email);
        await this.fillField("#passwd", password);
        await this.clickElement("#SubmitLogin");
        await this.waitForPageLoaded();
      },
    };
  }

  public summary() {
    return {
      proceedToCheckout: async () => {
        await this.clickElement(
          `.cart_navigation [title="Proceed to checkout"]`
        );
        await this.waitForPageLoaded();
      },
    };
  }

  public address() {
    return {
      proceedToCheckout: async () => {
        await this.clickElement('.cart_navigation [name="processAddress"]');
        await this.waitForPageLoaded();
      },
    };
  }

  public shipping() {
    return {
      acceptTermsAndContinue: async () => {
        await this.clickElement("#cgv");
        await this.clickElement('.cart_navigation [name="processCarrier"]');
        await this.waitForPageLoaded();
      },
    };
  }

  public payment() {
    return {
      choose: async (option: PaymentOptions) => {
        await this.clickElementByTitle(option);
        await this.waitForPageLoaded();
      },
    };
  }

  public async completeOrder() {
    await this.clickElement('.cart_navigation [type="submit"]');
    await this.waitForPageLoaded();
  }

  public async orrderCompleted(): Promise<boolean> {
    return (
      (await this.getTextFromElement(".alert-success")) ===
      "Your order on My Store is complete."
    );
  }
}
