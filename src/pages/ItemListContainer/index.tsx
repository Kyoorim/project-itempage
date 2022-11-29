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

  const searchTerm = searchParams.get('search') || '';

  const searchHandler = (event) => {
    const search = event.target.value;
    if (search) {
      setSearchParams({ search });
      setSearchItem(search);
    } else {
      setSearchParams({});
    }

    // const filterList = [
    //   {
    //     id:1, name: 온라인
    //   }
    // ]

    // let search;
    // if (event.target.value) {
    //   setSearchItem(event.target.value);
    // } else {
    //   setSearchItem('');
    // }
    // setSearchParams(searchItem, { replace: true });
  };

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

  // const submitHandler = async () => {
  //   await getItems();
  // };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <S.Wrapper>
      <input
        type="text"
        value={searchTerm}
        placeholder="검색어를 입력하세요"
        onChange={searchHandler}
      />
      <S.Container>
        {items
          .filter((val) => {
            if (searchItem === '') return val;
            else if (val.club.name.includes(searchItem)) return val;
          })
          .map((item) => (
            <ItemBox key={item.club.id} item={item} />
          ))}
      </S.Container>
      {/* <button onClick={submitHandler}>CLik</button> */}
    </S.Wrapper>
  );
};

export default ItemListContainer;
