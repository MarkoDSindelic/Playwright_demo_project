export class HomePage {
  constructor(page) {
    this.page = page;
    this.fromInput = page.locator(".form-control.ct.ff");
    this.toInput = page.locator(".form-control.ct.px-md-3.ft");
    this.date = page.locator("#departure");
    this.travellersInput = page.getByRole("button", { name: "Travellers" });
    this.addTravellerButton = page.locator(".qtyInc > svg").first();
    this.searchButton = page.locator(".search_button");
    this.ticketType = page.getByRole("combobox").first();
  }
  async gotoHomePage() {
    await this.page.goto("https://phptravels.net/flights");
  }
}
