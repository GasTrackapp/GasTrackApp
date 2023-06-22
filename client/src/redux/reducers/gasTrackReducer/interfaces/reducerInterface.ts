import { GasTrackUsers } from "./thunksInterfaces";

export interface GasTrackState {
    gasTrack: GasTrackUsers[];
    gasTrackLoading: boolean;
}
