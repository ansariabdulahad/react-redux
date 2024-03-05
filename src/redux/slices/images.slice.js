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
        },
        resetImage(state) {
            return state = []; // return keyword is imp in this scenario
        }
    }
});

export const { addImage, removeImage, resetImage } = imagesSlice.actions;
export default imagesSlice.reducer;