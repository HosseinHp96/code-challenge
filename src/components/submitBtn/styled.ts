import styled from "@emotion/styled";

interface ButtonProps {
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.disabled ? "#e8e8e8" : "#242424")};
  color: ${(props) => (props.disabled ? "#7d7d7d" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  padding: 10px 35px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-left: auto;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#e8e8e8" : "#545454")};
  }

  &:active {
    background-color: ${(props) => (props.disabled ? "#e8e8e8" : "#545454")};
  }
`;
