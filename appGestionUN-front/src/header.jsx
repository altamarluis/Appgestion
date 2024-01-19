import React from 'react';
import { Navbar, Container, Dropdown, Form, FormControl, Nav } from 'react-bootstrap';
import sealBck from './assets/images/sealBck.png';
import newImage from './assets/images/logo.png'
import './header.css'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#"><img src={sealBck} alt="imagen_nav" /></Navbar.Brand>
        {/* Nueva imagen encima de la imagen existente */}
        <div style={{ position: 'fixed', left: '15px' }}>
        <a href="https://www.unal.edu.co"><img id="nuevaimg" src={newImage} alt="nueva_imagen" style={{ width: '230px', height: 'auto' }} /></a>
        </div>
        {/* Enlace a la derecha de la imagen */}
        <Nav.Link id="link"
          href="https://subdominio.unal.edu.co/"
          target="_blank"  // Abre el enlace en una nueva pestaña
          style={{ textDecoration: 'none', color: 'white', marginLeft: '20px' }}
        >
          <div style={{ position: 'fixed', left: '260px',  }}>
          portal-admitido.unal.edu.co
          </div>
        </Nav.Link>
        <div id="lado_derecho">
        {/* Buscador */}
        <div style={{ position: 'fixed', marginLeft: 'auto' }}>
        <Form inline style={{ marginRight: 'auto' }}>
          <FormControl type="text" placeholder="Buscar en la universidad" className="mr-sm-2" />
        </Form>
        </div>
        {/* Menú desplegable dentro del Navbar */}
        <Dropdown style={{ marginLeft: 'auto' }}>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            SEDES
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* Agrega elementos según sea necesario */}
            <Dropdown.Item href="#">Amazonia</Dropdown.Item>
            <Dropdown.Item href="#">Bogotá</Dropdown.Item>
            <Dropdown.Item href="#">Caribe</Dropdown.Item>
            <Dropdown.Item href="#">De la Paz</Dropdown.Item>
            <Dropdown.Item href="#">Manizales</Dropdown.Item>
            <Dropdown.Item href="#">Medellín</Dropdown.Item>
            <Dropdown.Item href="#">Orinoquia</Dropdown.Item>
            <Dropdown.Item href="#">Palmira</Dropdown.Item>
            <Dropdown.Item href="#">Tumaco</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;