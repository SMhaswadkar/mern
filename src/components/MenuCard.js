import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MenuCard = ({ card }) => {
  console.log(card?.info);
  return (
    <Container>
      <hr />
      <Row>
        <Col md={9}>
          <div>
            <div>
              <strong>{card?.info?.name}</strong>
            </div>
            <div>
              <strong>Rs: </strong>
              {card?.info?.price / 100}
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div class="styles_itemImageContainer__3Czsd">
            <div aria-hidden="true">
              {card?.info?.imageId && (
                <button
                  class="styles_itemImage__3CsDL"
                  aria-label="See more information about Gobi Manchurian"
                  style={{ background: 'rgb(246, 230, 233)' }}
                >
                  <img
                    alt={`${card?.info?.name}`}
                    class="styles_itemImage__3CsDL"
                    loading="lazy"
                    width="256"
                    src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${card?.info?.imageId}`}
                  />
                </button>
              )}
            </div>
            <div class="styles_itemAddButton__zJ7-R">
              <div class="_3L1X9 _211P0 main_buttonInner__z6Jz0 main_button__3gpqi">
                <div class="_1RPOp">ADD</div>
                <div class="_1ds9T _2WdfZ _4aKW6">+</div>
                <div class="_29Y5Z _20vNm _4aKW6"></div>
                <div class="_2zAXs _2quy- _4aKW6">0</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuCard;
