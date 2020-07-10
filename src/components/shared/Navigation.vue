<template>
  <v-container>
    <v-app-bar app clipped-right>
      <v-toolbar-title>Leaflet-Vue-TS-POC</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>Current center is: {{ currentCenter }}</span>
    </v-app-bar>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import * as L from "leaflet";
import store from "@/store";

@Component
export default class Navigation extends Vue {
  get currentCenter(): L.LatLng {
    return store.getters["map/currentCenter"];
  }
}
</script>
