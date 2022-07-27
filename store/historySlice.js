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
            
            console.log(state.items)
        }
    }
});

export const { addHistoryItem } = historySlice.actions;
export default historySlice.reducer;