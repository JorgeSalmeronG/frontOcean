import axios from "axios";
export default axios.create({
  baseURL: "http://10.0.2.15:3000",
  headers: {
    "Content-type": "application/json"
  }
});
