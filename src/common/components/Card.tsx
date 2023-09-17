import React, { FC, ReactNode } from 'react';
import styled from "@emotion/styled";
import { CardContainer, StyledImg } from "common/Elements";


const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 700;

  img {
    margin-right: 12px;
  }
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 16px;
`

const Description = styled.div`
  width: 75%;
  margin: 12px 0;
  font-size: 14px;
`

const Footer = styled.div`
  p:first-of-type {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 4px;
  }

  p:last-of-type {
    color:#232326;
    margin-top: 2px;
  }
`

interface CardProps {
  header: ReactNode;
  headerImg?: string;
  headerRight?: ReactNode;
  description?: ReactNode;
  footerTitle?: string;
  footer: ReactNode;
}

export const Card: FC<CardProps> = ({
  header,
  headerImg,
  headerRight,
  description,
  footer,
  footerTitle
}) => {
  return (
    <CardContainer borderRadius="8px">
      <Header>
        <HeaderLeft>
          {/* No useful substitute for alt, an empty string is better than a redundant description or a placeholder */}
          {headerImg && <StyledImg alt="" src={headerImg} height="3em" />}
          {header}
        </HeaderLeft>
        {headerRight && <span>{headerRight}</span>}
      </Header>
      {description && <Description>{description}</Description>}
      <Footer>
        {footerTitle && <p>{footerTitle}</p>}
        <p>{footer}</p>
      </Footer>
    </CardContainer>
  );
}