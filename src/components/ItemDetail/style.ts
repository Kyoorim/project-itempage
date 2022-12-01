import styled from '@emotion/styled';

export const Backwall = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: fixed;
  overflow-y: auto;
  width: 500px;
  max-width: 80%;
  max-height: 80%;
  z-index: 100;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 0px;
  border-radius: 10px;
`;

export const ImageContainer = styled.img`
  max-width: 100%;
`;

export const BodyContainer = styled.ul`
  padding: 0 20px 20px 20px;
  list-style-type: style none;
  border-bottom: 1px dashed #a5a5a5;
  margin: 0;
  span {
    font-size: 0.9rem;
  }
  h4 {
    color: black;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: center; */
  padding: 15px;
  font-size: 0.8rem;
  color: #737373;
  ul {
    margin: 0;
    padding-left: 0;
    li {
      list-style: none;
    }
  }
  span:first-of-type {
    font-size: 1rem;
    color: #ff6503;
    font-weight: 600;
    padding-bottom: 15px;
  }
`;
