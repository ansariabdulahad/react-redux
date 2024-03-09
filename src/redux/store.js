import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import imagesSlice from "./slices/images.slice";
import authSlice from "./slices/auth.slice";

const config = {
    key: 'root',
    version: 1,
    storage: storage
}

const slices = combineReducers({
    imagesSlice,
    authSlice
})

const store = configureStore({
    reducer: persistReducer(config, slices),
    devTools: true,
    middleware: (setup) => setup({
        serializableCheck: false
    })
});

export default store;