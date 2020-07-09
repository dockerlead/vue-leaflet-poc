<template>
  <v-main class="pt-10">
    <LeafletMap />
  </v-main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import LeafletMap from "@/components/map/LeafletMap.vue";
@Component({
  name: "Home",
  components: {
    LeafletMap
  }
})
export default class Home extends Vue {}
</script>
