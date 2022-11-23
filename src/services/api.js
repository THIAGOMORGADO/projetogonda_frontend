import axios from "axios";

const api = axios.create({
   //baseURL: "https://rocky-waters-71572.herokuapp.com/",
  // baseURL: "http://localhost:4002",
   baseURL: "https://renato-gonda.netlify.app/",

});

export default api;