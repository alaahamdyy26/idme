import { HTMLAttributes } from "react";
import styled from "@emotion/styled";

export enum PillColor {
  GRAY = "GRAY",
  BLUE = "BLUE",
  PURPLE = "PURPLE",
  ORANGE = "ORANGE",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
  RED = "RED",
  TEAL = "TEAL"
}

export interface PillProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof PillColor;
}

const colorMap: Record<PillColor, {color: string;}> = {
  [PillColor.GRAY]: {
    color: "#677685"
  },
  [PillColor.BLUE]: {
    color: "#0D69B5",
  },
  [PillColor.PURPLE]: {
    color: "#7716B8",
  },
  [PillColor.ORANGE]: {
    color: "#E37A1D",
  },
  [PillColor.YELLOW]: {
    color: "#F4C70F",
  },
  [PillColor.GREEN]: {
    color: "#00C89A",
  },
  [PillColor.RED]: {
    color: "#C23439",
  },
  [PillColor.TEAL]: {
    color: "#1A7682",
  },
};

const setColor = ({ color }: PillProps) => {
  const selectedColor = colorMap[color as PillColor];
  return `
    border-color: ${selectedColor.color};
    color: ${selectedColor.color};
  `;
};

export const Pill = styled.div<PillProps>(
  ({ color = "BLUE" }) => `
  display: inline-block;
  border: 1px solid;
  padding: 5px 10px;
  font-weight:bold;
  font-size:12px;
  ${setColor({ color })}
`
);
