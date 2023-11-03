import { useState } from "react";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import http from "../../utils/http";

export const reduxMovieDetails = async (ID) => {
  // return await http.get(`${API_ENDPOINT.DETAIL_MOVIE}${ID}`)
  const url = `${API_ENDPOINT.DETAIL_MOVIE}${ID}`
  try {
    const response = await http.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// const fetchDataMoviesDetail = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;
//   const { data } = await http
//     .get(_key, { params: _params })
//     .then((result) => {
//       return result;
//     })
//     .catch((err) => {
//       if (err.response.status === 401 || err.response.status === 404) {
//         window.location.href = "/";
//       }
//     });
//   return data.data;
// };

// const useDataMoviesDetailQuery = (options) => {
//   const data = useLocation();
//   const [ID, setID] = useState(data.state ? data.state.idMovie : "");

//   return useQuery([`${API_ENDPOINT.DETAIL_MOVIE}/${ID}`, options], fetchDataMoviesDetail);
// };

// export { fetchDataMoviesDetail, useDataMoviesDetailQuery };
