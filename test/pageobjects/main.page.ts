import { ChainablePromiseElement } from "webdriverio";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Main extends Page {
  /**
   * define selectors using getter methods
   */
  public get listExamples() {
    return $$("ul li");
  }
}

export default new Main();
