import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Image from "../components/atoms/Image";
import Text from "../components/atoms/Text";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Container className="my-5 text-center">
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <Image src="/images/PerfilPortafolio.webp" alt="fotito de perfils" className="img-fluid rounded-circle shadow"/>
        </Col>

        <Col md={6}>
          <Text variant="h1">Hola, mi nombre es Joel👽</Text>
          <Text variant="p">
            Desarrollador Frontend novato adentrandose al mundo de la programación,
            Este portafolio muestra un resumen de algunos de mis proyectos que eh desarrollado a lo largo de mis estudios
            . <br /> Te invito a seguirme en mis redes sociales para que puedas estar al tanto de mis avances: <br />
            <div className="mis-redes-link">
              <a href="https://github.com/Yioelmn" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/Yioelmn/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/Yioelmn/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
</div>

          </Text>

          <div className="mt-4">
            <Button
              variant="primary"
              className="me-2"
              onClick={() => navigate("/projects")}
            >
              Ver mis proyectos
            </Button>
            <Button onClick={() => navigate("/contact")}>
              Contáctame
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Text variant="h2">Tecnologías que uso</Text>
          <p>
            React-JavaScript-HTML-CSS-Bootstrap-Node.js-Git
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;