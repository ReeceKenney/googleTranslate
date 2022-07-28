import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: 'history',
    initialState: {
        items: []
    },
    reducers: {
        addHistoryItem: (state, action) => {
            const {item} = action.payload;

            if (item) {
                state.items.push(item);
            }
        },
        setHistoryItems: (state, action) => {
            state.items = action.payload.items;
        }
    }
});

export const { addHistoryItem, setHistoryItems } = historySlice.actions;
export default historySlice.reducer;