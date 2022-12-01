import { useState } from 'react';
import Card from '@components/Layout/Card';
import * as S from './style';
import { BsSuitHeart } from 'react-icons/bs';
import ItemDetail from '@components/ItemDetail';
import { ItemInfo } from '@libs/';

const ItemBox = ({ item }: ItemInfo) => {
  const isLeader = item.leaders[0].name;
  const rsvp = item.club.meetings[0].startedAt;

  const [modal, setModal] = useState<boolean>(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <Card onClick={modalHandler}>
      {modal && <ItemDetail item={item} />}
      <S.ImageContainer src={item.club.coverUrl} />
      <S.BodyContainer>
        <h4>{item.club.name}</h4>
        {isLeader && <h5>리더 : {item.leaders[0].name} 님</h5>}
        <span>{item.club.description}</span>
      </S.BodyContainer>
      <S.InfoContainer>
        <BsSuitHeart />
        <span>
          {item.club.place} |{' '}
          <span>
            첫 모임일 {rsvp.substring(0, 4)}년 {rsvp.substring(5, 7)}/
            {rsvp.substring(8, 10)}
          </span>
        </span>
      </S.InfoContainer>
    </Card>
  );
};

export default ItemBox;
