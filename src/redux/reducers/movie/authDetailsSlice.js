import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie_details : [],
    // genres : [],
    // key : []
}

const authDetailsSlice = createSlice({
    name : "movieDetails",
    initialState,
    reducers :{
        setDetails: (state, action) => {
            state.movie_details = action.payload;
          },
        // setGenres: (state, action) => {
        //     state.genres = action.payload;
        //   },
        // setKey: (state, action) => {
        //     state.key = action.payload;
        //   },
    }
}) 

export const { setDetails, setGenres, setKey } = authDetailsSlice.actions;

export default authDetailsSlice.reducer;