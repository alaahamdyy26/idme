import React from "react";
import { render } from "@testing-library/react";
import { Purchases } from "./Purchases";
import { screen } from "@testing-library/react";

jest.mock("screens/purchases/usePurchases", () => ({
  usePurchases: () => ({
    data: [
      {
        "id": 1,
        "location": "https://picsum.photos/id/0/200",
        "purchaseDate": new Date("2020-12-27T00:00:00.000Z"),
        "category": "Food",
        "description": "connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!",
        "price": 99882,
        "name": "auxiliary generating microchip"
      }
    ],
  }),
}));

jest.mock("common/utils/useIsMobile", () => ({
  useIsMobile: jest.fn(() => false), // Mock isMobile as needed
}));

describe("Purchases Component", () => {
  it("renders without errors", () => {
    render(<Purchases />);

    expect(screen.getByText("Purchases")).toBeInTheDocument();

  });

  it("renders PurchaseCardList when isMobile is false", () => {
    jest.spyOn(require("common/utils/useIsMobile"), "useIsMobile").mockImplementation(() => false);
    render(<Purchases />);
    expect(screen.queryByText("Category")).toBeInTheDocument();
  });

  it("renders PurchaseTable when isMobile is true", () => {
    jest.spyOn(require("common/utils/useIsMobile"), "useIsMobile").mockImplementation(() => true);
    render(<Purchases />);
    expect(screen.queryByText("Category")).not.toBeInTheDocument();
  });
});
