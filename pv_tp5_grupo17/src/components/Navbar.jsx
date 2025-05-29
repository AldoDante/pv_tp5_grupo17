import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  return (
     <Navbar expand="lg" bg="success" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">           
            <Nav.Link as={Link} to="/alumnos">Lista de Alumnos</Nav.Link>
            <Nav.Link as={Link} to="/alumnos/nuevo">Nuevo Alumno</Nav.Link>
            <Nav.Link as={Link} to="/acerca">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
