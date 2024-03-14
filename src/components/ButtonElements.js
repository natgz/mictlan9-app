import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
  border-radius: 8px;
  background: ${({ primary }) => (primary ? "rgb(169, 63, 255)" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#5a11bb" : "#fff")};
  color: ${({ dark2 }) => (dark2 ? "#fff" : "#fff")};
  /* font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")}; */
  outline: none;
  border: none;
  cursor: pointer;
  /* display: ; */
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  font-family: var(--font-main);
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#5a11bb" : "#fff")};
  }
`
