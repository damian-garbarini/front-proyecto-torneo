import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navegacion = () => {
  return (
    <Navbar bg="success" variant="bs tertiary color">
      <Container>
        <Navbar.Brand href="/Home">Sigue girando</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/formulario">inscripcion</Nav.Link>
          <Nav.Link href="/Recomendado">lista de equipos</Nav.Link>
          <Nav.Link href="/Articulos">Premios</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navegacion;