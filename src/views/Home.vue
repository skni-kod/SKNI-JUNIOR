<template>
  <div>
    <baner />
    <Navbar></Navbar>
    <project-info />
    <team />
    <application />
    <partners />
    <faq />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Team from '../components/Team.vue';
import ProjectInfo from '../components/ProjectInfo.vue';
import Partners from '../components/Partners.vue';
import Application from '../components/Application.vue';
import Faq from '../components/FAQ.vue';

export default {
  components: { Navbar, Team, ProjectInfo, Partners, Application, Faq },
  name: "Home",
  methods: {
    lol() {
      var element = this.$refs["about"];
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
.carousel-control-next-icon {
  margin-right: -100px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.carousel-control-prev-icon {
  margin-left: -100px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}
</style>
