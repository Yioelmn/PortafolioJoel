import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/global.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Portafolio Joel</h5>
            <p>© 2025 Todos los derechos reservados.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>
                Hecho por Yioelmn
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;