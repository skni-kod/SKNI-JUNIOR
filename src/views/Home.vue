<template>
  <div>
    <baner @clicked="lol"/>
    <Navbar></Navbar>
    <project-info ref="about" />
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
