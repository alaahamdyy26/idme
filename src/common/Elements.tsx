import styled from "@emotion/styled";

export const StrongText = styled.strong`
  font-size: 16px;`
export const StyledImg = styled.img<{rounded?: boolean, height: string}>(
  ({ rounded = true, height }) => `
    height: ${height};
    width: auto;
    ${rounded && `
    border-radius: 50%;
  `
    }
  `)

export const CardContainer = styled.div<{borderColor?: string, marginBottom?: string, borderRadius?: string}>(
  ({ borderColor = "#CDCED9", marginBottom = "8px", borderRadius }) => `
    border: 1px solid ${borderColor};
    margin-bottom: ${marginBottom};
    padding: 8px 16px;
    ${borderRadius && `
    border-radius: ${borderRadius}
  `}
  `)

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
