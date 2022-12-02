import axios from 'axios';

const URL = 'https://api.json-generator.com/templates/ePNAVU1sgGtQ/data';

// 이 자리에 토큰을 입력하시면 됩니다!!!!
const TOKEN = '';

export const getItems = async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error();
  }
};

export const apiService = {
  getItems,
};
