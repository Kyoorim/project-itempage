import * as S from './style';

type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children, onClick }) => {
  return <S.Wrapper onClick={onClick}>{children}</S.Wrapper>;
};

export default Card;
