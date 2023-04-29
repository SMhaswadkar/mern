import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchRestaurantHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4956936&lng=73.9319407&page_type=DESKTOP_WEB_LISTING'
      )
      .then((res) => setData(res?.data?.data?.cards[2]?.data?.data?.cards))
      .catch((error) => console.log(error));
  }, []);

  return [data];
};

export default useFetchRestaurantHook;
