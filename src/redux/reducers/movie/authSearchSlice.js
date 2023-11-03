import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie_search : []
}

const authSearchSlice = createSlice({
    name : "movieSearch",
    initialState,
    reducers :{
        setSearch: (state, action) => {
            state.movie_search = action.payload;
          }
    }
}) 

export const { setSearch } = authSearchSlice.actions;

export default authSearchSlice.reducer;