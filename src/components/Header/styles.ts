import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.3rem 1.7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  
  .items{
    display: flex;
    gap: 1rem;

    button {
    background: transparent;
    border: none;
  }

  > img {
    object-fit: contain;
    margin-top: -0.5rem;
  }

  .perfilPhoto {
    > img {
      width: 2rem;

      margin-left: 0.5rem;
    }
  }
  }

`
