import styled from "styled-components";

export const RadioLabel = styled.label`
  display: inline-block;
  padding: 10px 30px;
  margin: 8px;
  border: 2px solid var(--color-blue);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s, color 0.3s;

  &:hover {
    background-color: var(--color-blue);
    color: white;

  }
`;