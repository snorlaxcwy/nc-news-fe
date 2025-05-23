import axios from "axios";
const BASE_URL = "https://snorlax-7fa6.onrender.com/api";
// fetch topics
export function fetchTopics() {
  return axios.get(`${BASE_URL}/topics`).then((res) => res.data.topics);
}
