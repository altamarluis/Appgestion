// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <Container id="footer" className="bg-dark text-light py-4" style = {{fontSize: '10px'}}>
      <Row>
        {/* Sección 1 */}
        <Col>
          <ul className="list-unstyled">
            <li><a href="#">Regimen legal</a></li>
            <li><a href="#">Contratación</a></li>
            <li><a href="#">Rendición de cuentas</a></li>
            <li><a href="#">Pago virtual</a></li>
            <li><a href="#">Calidad</a></li>
          </ul>
        </Col>

        {/* Sección 2 */}
        <Col>
          <ul className="list-unstyled">
            <li><a href="#">Talento humano</a></li>
            <li><a href="#">Ofertas de empleo</a></li>
            <li><a href="#">Concurso docente</a></li>
            <li><a href="#">Control interno</a></li>
            <li><a href="#">Buzón de notificaciones</a></li>
          </ul>
        </Col>

        {/* Sección 3 */}
        <Col>
          <ul className="list-unstyled">
            <li><a href="#">Talento humano</a></li>
            <li><a href="#">Ofertas de empleo</a></li>
            <li><a href="#">Concurso docente</a></li>
            <li><a href="#">Control interno</a></li>
            <li><a href="#">Buzón de notificaciones</a></li>
          </ul>
        </Col>

        {/* Sección 4 */}
        <Col>
          <ul className="list-unstyled">
            <li><a href="#">Correo institucional</a></li>
            <li><a href="#">Redes sociales</a></li>
            <li><a href="#">Quejas y reclamos</a></li>
            <li><a href="#">Encuestas</a></li>
            <li><a href="#">Estadisticas</a></li>
          </ul>
        </Col>

        <Col>
          <ul className="list-unstyled">
            <li><a href="#">Mapa del sitio</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Atención en linea</a></li>
            <li><a href="#">Contáctenos</a></li>
            <li><a href="#">Glosario</a></li>
          </ul>
        </Col>

        <Col>
          <ul className="list-unstyled">
            <li><a href="#">Talento humano</a></li>
            <li><a href="#">Ofertas de empleo</a></li>
            <li><a href="#">Concurso docente</a></li>
            <li><a href="#">Control interno</a></li>
            <li><a href="#">Buzón de notificaciones</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
