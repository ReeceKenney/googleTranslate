import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./historySlice";

export default configureStore({
    reducer: {
        history: historySlice
    }
})