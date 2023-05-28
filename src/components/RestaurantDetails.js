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

  let restaurant_menu_items = restaurant_menu?.[2]?.card?.card;

  console.log({ ...restaurant_menu_items });

  return (
    <div className="restaurant-details">
      <RestaurantInfo {...restaurant_info} />
      <RestaurantMenu {...restaurant_menu_items} />
    </div>
  );
};

export default RestaurantDetails;
