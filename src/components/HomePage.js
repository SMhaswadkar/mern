import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useFetchRestaurantHook from '../hooks/useFetchRestaurantHook';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [restaurants] = useFetchRestaurantHook();
  console.log(restaurants);
  return (
    <Container>
      <Row>
        <Col className="flexible">
          {restaurants?.map((restaurant, index) => (
            <Link
              to={`/restaurant-details/${restaurant?.data?.slugs?.restaurant}/${restaurant?.data?.id}`}
            >
              <div className="restaurant-listing">
                <div>
                  <img
                    class="_2tuBw _12_oN"
                    alt="Tasty Punjab"
                    width="254"
                    height="160"
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant?.data?.cloudinaryImageId}`}
                  ></img>
                </div>
                <div>
                  <strong>{restaurant?.data?.name}</strong>
                </div>
                <div>{restaurant?.data?.cuisines.join(' ')}</div>
                <div>
                  <span>{restaurant?.data?.avgRating}</span>
                  <span>-</span>
                  <span>{restaurant?.data?.deliveryTime} Mins</span>
                  <span>-</span>
                  <span>{restaurant?.data?.costForTwoString}</span>
                </div>
              </div>
            </Link>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
