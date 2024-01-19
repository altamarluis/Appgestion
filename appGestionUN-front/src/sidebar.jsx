import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <Nav.Item>
        <Nav.Link href="#">Enlace 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">Enlace 2</Nav.Link>
      </Nav.Item>
      {/* Agrega más enlaces según sea necesario */}
    </Nav>
  );
};

export default Sidebar;
