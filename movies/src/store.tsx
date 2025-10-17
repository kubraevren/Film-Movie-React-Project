import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./slice/FilmSlice";
import tvReducer from "./slice/TvSlice";
import homeReducer from "./slice/HomeSlice";
export const store= configureStore({
    reducer:{
        film:filmReducer,
        tv:tvReducer,
        home:homeReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;