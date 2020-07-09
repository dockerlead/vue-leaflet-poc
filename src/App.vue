<template>
  <v-app>
    <Navigation />
    <Home />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Navigation from "@/components/shared/Navigation.vue"
import Home from "@/views/Home.vue";
import Footer from "@/components/shared/Footer.vue"
@Component({
  name: "App",
  components: {
    Navigation,
    Home,
    Footer
  }
})
export default class App extends Vue {
  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>
