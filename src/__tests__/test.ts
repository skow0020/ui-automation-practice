import * as dotenv from "dotenv";
import { user } from "../data";

dotenv.config();

import { HomePage, ProductsPage, CartNavigationFlow } from "../pages";

describe("Marketplace e2e tests", () => {
  let homePage: HomePage,
    productsPage: ProductsPage,
    cartNavigationFlow: CartNavigationFlow;
  beforeEach(() => {
    homePage = new HomePage(page);
    productsPage = new ProductsPage(page);
    cartNavigationFlow = new CartNavigationFlow(page);
  });

  it("I can buy something cool", async () => {
    const { email, password } = user;

    await homePage.navigate();
    await homePage.goto("T-shirts").under("Women");
    await productsPage.addNthProductToCart(1);
    await productsPage.successfullyAdded().click("Proceed to checkout");
    await cartNavigationFlow.summary().proceedToCheckout();
    await cartNavigationFlow.signin().withCredentials(email, password);
    await cartNavigationFlow.address().proceedToCheckout();
    await cartNavigationFlow.shipping().acceptTermsAndContinue();
    await cartNavigationFlow.payment().choose("Pay by check.");
    await cartNavigationFlow.completeOrder();

    expect(await cartNavigationFlow.getTextFromElement(".alert-success")).toBe(
      "Your order on My Store is complete."
    );
  }, 90000);
});
