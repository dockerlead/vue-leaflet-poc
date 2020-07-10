import { ActionTree } from "vuex";
import { MapState } from "./types";
import { RootState } from "@/store/types";
import * as L from "leaflet";

export const actions: ActionTree<MapState, RootState> = {
  changeCenter(state, payload: L.LatLng): void {
    return state.commit("changeCenter", payload);
  }
};
