import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  const cart_products = useSelector((state) => state?.cart);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Mern-Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/search">
              <Nav.Link>Search</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Offer">
              <Nav.Link>Offer</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Sign-in">
              <Nav.Link>Sign in</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                Cart
                <Badge bg="secondary">
                  {cart_products ? cart_products?.products?.length : 0}
                </Badge>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
