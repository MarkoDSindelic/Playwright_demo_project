export class SearchPage {
  constructor(page) {
    this.page = page;

    this.searches = page.getByRole("button", { name: "Searches" });
    this.adultTravellers = page.getByText("Travellers 2 Adults");
    this.ticketType = page.locator("a.dropdown-item >> text=Oneway");
    this.date = page.locator("a.dropdown-item >> text=30-08-2025");
    this.from = page.getByText("LON").first();
    this.to = page.getByText("BER").first();
  }
}
