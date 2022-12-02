import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiService } from '../../apis';
import * as S from './style';
import ItemBox from '@pages/ItemBox';
import NavBar from '@components/NavBar';
import { FiSearch } from 'react-icons/fi';
import { ItemInfo } from '../../libs';

const ItemListContainer = () => {
  const [items, setItems] = useState<ItemInfo[]>([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('search') || '';

  const itemHandler = async () => {
    const response = await apiService.getItems();
    setItems(response);
  };

  useEffect(() => {
    itemHandler();
  }, []);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    if (search) {
      setSearchItem(search);
      setSearchParams({ search });
    } else setSearchParams({});
  };

  const filterHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPlace = event.target.value;
    if (selectedPlace) {
      setSearchItem(selectedPlace);
      setSearchParams({ selectedPlace });
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.SearchBar>
          <form>
            <FiSearch />
            <input
              type="text"
              name="search"
              value={searchTerm}
              placeholder="검색어를 입력하세요"
              onChange={searchHandler}
            />
          </form>
          <select name="place" onChange={filterHandler}>
            <option value="">장소별 검색</option>
            <option value="온라인">온라인</option>
            <option value="강남">강남</option>
            <option value="롯데백화점 잠실점 문화센터">
              롯데백화점 잠실점
            </option>
            <option value="안국">안국</option>
          </select>
        </S.SearchBar>
        {items
          .filter((val: ItemInfo) => {
            if (searchItem === '') return val;
            else if (val.club.name.includes(searchItem)) return val;
            else if (val.club.place === searchItem) return val;
          })
          .map((item: ItemInfo) => (
            <ItemBox key={item.club.id} item={item} />
          ))}
      </S.Container>
      <NavBar />
    </S.Wrapper>
  );
};

export default ItemListContainer;
