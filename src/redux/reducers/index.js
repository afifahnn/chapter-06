import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./auth/authLoginSlice";
import authMovieSlice from "./movie/authMovieSlice";
import authSearchSlice from "./movie/authSearchSlice";
import authDetailsSlice from "./movie/authDetailsSlice";
import authUserSlice from "./authUserSlice";

export default combineReducers({
  auth: authLoginSlice,
  movie: authMovieSlice,
  search: authSearchSlice,
  detail: authDetailsSlice,
  user: authUserSlice
}); 