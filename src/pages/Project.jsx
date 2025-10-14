import { Container, Row } from 'react-bootstrap';
import ProjectCard from '../components/organisms/ProjectCard.jsx';
import project from '../data/project.js';

function Project() {
  return (
    <Container className="my-5">
      <h1>Mis Proyectos</h1>
      <Row>
        {project.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Row>
    </Container>
  );
}

export default Project;