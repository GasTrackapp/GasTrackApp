import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GasTrackState } from "./interfaces/reducerInterface";
import { GasTrackUsers } from "./interfaces/thunksInterfaces";

const initialState: GasTrackState = {
    gasTrack: [],
    gasTrackLoading: false,
};

export const gasTrackSlice = createSlice({
    name: 'gasTrack',
    initialState,
    reducers: {
        setGasTrack: (state, action: PayloadAction<GasTrackUsers[]>) => {
            state.gasTrack = action.payload;
        }
    }
});

export const { setGasTrack } = gasTrackSlice.actions;
