import axios from "axios";

const axiosOptions = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
}

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api",
  ...axiosOptions
});

export const httpServer = axios.create({
  baseURL: "/api",
  ...axiosOptions
});

// axios.interceptors.response.use(
//   res => res,
//   async (error) => {
//     if (error.response?.status === 401) {
//       // Try refreshing
//       try {
//         await axios.post("/api/auth/revalidate");
//         // Retry original request
//         return axios(error.config);
//       } catch (refreshError) {
//         // Refresh failed → logout
//         await axios.post("/api/auth/logout");
//         window.location.href = "/login";
//       }
//     }
//     return Promise.reject(error);
//   }
// );