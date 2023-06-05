import React from 'react';
import CartCard from './CartCard';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

const Cart = () => {
  const cart_products = useSelector((state) => state?.cart);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div>
              <span>Restaurant is now closed</span>
            </div>
            <div>
              <span>Account</span>
            </div>
            <div>
              <span>Delivery Address</span>
            </div>
            <div>
              <span>Payment</span>
            </div>
          </Col>
          <Col>
            <div>Restaurant Name</div>
            <div>
              <CartCard items={cart_products} />
            </div>
            <div>Bill Details</div>
            <div>To Pay</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
