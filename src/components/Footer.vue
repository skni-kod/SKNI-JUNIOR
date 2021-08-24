<template>
  <div style="background: rgba(10, 72, 130, 0.2)">
    <b-row
      no-gutters
      align-h="center"
      class="p-5 lead text-center"
      align-v="center"
    >
      <b-img
        fluid
        style="height: 40px; border-right: 1px solid black"
        :src="require('../assets/logo_black.svg')"
        class="pr-3 mr-1"
      ></b-img>
      <a href="https://kod.prz.edu.pl/#/">
        <b-icon
          color="black"
          icon="globe"
          id="web"
          class="mx-2 social"
        ></b-icon>
        <b-tooltip target="web" triggers="hover"> SKNI KOD </b-tooltip>
      </a>
      <a href="https://www.facebook.com/skni.kod">
        <b-icon
          icon="facebook"
          color="black"
          id="fb"
          class="mx-2 social"
        ></b-icon>
        <b-tooltip target="fb" triggers="hover"> Facebook </b-tooltip>
      </a>
      <a href="https://www.linkedin.com/company/skni-kod">
        <b-icon
          icon="linkedin"
          color="black"
          class="mx-2 social"
          id="linkedin"
        ></b-icon>
        <b-tooltip target="linkedin" triggers="hover"> Linkedin </b-tooltip>
      </a>
      <a href="https://www.instagram.com/skni.kod/">
        <b-icon
          icon="instagram"
          color="black"
          id="instagram"
          class="mx-2 social"
        ></b-icon>
        <b-tooltip target="instagram" triggers="hover"> Instagram </b-tooltip>
      </a>

      <span class="ml-3" style="border-left: solid 1px black"
        >Kontakt <br /><i class="h6 pl-4"> sknikodprz@gmail.com</i></span
      >
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.social {
  transition: 0.5s;
  cursor: pointer;
}
.social:hover {
  color: rgb(10, 72, 130) !important;

  transform: scale(1.5);
}
a {
  text-decoration: none;
}
</style>
