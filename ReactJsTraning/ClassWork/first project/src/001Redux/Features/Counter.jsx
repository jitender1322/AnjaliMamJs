import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'Counter',
    initialState: { count: 1000 },
    reducers: {
        increment: (state, action) => { state.count++ },
        decrement: (state, action) => { state.count-- },
    }
})

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;