import http from "../http-common";

class SitioService {
  getAll() {
    return http.get("/sitios");
  }
  get(id) {
    return http.get(`/sitios/${id}`);
  }
}
export default new SitioService();

