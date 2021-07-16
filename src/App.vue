<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
export default {
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