import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchRestaurantDetailsHook from '../hooks/useFetchRestaurantDetailsHook';
import RestaurantInfo from './RestaurantInfo';
import RestaurantMenu from './RestaurantMenu';

const RestaurantDetails = () => {
  const { name, id } = useParams();
  const restaurant_details = useFetchRestaurantDetailsHook(id);

  const restaurant_info = restaurant_details?.[0]?.[0]?.card?.card?.info;
  const restaurant_menu =
    restaurant_details?.[0]?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  console.log(restaurant_menu);

  return (
    <div className="restaurant-details">
      <RestaurantInfo {...restaurant_info} />
      <RestaurantMenu />
    </div>
  );
};

export default RestaurantDetails;
