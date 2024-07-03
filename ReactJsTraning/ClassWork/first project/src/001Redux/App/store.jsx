import { configureStore } from "@reduxjs/toolkit";
import Counter from "../Features/Counter";

export const store = configureStore({
    reducer: {
        counterKey: Counter
    }
});