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
        },
        clearHistory: (state) => {
            state.items = []
        }
    }
});

export const { addHistoryItem, setHistoryItems, clearHistory } = historySlice.actions;
export default historySlice.reducer;