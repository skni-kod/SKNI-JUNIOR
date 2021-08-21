<template>
  <div id="app">
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
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
body {
  font-family: comfortaa !important;
  scroll-behavior: smooth;
  margin: 0;
}
</style>