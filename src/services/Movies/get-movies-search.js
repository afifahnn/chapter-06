import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

export const reduxMovieSearch = async () => {
  return await http.get(API_ENDPOINT.SEARCH_MOVIE)
}

// export const reduxMovieSearch = async (searchParams) => {
//   try {
//     const response = await http.get(API_ENDPOINT.SEARCH_MOVIE, {
//       params: searchParams, // Menggunakan parameter yang diteruskan
//     });
//     if (response.status === 200) {
//       return response.data; // Mengembalikan data dari permintaan API
//     } else {
//       throw new Error("Gagal mengambil data");
//     }
//   } catch (error) {
//     throw error;
//   }
// }


// const fetchDataMoviesSearch = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;
//   const { data } = await http
//     .get(_key, { params: _params })
//     .then((result) => {
//       return result;
//     })
//     .catch((err) => {
//       if (err.response.status === 401) {
//         window.location.href = "/";
//       }
//     });
//   return data.data;
// };

// const useDataMoviesSearchQuery = (options) => {
//   return useQuery([API_ENDPOINT.SEARCH_MOVIE, options], fetchDataMoviesSearch);
// };

// export { fetchDataMoviesSearch, useDataMoviesSearchQuery };
