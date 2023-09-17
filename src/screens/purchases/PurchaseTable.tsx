import React, { FC } from "react";
import { ColumnDef, Table } from "common/components/Table";
import { PurchaseItem, PurchaseTableHeader } from "common/types";
import { Pill } from "common/components/Pill";
import { getCategoryColor } from "common/utils/styleUtils";
import { StrongText, StyledImg } from "common/Elements";

const columns: ColumnDef<PurchaseItem>[] = [
  {
    header: PurchaseTableHeader.Name,
    renderCell: (item) => item.name
  },
  {
    header: PurchaseTableHeader.Location,
    renderCell: (item) => <StyledImg className="locationImg" alt={`location`} src={item.location} height="3em" />,
  },
  {
    header: PurchaseTableHeader.PurchaseDate,
    renderCell: (item) => <time dateTime={item.purchaseDate.toISOString()}>{item.purchaseDate.toDateString()}</time>
  },
  {
    header: PurchaseTableHeader.Category,
    renderCell: (item) => (
      <Pill color={getCategoryColor(item.category)}>
        {item.category}
      </Pill>
    ),
  },
  {
    header: PurchaseTableHeader.Description,
    renderCell: (item) => item.description,
  },
  {
    header: PurchaseTableHeader.Price,
    renderCell: (item) => <StrongText>{`$${item.price}`}</StrongText>,
  }
]

export const PurchaseTable: FC<{items: PurchaseItem[]}> = ({ items }) => {
  return (
    <Table
      columns={columns}
      items={items}
      addActionButton
    />
  );
};
