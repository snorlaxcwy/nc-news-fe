import axios from "axios";
const BASE_URL = "https://snorlax-7fa6.onrender.com/api";

// fetch all articles
export function fetchArticles({
  sort_by = "created_at",
  order = "desc",
  topic,
}) {
  let url = `${BASE_URL}/articles?sort_by=${sort_by}&order=${order}`;
  if (topic) url += `&topic=${topic}`;
  return axios.get(url).then((res) => res.data.articles);
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

// fetch articles by topics
export function fetchTopicsByArticleId(topic) {
  return axios
    .get(`${BASE_URL}/articles?topic=${topic}`)
    .then((res) => res.data.articles);
}

// post an article
export function postArticle(article) {
  return axios
    .post(`${BASE_URL}/articles`, article)
    .then((res) => res.data.article);
}
