import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./pages/ArticleDetail";
import { Routes, Route } from "react-router-dom";
import TopicsArticles from "./components/TopicArticles";
import TopicsList from "./components/TopicsList";
import NotFound from "./pages/404NotFound";
import AddArticle from "./components/AddArticle";
import { fetchTopics } from "./api/topics";
import { useEffect, useState } from "react";

export default function App() {
  const currentUser = "weegembump";
  const [topics, setTopics] = useState([]);

  // fetch topics
  useEffect(() => {
    fetchTopics().then(setTopics);
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList currentUser={currentUser} />} />
        <Route
          path="/articles/:article_id"
          element={<ArticleDetail currentUser={currentUser} />}
        />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/topics/:topic_slug" element={<TopicsArticles />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/add"
          element={<AddArticle currentUser={currentUser} topics={topics} />}
        />
      </Routes>

      <Footer />
    </>
  );
}
