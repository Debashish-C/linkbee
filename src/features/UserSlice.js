import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: {
        userid: "",
        email: "",
        password: "",
    },
}

export  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        user: (state, action) => {
            state.users = action.payload;
        }
    }
})

export const {user} = userSlice.actions;
export default userSlice.reducer;
