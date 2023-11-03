import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { setMovie } from "../reducers/movie/authMovieSlice";
import { reduxMovie } from "../../services/Movies/get-movies-popular";
import { reduxUser } from "../../services/get-me";
import { setEmail, setNama } from "../reducers/authUserSlice";

export const GetUser = () => async (dispatch) => {
  return reduxUser()
    .then((result) => {
        dispatch(setNama(result.data.data));
        // dispatch(setEmail(result.data.data));
        // return result;
        // console.log(result)
    })
    .catch((err) => {
        
    });
}; 