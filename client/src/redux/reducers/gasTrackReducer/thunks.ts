import {
    setGasTrack
} from './gasTrackSlice';
import { Dispatch } from 'redux';
import { GasTrackUsers } from './interfaces/thunksInterfaces';

const api = process.env.REACT_APP_API

export const getGasTrackUsers = () => async (dispatch: Dispatch) => {
    try {
        const res = await fetch(`${api}/api/user`);
        const data: GasTrackUsers[] = await res.json();
        dispatch(setGasTrack(data));
    } catch (error) {
        console.log(error);
    }
}