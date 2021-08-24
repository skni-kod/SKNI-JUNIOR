<template>
  <v-app>
    <div id="app">
      <router-view />
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  components: { Footer },
  name: "App",
};
</script>

<style>
@font-face {
  font-family: comfortaa;
  src: url("./fonts/Comfortaa-Regular.ttf");
}
#app {
  font-family: comfortaa !important;
  scroll-behavior: smooth;
  margin: 0;
  background-color: rgb(247,247,247) !important;
}
</style>
