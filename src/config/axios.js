import axios from "axios";

const apiUrl = 'http://localhost:3001'

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  
  if (config.headers && token) {
    config.headers["Authorization"] = "Bearer " + token;
  }

  return config;
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.data.message == "Unauthorized") {
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("persist:user")
//       window.location.href = '/login'
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
