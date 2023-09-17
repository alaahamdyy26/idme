import { PurchaseCategory } from "common/types";
import { PillColor } from "common/components/Pill";

export const getCategoryColor = (category: PurchaseCategory) => {
  switch (category) {
    case PurchaseCategory.Apparel:
      return PillColor.TEAL;

    case PurchaseCategory.Automotive:
      return PillColor.PURPLE;

    case PurchaseCategory.Entertainment:
      return PillColor.BLUE;

    case PurchaseCategory.Footwear:
      return PillColor.GRAY;

    case PurchaseCategory.Food:
      return PillColor.YELLOW;

    case PurchaseCategory.Travel:
      return PillColor.GREEN;

    case PurchaseCategory.Technology:
      return PillColor.RED;

    case PurchaseCategory.Other:
      return PillColor.ORANGE;

    default:
      return PillColor.ORANGE;
  }
}