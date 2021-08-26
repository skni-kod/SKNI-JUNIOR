<template>
  <div style="background: rgba(10, 72, 130, 0.2); padding-bottom: 30px">
    <b-row
      no-gutters
      align-h="center"
      class="p-5 lead text-center mt-4"
      align-v="center"
    >
      <div class="mt-8">
        <b-img
          fluid
          style="height: 40px; border-right: 1px solid black"
          :src="require('../assets/logo_black.svg')"
          class="pr-4 mr-1"
        ></b-img>
        <a
          v-for="(icon, i) in icons"
          :key="i"
          :href="icon.link"
          style="text-decoration: none"
        >
          <v-icon large color="black" class="mx-2 social">{{ icon.name }}</v-icon>
          <v-tooltip top :target="i" triggers="hover">
            {{ icon.description }}</v-tooltip
          >
        </a>
      </div>

      <span class="ml-3 mt-8" style="border-left: solid 1px black"
        >Kontakt <br /><i class="h6 pl-4"> sknikodprz@gmail.com</i></span
      >
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        {
          name: "mdi-web",
          link: "https://kod.prz.edu.pl/#/",
          description: "SKNI KOD",
        },
        {
          name: "mdi-facebook",
          link: "https://www.facebook.com/skni.kod",
          description: "Facebook",
        },
        {
          name: "mdi-linkedin",
          link: "https://www.linkedin.com/company/skni-kod",
          description: "Linkedin",
        },
        {
          name: "mdi-instagram",
          link: "https://www.instagram.com/skni.kod/",
          description: "Instagram",
        },
      ],
    };
  },
};
</script>

<style scoped>
.social {
  transition: 0.5s;
  cursor: pointer;
}
.social:hover {
  color: rgb(10, 72, 130) !important;

  transform: scale(1.4);
}
</style>
