import { Container, Button } from "react-bootstrap"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import type { IArticle } from "../assets/types/Article"
export default function ArticleDetailPage() {
  const { id } = useParams()
  const [article, setArticle] = useState<IArticle | null>(null)
  const fetchArticle = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data)
      })
      .catch((err) => console.log("Errore nel fetch dettaglio:", err))
  }
  useEffect(() => {
    fetchArticle()
  }, [])
  if (!article) {
    return <div>Caricamento...</div>
  }
  return (
    <Container className="py-4">
      <h1>{article.title}</h1>

      <p>
        <strong>Pubblicato il:</strong>{" "}
        {new Date(article.published_at).toString()}
      </p>

      <img
        src={article.image_url}
        alt={article.title}
        className="img-fluid mb-4 rounded"
      />

      <p>{article.summary}</p>

      <a href={article.url} target="_blank">
        <Button variant="secondary"> fonte originale</Button>
      </a>
    </Container>
  )
}
