import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import projects from '../data/project.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import Button from '../components/atoms/Button.jsx';
import { useNavigate } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <Container className="my-5">
        <h1>Proyecto no encontrado</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button variant="primary" onClick={() => navigate('/projects')}>
        Volver
      </Button>
      <Card className="mt-3">
        <Image src={project.image} alt={project.name} className="project-image" />
        <Card.Body>
          <Text variant="h2">{project.name}</Text>
          <Text variant="p">{project.longDescription}</Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProjectDetail;