import styled from "styled-components";

export const CarrousselContainer = styled.div`
  width: 100%;
  max-height: 21rem;
  
  position: relative;

  .buttons {
    width: 100%;
    height: 100%;
    
    position: absolute;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 2.8rem;
      height: 2.8rem;

      margin: 1rem;

      border: none;
      border-radius: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background: var(--white);

      > img {
        width: 0.7rem;

      }
    }

    button:first-child {
      padding-right: 0.2rem;
    }
    button:last-child {
      padding-left: 0.2rem;
    }
  }

  > img {
    max-height: 21rem;
    object-fit: cover;
    width: 100%;
  }
`