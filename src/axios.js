import axios from "axios";
const instance = axios.create({
  baseURL: "https://perfprmance-ppt-default-rtdb.firebaseio.com/",
});

instance.defaults.headers.common["Authorization"] = "AUTH_TOKEN FROM INSTANCE";

instance.interceptors.request.use(
  (request) => {
    console.log(request);
    //Edit request if needed.
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
