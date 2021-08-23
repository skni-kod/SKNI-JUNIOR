<template>
  <div>
    <baner @clicked="lol" />
    <Navbar @go-to="scrolling"></Navbar>
    <div ref="0" class="pt-15">
      <project-info />
    </div>
    <div ref="1" class="pt-16">
      <team />
    </div>
    <div ref="2" class="pt-15">
      <application />
    </div>
    <div ref="3" class="pt-15">
      <partners />
    </div>
    <div ref="4" class="pt-15">
      <faq />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Team from "../components/Team.vue";
import ProjectInfo from "../components/ProjectInfo.vue";
import Partners from "../components/Partners.vue";
import Application from "../components/Application.vue";
import Faq from "../components/FAQ.vue";

export default {
  components: { Navbar, Team, ProjectInfo, Partners, Application, Faq },
  name: "Home",
  methods: {
    lol() {
      var element = this.$refs[0];
      element.scrollIntoView({ behavior: "smooth" });
    },
    scrolling(id) {
      var element = this.$refs[id];
      element.scrollIntoView({ behavior: "smooth" })
    }
  },
};
</script>