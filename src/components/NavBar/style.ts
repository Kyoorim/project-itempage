import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 10px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* max-width: 500px; */
  height: 8vh;
  /* width: 50%; */
  width: 500px;
  max-width: 100%;
  bottom: 0;
  background-color: white;
  box-sizing: border-box;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
    /* color: red; */
    :hover {
      transform: scale(1.4);
      color: var(--orange);
    }
  }
  div {
    width: 25%;
    display: flex;
    justify-content: center;
    /* max-width: 250px; */
  }
`;
