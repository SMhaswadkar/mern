import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const RestaurantInfo = ({
  areaName,
  city,
  cuisines,
  locality,
  name,
  costForTwoMessage,
  avgRatingString,
}) => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <div>
            <strong>{name}</strong>
          </div>
          <div>{locality}</div>
          <div>{cuisines?.join(' ')}</div>
          <div>{city}</div>
          <div>{costForTwoMessage}</div>
        </Col>
        <Col md={3}>
          <div>{avgRatingString}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default RestaurantInfo;
