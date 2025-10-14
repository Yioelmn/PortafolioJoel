import { Card, Button } from 'react-bootstrap';
import Image from '../atoms/Image.jsx';
import Text from '../atoms/Text.jsx';
import { useNavigate } from 'react-router-dom';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} className="m-2">
      <Image src={project.image} alt={project.name} className="card-img-top" />
      <Card.Body>
        <Text variant="h5">{project.name}</Text>
        <Text variant="p">{project.description}</Text>
        <Button variant="primary" onClick={() => navigate(`/projects/${project.id}`)}>
          Ver proyecto
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
