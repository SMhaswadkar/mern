import React from 'react';
import MenuCard from './MenuCard';

const RestaurantMenu = ({ itemCards }) => {
  console.log(itemCards);
  return (
    <div>
      {itemCards?.map((card) => (
        <MenuCard {...card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
