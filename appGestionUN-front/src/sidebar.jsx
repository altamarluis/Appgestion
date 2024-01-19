import React from 'react';
import { Nav, Accordion } from 'react-bootstrap';
import './sidebar.css'

const Servicios = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Servicios</Accordion.Header>
        <Accordion.Body>
          <Nav defaultActiveKey="/servicio1" className="col-md-2 d-none d-md-block bg-light sidebar">
            <Nav.Link href="/servicio1">Servicio 1</Nav.Link>
            <Nav.Link href="/servicio2">Servicio 2</Nav.Link>
            <Nav.Link href="/servicio3">Servicio 3</Nav.Link>
            <Nav.Link href="/servicio4">Servicio 4</Nav.Link>
            <Nav.Link href="/servicio5">Servicio 5</Nav.Link>
          </Nav>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Servicios;
