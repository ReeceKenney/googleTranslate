import { configureStore } from "@reduxjs/toolkit";
import historySlice from "./historySlice";
import savedItemsSlice from "./savedItemsSlice";

export default configureStore({
    reducer: {
        history: historySlice,
        savedItems: savedItemsSlice
    }
})