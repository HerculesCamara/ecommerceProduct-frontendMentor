import styled from "styled-components";

export const QttSelectorContainer = styled.div`
  width: 100%;
  height: 4rem;

  padding: 1rem;

  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  
  background: var(--light-grayish-blue);

  button {
    border: none;

    background: transparent;
  }

  button:first-child {
    padding-bottom: 0.5rem
  }

  input {
    width: 100%;

    text-align: center;
    font-size: 1rem;
    font-weight: 700;

    border: none;

    background: transparent;
  }
`