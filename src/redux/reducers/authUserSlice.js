import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nama : "",
    email : ""
}

const authUserSlice = createSlice({
    name : "userData",
    initialState,
    reducers :{
        setNama: (state, action) => {
            state.nama = action.payload;
          },
        setEmail: (state, action) => {
            state.email = action.payload;
          },
    }
}) 

export const { setNama, setEmail } = authUserSlice.actions;

export default authUserSlice.reducer;