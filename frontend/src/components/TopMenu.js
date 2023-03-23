import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopMenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Conoflex</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cargar-pedido">Cargar pedido</Nav.Link>
            <Nav.Link href="/pedidos">Pedidos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopMenu;