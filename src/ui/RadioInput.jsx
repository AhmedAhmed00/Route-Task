import styled from "styled-components";

export const RadioInput = styled.input`
display: none;

 &:checked + label {
    background-color: var(--color-blue);
    color: white;
  }




`