import axios from "axios";
const BASE_URL = "https://snorlax-7fa6.onrender.com/api";

export function fetchCommentsByArticle(article_id) {
  return axios
    .get(`${BASE_URL}/articles/${article_id}/comments`)
    .then((res) => res.data.comments);
}

export function postComment(article_id, comment) {
  return axios
    .post(`${BASE_URL}/articles/${article_id}/comments`, comment)
    .then((res) => res.data.comment);
}
