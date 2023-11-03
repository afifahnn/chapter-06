import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { setMovie } from "../reducers/movie/authMovieSlice";
import { reduxMovie } from "../../services/Movies/get-movies-popular";

export const GetMovie = () => (dispatch) => {
  reduxMovie()
    .then((result) => {
        dispatch(setMovie(result.data.data));
        return result;
    })
    .catch((err) => {
        
    });
}; 