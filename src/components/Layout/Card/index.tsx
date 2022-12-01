import React from 'react';
import * as S from './style';

type Props = {
  children: React.ReactNode;
};

interface Card {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<Props> = ({ children, onClick }) => {
  return <S.Wrapper onClick={onClick}>{children}</S.Wrapper>;
};

export default Card;
