import { GetterTree } from 'vuex';
import { MapState } from './types';
import { RootState } from '@/store/types';
import * as L from "leaflet"

export const getters: GetterTree<MapState, RootState> = {
  currentCenter(state): L.LatLng {
    return state.currentCenter
  }
}