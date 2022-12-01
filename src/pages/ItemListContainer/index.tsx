import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
// import { getItems } from '../../apis';
import * as S from './style';
import ItemBox from '@pages/ItemBox';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  // const [filteredItems, setFilteredItems] = useState();

  const searchTerm = searchParams.get('search') || '';

  const getItems = async () => {
    const URL = 'https://api.json-generator.com/templates/ePNAVU1sgGtQ/data';
    const TOKEN = '22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj';

    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setItems(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const searchHandler = (event) => {
    const search = event.target.value;
    if (search) {
      setSearchItem(search);
      setSearchParams({ search });
    } else setSearchParams({});
  };

  const filterHandler = (event) => {
    const selectedPlace = event.target.value;
    if (selectedPlace) {
      setSearchItem(selectedPlace);
      setSearchParams({ selectedPlace });
    }
  };

  return (
    <S.Wrapper>
      <input
        type="text"
        name="search"
        value={searchTerm}
        placeholder="검색어를 입력하세요"
        onChange={searchHandler}
      />
      <div>
        <select name="place" onChange={filterHandler}>
          <option value="">장소별 검색</option>
          <option value="온라인">온라인</option>
          <option value="강남">강남</option>
          <option value="롯데백화점 잠실점 문화센터">롯데백화점 잠실점</option>
          <option value="안국">안국</option>
        </select>
      </div>
      <S.Container>
        {items
          .filter((val) => {
            if (searchItem === '') return val;
            else if (val.club.name.includes(searchItem)) return val;
            else if (val.club.place === searchItem) return val;
          })
          .map((item) => (
            <ItemBox key={item.club.id} item={item} />
          ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default ItemListContainer;
