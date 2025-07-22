export class SearchPage {
  constructor(page) {
    this.page = page;

    this.searches = page.getByRole("button", { name: "Searches" });

    this.ticketType = page.locator(
      "#navbarSupportedContent > div.nav-item--right > ul > li.nav-item.dropdown.w-100 > ul > li:nth-child(2) > a > div > small:nth-child(1)"
    );

    this.TicketTypeTest = page.locator(
      '//*[@id="navbarSupportedContent"]/div[2]/ul/li[1]/ul/li[2]/a/div/small[1]'
    );

    this.date = page.locator(
      "#navbarSupportedContent > div.nav-item--right > ul > li.nav-item.dropdown.w-100 > ul > li:nth-child(2) > a > div > small:nth-child(2)"
    );
    this.adultTravellers = page.locator(
      "#navbarSupportedContent > div.nav-item--right > ul > li.nav-item.dropdown.w-100 > ul > li:nth-child(2) > a > div > small:nth-child(3) > strong"
    );
    this.fromTo = page.locator(
      "#fadein > main > section > div:nth-child(1) > div.new-m-main-tit__content.flex1.my-2 > div.flex.tit-travel-restriction-wrapper > span > small:nth-child(1) > strong"
    );
  }
}
