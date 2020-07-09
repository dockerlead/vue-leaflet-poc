import { Module } from "vuex";
import { RootState } from '@/store/types';
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import * as L from "leaflet";
import { MapState } from "./types";

export const state: MapState = {
  currentCenter:  new L.LatLng(0, 0),
};

const namespaced = true;

export const map: Module<MapState, RootState> ={
  namespaced,
  actions,
  mutations,
  getters,
  state
};