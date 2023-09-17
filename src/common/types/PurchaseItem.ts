import { PurchaseCategory } from "common/types/PurchaseCategory";

export interface PurchaseItem {
  name: string;
  location: string;
  purchaseDate: Date;
  category: PurchaseCategory;
  description: string;
  price: string
}

export enum PurchaseTableHeader {
  Name = "Name",
  Location = "Location",
  PurchaseDate = "Purchase Date",
  Category = "Category",
  Description = "Description",
  Price = "Price"
}