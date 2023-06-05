import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../store/Slices/CartSlice';
import { Col, Row } from 'react-bootstrap';

const CartCard = (items) => {
  const products = items?.items?.products;

  const dispatch = useDispatch();

  const deleteProduct = (product_id) => {
    dispatch(deleteItem({ id: product_id }));
  };

  return (
    <div>
      {products &&
        products.map((item) => (
          <Row>
            <Col>
              <span>{item?.product_name}</span>
            </Col>
            <Col>
              <span onClick={() => deleteProduct(item?.id)}>Delete</span>
            </Col>
          </Row>
        ))}
    </div>
  );
};

export default CartCard;
