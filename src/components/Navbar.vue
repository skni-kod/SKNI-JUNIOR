<template>
  <v-toolbar
    height="90px"
    dark
    color="primary"
    id="nav"
    style="position: sticky; top:0; left: 0; z-index: 1;"
  >
    <v-row align="center">
      <v-toolbar-title class="ml-4 d-none d-md-flex">
        <img
          :src="require('@/assets/logaSKNI-KOD/logoJunior.png')"
          class="img-fluid"
          style="height: 75px"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        text
        v-for="(item, i) in items"
        :key="item.key"
        class="mr-4 transparent rounded-pill px-4 white--text"
        @click="emit(i)"
      >
        {{ item.name }}
      </v-btn>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      items: [
        { key: "home", link: "/", icon: "house", name: "O programie" },
        { key: "mentors", link: "/mentors", icon: "person", name: "Mentorzy" },
        { key: "application", link: "/", icon: "", name: "Rekrutacja" },
        { key: "partners", link: "/", icon: "", name: "Partnerzy" },
        { key: "faq", link: "/", icon: "", name: "FAQ" },
      ],
    };
  },
  methods: {
    emit(i) {
      this.$emit("go-to", i);
    },
  },
};
</script>
