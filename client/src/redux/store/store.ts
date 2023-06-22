import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { gasTrackSlice } from "../reducers/gasTrackReducer/gasTrackSlice";

export const store = configureStore({
    reducer: {
        gasTrack: gasTrackSlice.reducer
    }
});

// Custom types for useDispatch and useSelector

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;