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
  await homePage.travallersInput.click();
  await homePage.addTravallerButton.click();

  await expect(homePage.ticketType).toHaveValue("oneway");

  await homePage.searchButton.click();

  await expect(page).toHaveURL(
    "https://phptravels.net/flights/lon/ber/oneway/economy/30-08-2025/2/0/0"
  );

  const searcPage = new SearchPage(page);
  await searcPage.search.click();
  await expect(searcPage.ticketType).toHaveText("Oneway");
  await expect(searcPage.date).toHaveText("30-08-2025");
  await expect(searcPage.adultTravellers).toHaveText("2");
  await expect(searcPage.fromTo).toContainText("lon");
  await expect(searcPage.fromTo).toContainText("ber");
});
