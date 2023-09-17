import React, { FC } from "react";
import { PurchaseItem } from "common/types";
import { Card } from "common/components/Card";


export const PurchaseCardList: FC<{items: PurchaseItem[]}> = ({ items }) => {
  return (
    items.map(item => <Card
      header={item.name}
      description={<p>{item.description}</p>}
      headerImg={item.location}
      headerRight={`$${(item.price)}`}
      footerTitle="Purchase Date"
      footer={<time dateTime={item.purchaseDate.toISOString()}>{item.purchaseDate.toDateString()}</time>}
    />)
  )
};
