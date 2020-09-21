import http from "../Conection";

const post = (data) => {
  return http.post("/add", data);
};

export default {
  post,
};
