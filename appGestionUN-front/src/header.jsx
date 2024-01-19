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
        <div style={{ position: 'fixed', left: '50px' }}>
        <a href="https://www.unal.edu.co"><img id="nuevaimg" src={newImage} alt="nueva_imagen" style={{ width: '150px', height: 'auto' }} /></a>
        </div>
        {/* Enlace a la derecha de la imagen */}
        <Nav.Link
          href="https://subdominio.unal.edu.co/"
          target="_blank"  // Abre el enlace en una nueva pestaña
          style={{ textDecoration: 'none', color: 'white', marginLeft: '20px' }}
        >
          <div id="link" style={{ position: 'fixed', left: '260px', top: '30px'  }}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
</svg>portal-admitido.unal.edu.co
          </div>
        </Nav.Link>
        <div id="lado_derecho" style={{}}>
        {/* Buscador */}
        <div style={{ }}>
        <Form  style={{ }}>
          <FormControl type="text" placeholder="Buscar en la universidad"  />
        </Form>
        </div>
        {/* Menú desplegable dentro del Navbar */}
        <Dropdown style={{ }}>
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