import { reduxMovieDetails } from "../../services/Movies/get-movies-detail";
import { setDetails } from "../reducers/movie/authDetailsSlice";

export const GetMovieDetails = (ID) => (dispatch) => {
  return reduxMovieDetails(ID)
    .then((result) => {
      console.log(result)
        return dispatch(setDetails(result.data.data));
    })
    .catch((err) => {});
}; 