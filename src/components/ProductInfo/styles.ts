import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  padding: 1rem 1.3rem;

  > span{
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1rem;

    color: var(--orange);
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.8rem;
    color: var(--very-vark-blue);

    margin-top: 0.5rem;
  }

  p {
    color: var(--dark-grayish-blue);

    margin-top: 1rem;
  }

  div {
    width: 100%;

    margin-top: 1.5rem;

    display: flex;
    align-items: center;

    span{
      font-weight: 700;
    }

    span:nth-child(1) {
      font-size: 1.8rem;
      font-weight: 700;

      color: var(--very-vark-blue);
    }

    span:nth-child(2) {
      padding: 0.3rem;
      background-color: var(--pale-orange);

      margin-left: 1.5rem;

      border-radius: 0.3rem;
      
      font-size: 1rem;
      font-weight: 700;
      color: var(--orange)
    }

    span:nth-child(3){
      color: var(--grayish-blue);
      background-image: linear-gradient(transparent 10px,var(--grayish-blue) 9px,var(--grayish-blue) 11px,transparent 0px);

      margin-left: auto;
    }
  }
`