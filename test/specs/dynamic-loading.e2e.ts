describe("Dynamic Loading Page", () => {
  it("wait for the hidden element to show", async () => {
    const btnStart = await $("#start button");
    const textFinish = await $("#finish h4");

    await browser.url("/dynamic_loading/1");

    await btnStart.click();

    await textFinish.waitForDisplayed();

    expect(await textFinish.getText()).toEqual("Hello World!");
  });
});
