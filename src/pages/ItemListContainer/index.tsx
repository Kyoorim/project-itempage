import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
// import { getItems } from '../../apis';
import * as S from './style';
import ItemBox from '@pages/ItemBox';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

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
    const query = event.target.value;
    setSearchItem(query);

    const searchList = items.filter((item) => {
      return item.club.name.indexOf(query) !== -1;
    });
    setFilteredItems(searchList);
  };

  const filterHandler = (event) => {
    const selectedPlace = event.target.value;

    const filterList = items.filter((item) => {
      return item.club.place === selectedPlace;
    });
    setFilteredItems(filterList);
  };

  return (
    <S.Wrapper>
      <input
        type="text"
        name="search"
        value={searchItem}
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
        {filteredItems.map((item) => {
          return <ItemBox key={item.club.id} item={item} />;
        })}
      </S.Container>
      {/* )} */}
    </S.Wrapper>
  );
};

export default ItemListContainer;
