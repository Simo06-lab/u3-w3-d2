import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./components/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import ArticleDetailPage from "./components/ArticleDetailPage"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
