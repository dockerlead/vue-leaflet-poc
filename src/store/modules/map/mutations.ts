import { MutationTree } from "vuex"
import { MapState } from "./types"

export const mutations: MutationTree<MapState> = {
  changeCenter(state, payload: L.LatLng) {
    state.currentCenter = payload;
  }
}