import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'Counter',
    initialState: { count: 1000, username: '' },
    reducers: {
        increment: (state, action) => { state.count++ },
        decrement: (state, action) => { state.count-- },
        inc_by_user: (state, action) => { state.count += action.payload },
        dec_by_user: (state, action) => { state.count -= action.payload },
        updateUsername: (state, action) => { state.username = action.payload }
    }
})

export default counterSlice.reducer;
export const { increment, decrement, inc_by_user, dec_by_user, updateUsername } = counterSlice.actions;