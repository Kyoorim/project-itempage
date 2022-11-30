import * as S from './style';

const FilterPanel = ({
  selectedPlace,
  selectedClub,
  selectedPlaceHandler,
  selectedClubHandler,
}) => {
  return (
    <S.Wrapper>
      <S.Container>
        <p>
          <h1>장소</h1>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => selectedPlaceHandler(id)}
          >
            온라인
          </input>
          <input type="checkbox">안국</input>
          <input type="checkbox">강남</input>
          <input type="checkbox">롯데백화점 잠실점</input>
          <input type="checkbox">그 외 장소</input>
        </p>
        <p>
          <h1>클럽 유형</h1>
          <input type="checkbox">함께 만드는 클럽</input>
          <input type="checkbox">클럽장 클럽</input>
          <input type="checkbox">함께 듣는 클럽</input>
          <input type="checkbox">그 외 클럽</input>
        </p>
      </S.Container>
    </S.Wrapper>
  );
};

export default FilterPanel;
