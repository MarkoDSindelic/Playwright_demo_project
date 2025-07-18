export class HomePage {
  constructor(page) {
    this.page = page;
    this.fromInput = page.locator(".form-control.ct.ff");
    this.toInput = page.locator(".form-control.ct.px-md-3.ft");
    this.date = page.locator("#departure");
    this.travallersInput = page.locator(
      "#onereturn > div.col-lg-2 > div > div > div > a"
    );
    this.addTravallerButton = page.locator(
      "#onereturn > div.col-lg-2 > div > div > div > div > div.dropdown-item.adult_qty > div > div > div.qtyInc > svg"
    );
    this.searchButton = page.locator(".search_button");
    this.ticketType = page.locator(
      '//*[@id="flights-search"]/div[1]/div/div/div[1]/select'
    );
  }
  async gotoHomePage() {
    await this.page.goto("https://phptravels.net/flights");
  }
}
