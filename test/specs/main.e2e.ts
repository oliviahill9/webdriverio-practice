import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import Logout from "../pageobjects/logout";
import Main from "../pageobjects/main.page";

describe("Main Page", () => {
  it("Verify list items", () => {
    browser.url("/");
    browser.pause(6000);
    expect(Main.listExamples).toBeElementsArrayOfSize(2);
  });
});
