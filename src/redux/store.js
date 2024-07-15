import { configureStore } from "@reduxjs/toolkit";
import pitchReducer from "./Slices/pitchSlice";

const store = configureStore({
    reducer: {
        pitch: pitchReducer,
    },
});

export default store;
