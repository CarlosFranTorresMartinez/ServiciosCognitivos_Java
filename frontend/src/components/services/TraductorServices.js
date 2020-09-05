import axios from "axios";

const TRADUCTOR_API_BASE_URL = "http://localhost:8080/";

class TraductorServices {
  createTRADUCTOR(data) {
    return axios.post(TRADUCTOR_API_BASE_URL, date);
  }
}

export default new TraductorServices()