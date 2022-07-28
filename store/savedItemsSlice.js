import { createSlice } from "@reduxjs/toolkit";

const savedItemsSlice = createSlice({
    name: 'savedItems',
    initialState: {
        items: []
    },
    reducers: {
        setSavedItems: (state, action) => {
            state.items = action.payload.items;
        }
    }
});

export const { setSavedItems } = savedItemsSlice.actions;
export default savedItemsSlice.reducer;