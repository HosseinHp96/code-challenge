import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 20px;
  margin-top: unset;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin: 40px;
    margin-top: unset;
    padding: 40px;
  }
`;
