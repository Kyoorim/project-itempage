import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as S from './style';

const ItemDetail = ({ item }) => {
  const isLeader = item.leaders[0].name;
  const rsvp = item.club.meetings[0].startedAt;

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return createPortal(
    <S.Backwall>
      <S.Modal>
        <S.ImageContainer src={item.club.coverUrl} />
        <S.BodyContainer>
          <h4>{item.club.name}</h4>
          {isLeader && <h5>리더 : {item.leaders[0].name} 님</h5>}
          <span>
            {item.club.place} |{' '}
            <span>
              첫 모임일 {rsvp.substring(0, 4)}년 {rsvp.substring(5, 7)}/
              {rsvp.substring(8, 10)}
            </span>
          </span>
        </S.BodyContainer>
        <S.InfoContainer>
          <span>회비 {item.price}원</span>
          <span>{item.club.description}</span>
          <h4>모임 일정</h4>
          <ul>
            {item.club.meetings.map((meeting) => (
              <li key={meeting.order}>
                {meeting.order}회차 {meeting.startedAt.substring(0, 4)}년{' '}
                {meeting.startedAt.substring(5, 7)}/
                {meeting.startedAt.substring(8, 10)}
              </li>
            ))}
          </ul>
        </S.InfoContainer>
      </S.Modal>
    </S.Backwall>,
    document.getElementById('modal')
  );
};

export default ItemDetail;
