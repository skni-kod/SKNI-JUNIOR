<template>
  <div>
    <baner @clicked="lol" />
    <Navbar @go-to="scrolling"></Navbar>
    <div ref="0">
      <project-info style="padding-top: 120px" />
    </div>
    <div ref="1" style="padding-top: 120px">
      <team />
    </div>
    <div ref="2" style="padding-top: 120px">
      <application />
    </div>
    <div ref="3" style="padding-top: 120px">
      <partners />
    </div>
    <div ref="4" style="padding-top: 120px">
      <faq />
    </div>
    <div ref="5" style="padding-top: 120px">
      <documents />
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
import Documents from "../components/Documents.vue";

export default {
  components: { Navbar, Team, ProjectInfo, Partners, Application, Faq, Documents },
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
