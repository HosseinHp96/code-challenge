import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  background-color: #f7f7f7;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #333;
`;

export const HeaderLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  font-weight: bold;
  padding: 0px 30px 10px 30px;
  border-bottom: ${(props) => (props.isActive ? "2px solid #242424" : "none")};
  &:hover {
    text-decoration: underline;
  }
`;
