import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { getItems } from '../../apis';
import * as S from './style';
import ItemBox from '@pages/ItemBox';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
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
      <S.Container>
        {items.map((item) => (
          <ItemBox key={item.club.id} item={item} />
        ))}
      </S.Container>
      {/* <button onClick={submitHandler}>CLik</button> */}
    </S.Wrapper>
  );
};

export default ItemListContainer;
