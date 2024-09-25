import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const NavBar = () => {
  return (
    <Navbar
      expand="md"
      variant="dark"
      style={{
        backgroundColor: "transparent",
        marginTop: "7px",
        border: "1px solid black",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        width: "90%",
        justifySelf: "center",
        textShadow: "2px 2px 4px rgba(1,1,1,1)",
      }}
      collapseOnSelect
      fixed="top"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">Catálogo de productos</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <LinkContainer
                to="/catalogo/electronica"
                style={{ textShadow: "none" }}
              >
                <NavDropdown.Item>Electrónica</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer
                to="/catalogo/joyeria"
                style={{ textShadow: "none" }}
              >
                <NavDropdown.Item>Joyería</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer
                to="/catalogo/ropa-hombre"
                style={{ textShadow: "none" }}
              >
                <NavDropdown.Item>Ropa de hombre</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer
                to="/catalogo/ropa-mujer"
                style={{ textShadow: "none" }}
              >
                <NavDropdown.Item>Ropa de mujer</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button>Login</Button>
        <LinkContainer to="/carrito">
          <Nav.Link>🛒</Nav.Link>
        </LinkContainer>
      </Container>
    </Navbar>
  );
};
