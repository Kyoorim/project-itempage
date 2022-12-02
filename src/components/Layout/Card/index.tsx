import React from 'react';
import * as S from './style';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Card: React.FC<Props> = ({ children, onClick }) => {
  return <S.Wrapper onClick={onClick}>{children}</S.Wrapper>;
};

export default Card;
