import axios from 'axios';

const URL = 'https://api.json-generator.com/templates/ePNAVU1sgGtQ/data';
const TOKEN = '22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj';

export const getItems = async () => {
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw new Error();
  }
};

export const apiService = {
  getItems,
};
