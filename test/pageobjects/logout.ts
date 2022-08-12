import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Logout extends Page {
  /**
   * define selectors using getter methods
   */
  public get btnLogout() {
    return $('a[href="/logout"]');
  }

  public get alertFlash() {
    return $("#flash");
  }
}

export default new Logout();
