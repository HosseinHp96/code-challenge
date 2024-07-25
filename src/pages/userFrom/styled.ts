import styled from "@emotion/styled";

interface LabelProps {
  required?: boolean;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Label = styled.label<LabelProps>`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5em;
  position: relative;
`;
