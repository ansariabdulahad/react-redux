import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
    name: 'images',
    initialState: [],
    reducers: {
        addImage(state, action) {
            state.push(action.payload);
        },
        removeImage(state, action) {
            const cnf = window.confirm('Are you sure you want to remove ' + action.payload + '?');

            if (cnf) {
                state.splice(action.payload, 1);
            }
        }
    }
});

export const { addImage, removeImage } = imagesSlice.actions;
export default imagesSlice.reducer;