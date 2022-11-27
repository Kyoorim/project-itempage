import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './style';
import ItemDetail from '@pages/ItemDetail';

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
    } catch {
      throw new Error();
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        {items.map((item) => (
          <ItemDetail key={item.club.id} item={item} />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default ItemListContainer;
