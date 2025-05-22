import axios from "axios";
const BASE_URL = "https://snorlax-7fa6.onrender.com/api";

// fetch all articles
export function fetchArticles() {
  return axios.get(`${BASE_URL}/articles`).then((res) => res.data.articles);
}

// fetch single articles
export function fetchArticleById(article_id) {
  return axios
    .get(`${BASE_URL}/articles/${article_id}`)
    .then((res) => res.data.article);
}

// fetch votes for an article
export function patchArticleVotes(article_id, inc_votes) {
  return axios
    .patch(`${BASE_URL}/articles/${article_id}`, { inc_votes })
    .then((res) => res.data.article);
}
