import React, { ReactNode } from "react";
import styled from "@emotion/styled";
// @ts-ignore
import actionIcon from "assets/three-dots-vertical.svg"
import { IconButton } from "common/Elements";

const TableContainer = styled.div`
  display: flex;
  border-radius: 4px;;
  flex-direction: column;
  border: 1px solid #E7E7ED;
  padding: 10px 0;
  margin: 0 auto;
  width: 100%;
`;
const TableHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #E7E7ED;
  padding: 10px;
  font-weight: bold;
  justify-content: center;
`
const TableRow = styled.div`
  display: flex;
  padding: 20px 10px 30px;
  align-items: flex-start;
`;

const TableCell = styled.div`
  flex: 1;
  padding: 10px 30px;
  text-transform: capitalize;
  font-style: normal;
  font-size: 14px;

  &:first-of-type {
    font-weight: 700;
    font-size: 16px;
  }
`;

const ActionButtonCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  margin-right: 10px;
  padding: 10px 0;
`;


export interface ColumnDef<T> {
  header: string
  renderCell: (item: T) => ReactNode
}

interface TableProps<T> {
  columns: ColumnDef<T>[];
  items: T[];
  addActionButton: boolean
}

export function Table<T>({ columns, items, addActionButton }: TableProps<T>) {
  return (
    <TableContainer>
      <TableHeader>
        {columns.map((columnName, index) => (
          <TableCell key={index}>
            {columnName.header}
          </TableCell>
        ))}

        {addActionButton && <ActionButtonCell/>}
      </TableHeader>
      {items.map((item, rowIndex) => (
        <TableRow key={`row-${rowIndex}`}>
          {columns.map((col, columnIndex) => (
            <TableCell key={`cell-${rowIndex}-${columnIndex}`}>
              {col.renderCell(item)}
            </TableCell>
          ))}
          {addActionButton &&
              <ActionButtonCell>
                  <IconButton
                      onClick={() => {
                        alert("Show Actions Menu")
                      }}
                  >
                      <img src={actionIcon} alt="action-button-icon" />
                  </IconButton>
              </ActionButtonCell>

          }
        </TableRow>
      ))}
    </TableContainer>

  )
}