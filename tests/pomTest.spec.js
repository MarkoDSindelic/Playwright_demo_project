import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";

test("test", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.gotoHomePage();
  await homePage.fromInput.fill("London");
  await homePage.toInput.fill("Berlin");
  await homePage.date.fill("");
  await homePage.date.fill("30-08-2025");
  await homePage.date.click();
  await homePage.travellersInput.click();
  await homePage.addTravellerButton.waitFor({ state: "visible" });
  await homePage.addTravellerButton.click();

  await expect(homePage.ticketType).toHaveValue("oneway");

  await homePage.searchButton.click();

  await expect(page).toHaveURL(
    "https://phptravels.net/flights/lon/ber/oneway/economy/30-08-2025/2/0/0"
  );

  const searchPage = new SearchPage(page);
  await searchPage.searches.click();
  await expect(searchPage.ticketType).toHaveText("Oneway");
  await expect(searchPage.date).toHaveText("30-08-2025");
  await expect(searchPage.adultTravellers).toContainText("2 Adults");
  await expect(searchPage.from).toContainText("LON");
  await expect(searchPage.to).toContainText("BER");
});
