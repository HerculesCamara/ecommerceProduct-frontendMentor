import styled from "styled-components";

export const AddCardButtonContainer = styled.button`
  width: 100%;

  margin-top: 0.8rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1.2rem;

  border: none;
  border-radius: 0.5rem;

  background: var(--orange);

  box-shadow: 0px 10px 16px 1px hsl(26, 100%, 55%, 30%);

  span {
    font-weight: 700;
    color: var(--white);
  }

  img {
    width: 1.3rem;
    fill: #fff;
  }
`