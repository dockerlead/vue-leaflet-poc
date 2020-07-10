<template>
  <LMap
    :center="center"
    :options="mapOptions"
    class="main-map"
    @update:center="centerUpdate"
  >
    <LTileLayer :url="url" :attribution="attribution" />
  </LMap>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import * as L from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import store from "@/store";

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  }
})
export default class LeafletMap extends Vue {
  mapOptions: L.MapOptions = {
    zoom: 8,
    maxZoom: 18,
    minZoom: 2
  };
  center = new L.LatLng(41.8781, 272.3702);

  url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  attribution =
    "&copy; <a href='https://crazyoptimist.net/'>Crazy Optimist</a> Licensed Under MIT";

  centerUpdate(center: L.LatLng) {
    this.center = center;
    store.dispatch("map/changeCenter", center);
  }
}
</script>

<style scoped>
.main-map {
  width: 100%;
  height: 100%;
}
</style>
