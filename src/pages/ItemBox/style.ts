import styled from '@emotion/styled';

export const ImageContainer = styled.img`
  /* max-width: 500px; */
  width: 100%;
  min-width: 150px;
  border-radius: 10px 10px 0px 0px;
`;

export const BodyContainer = styled.ul`
  padding: 0 20px 20px 20px;
  list-style-type: style none;
  border-bottom: 1px dashed #e6e9eb;
  margin: 0;
  h4 {
    color: black;
  }
  span {
    font-size: 0.9rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  font-size: 0.8rem;
  color: #737373;
  svg {
    color: red;
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
`;
