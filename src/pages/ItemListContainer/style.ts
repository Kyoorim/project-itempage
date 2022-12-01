import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Container = styled.div`
  /* max-width: 500px; */
  /* width: 50%; */
  position: absolute;
  width: 500px;
  max-width: 100%;
  padding: 0 20px 0 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  box-sizing: border-box;
  top: 0;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 30px 0;
  box-sizing: border-box;
  form {
    background-color: #f7f7f5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 30px;
    border-radius: 20px;
    color: #232629;
    input {
      border: none;
      background-color: #f7f7f5;
      width: 80%;
      :focus {
        outline: none;
      }
    }
  }
  select {
    border-color: var(--orange);
    height: 30px;
    border-radius: 18px;
    text-align: center;
    :focus {
      outline: none;
    }
  }
`;
