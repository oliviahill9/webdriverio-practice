import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import Logout from "../pageobjects/logout";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });

  it("should logout and verify logout alert message", () => {
    Logout.btnLogout.click();

    expect(Logout.alertFlash).toHaveTextContaining(
      "You logged out of the secure area!"
    );
  });
});
