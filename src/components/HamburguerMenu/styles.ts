import styled from "styled-components";

export const HamburguerMenuContainer = styled.div`
  width: 100%;
  height: 100vh;

  z-index: 1;

  display: flex;

  background: rgba(0, 0, 0, 0.6);

  position: absolute;  
  div {
    width: 60%;
    height: 100vh;

    padding-top: 1.5rem;

    background: var(--white);
    
    display: flex;
    flex-direction: column;
    gap: 1.3rem; 

    button {
      padding-left: 1.5rem;

      background: transparent;
      border: none;
      
      text-align: left;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--very-vark-blue);
    }

    button:nth-child(2){
      margin-top: 1rem;
    }
  }

  div:last-child {
    width: 40%;
    height: 100vh;

    background: rgba(0, 0, 0, 0.6);
  }
`