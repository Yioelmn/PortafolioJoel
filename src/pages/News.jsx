import { Container, Card } from 'react-bootstrap';
import Image from "../components/atoms/Image";
import Text from "../components/atoms/Text";
import Noticias from "../data/news.js";

function News() {
  return (
    <Container className="my-5">
      <Text variant="h1">Noticias</Text>
      {Noticias.map((news) => (
        <Card className="my-3" key={news.id}>
          <Image src={news.image} alt={news.title} className="card-img-top" />
          <Card.Body>
            <Text variant="h3">{news.title}</Text>
            <Text variant="p">{news.description}</Text>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
                Leer más
            </a>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default News;