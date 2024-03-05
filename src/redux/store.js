import { combineReducers, configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./slices/images.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const config = {
    key: 'root',
    version: 1,
    storage: storage
}

const slices = combineReducers({
    imagesSlice,
})

const store = configureStore({
    reducer: persistReducer(config, slices),
    devTools: true,
    middleware: (setup) => setup({
        serializableCheck: false
    })
});

export default store;