import { useNavigate } from "react-router-dom";
import { reduxMovieSearch } from "../../services/Movies/get-movies-search";
import { setSearch } from "../reducers/movie/authSearchSlice";

export const GetMovieSearch = (param) => (dispatch) => {
  return reduxMovieSearch(param)
    .then((result) => {
      console.log(result)
        return dispatch(setSearch(result.data.data));
        // return result;
    })
    .catch((err) => {});
}; 

// export const searchMovie = (query) => () => {
//   window.location.href = `/search/${query}`
// }