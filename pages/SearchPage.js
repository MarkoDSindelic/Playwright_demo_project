export class SearchPage {
  constructor(page) {
    this.page = page;

    this.searches = page.getByRole("button", { name: "Searches" });
    this.ticketType = page.locator(
      '//*[@id="navbarSupportedContent"]/div[2]/ul/li[1]/ul/li[2]/a/div/small[1]'
    );

    this.date = page.locator(
      '//*[@id="navbarSupportedContent"]/div[2]/ul/li[1]/ul/li[2]/a/div/small[2]'
    );
    this.adultTravellers = page.getByText("Travellers 2 Adults");
    this.fromTo = page.locator(
      "#fadein > main > section > div:nth-child(1) > div.new-m-main-tit__content.flex1.my-2 > div.flex.tit-travel-restriction-wrapper > span > small:nth-child(1) > strong"
    );
  }
}
