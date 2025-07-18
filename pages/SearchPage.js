export class SearchPage {
  constructor(page) {
    this.page = page;
    this.search = page.locator(
      "#navbarSupportedContent > div.nav-item--right > ul > li.nav-item.dropdown.w-100"
    );
    this.ticketType = page.locator(
      "#navbarSupportedContent > div.nav-item--right > ul > li.nav-item.dropdown.w-100 > ul > li:nth-child(2) > a > div > small:nth-child(1)"
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
