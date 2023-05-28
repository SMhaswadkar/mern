import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchRestaurantDetailsHook = (restaurant_id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4956936&lng=73.9319407&restaurantId=${restaurant_id}&submitAction=ENTER`
      )
      .then((res) => setData(res?.data?.data?.cards))
      .catch((error) => console.log(error));
  }, [restaurant_id]);

  return [data];
};

export default useFetchRestaurantDetailsHook;
