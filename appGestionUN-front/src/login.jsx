import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Envelope, Lock } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión aquí
    // Simulando un inicio de sesión exitoso
    const loginSuccessful = true;

    if (loginSuccessful) {
      // Cambiar la ruta a /main después de un inicio de sesión exitoso
      navigate('/main');
    }
     
  };

  // Si el usuario está autenticado, renderiza el menú principal

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} lg={4}>
          <div className="login-form">
            <h2 className="login-title">Iniciar sesión</h2>
            <Form  onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail" className='input-group mb-3'>
                <span className='input-group-addon span-icon'>
                    <Envelope className="icon"/>
                </span>
                <Form.Control type="email" placeholder="Ingresa tu email" required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className='input-group mb-3'>
              <span className='input-group-addon span-icon'>
                <Lock className="icon" />
              </span>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" required />
              </Form.Group>

              <div className="login-links">
                <span className="forgot-password-link mb-3">
                  <Link to="/registro">Regístrate</Link>
                </span>
                <span className="forgot-password-link mb-3">
                <Link to="/forgotpassword">Olvidaste tu contraseña?</Link>
                </span>
              </div>

              <Button variant="primary" type="submit" className="custom-btn">
                Iniciar sesión
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
