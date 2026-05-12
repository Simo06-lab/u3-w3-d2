import type { IArticle } from "../assets/types/Article"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
export default function HomePage() {
  const [articles, setArticles] = useState<IArticle[]>([])

  const fetchArticles = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.results)
      })
      .catch((err) => console.log("Errore nel fetch articoli:", err))
  }
  useEffect(() => {
    fetchArticles()
  }, [])
  return (
    <Container className="py-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {articles.map((article) => (
          <Col key={article.id}>
            <Card className="h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={article.image_url}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title>{article.title}</Card.Title>

                <Card.Text className="flex-grow-1">
                  {article.summary.slice(0, 100)}...
                </Card.Text>
                <Link to={`/articles/${article.id}`}>
                  <Button variant="primary" className="mt-auto">
                    vai ai dettagli
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
