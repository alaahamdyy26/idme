import { useEffect, useState } from "react";
import { PurchaseCategory, PurchaseItem } from "common/types";
import { centsToUSD } from "common/utils/currencyUtils";
import { decode } from 'html-entities';

/**
 * Fetches purchases from the API.
 */
export const usePurchases = (): {data: PurchaseItem[]} => {
  const [data, setData] = useState<PurchaseItem[]>([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch('https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.map((d: any) => ({
          name: decode(d.name),
          location: d.location,
          purchaseDate: new Date(d.purchaseDate),
          category: d.category as PurchaseCategory,
          description: decode(d.description),
          price: centsToUSD(d.price).toString(),
        })));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return {
    data,
  }
}