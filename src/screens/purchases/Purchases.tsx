import React from "react";
import { usePurchases } from "screens/purchases/usePurchases";
import { PurchaseCardList } from "screens/purchases/PurchaseCardList";
import { PurchaseTable } from "screens/purchases/PurchaseTable";
import { DefaultLayout } from "common/layouts/DefaultLayout";
import { useIsMobile } from "common/utils/useIsMobile";


export const Purchases = () => {
  const { data: items } = usePurchases();
  const isMobile = useIsMobile();

  return (
    <DefaultLayout>
      <h2>Purchases</h2>
      {isMobile ?
        <PurchaseCardList items={items} /> :
        <PurchaseTable items={items} />
      }
    </DefaultLayout>
  );
};