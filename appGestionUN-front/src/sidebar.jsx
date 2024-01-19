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
            <Nav.Link href="/servicio1">Correo Electronico</Nav.Link>
            <Nav.Link href="/servicio2">DNINFOA - SIA</Nav.Link>
            <Nav.Link href="/servicio3">Bibliotecas</Nav.Link>
            <Nav.Link href="/servicio4">Convocatorias</Nav.Link>
            <Nav.Link href="/servicio5">Identidad UNAL</Nav.Link>
          </Nav>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Servicios;
