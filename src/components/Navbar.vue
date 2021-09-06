<template>
  <v-toolbar
    height="100px"
    dark
    color="primary"
    id="nav"
    style="position: sticky; top:0; left: 0; width: 100%; z-index: 20;"
  >
    <v-row align="center">
      <v-toolbar-title class="pl-4 d-none d-md-flex">
        <img
          :src="require('@/assets/logaSKNI-KOD/logoJunior.png')"
          class="img-fluid"
          style="height: 79px"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        text
        v-for="(item, i) in items"
        :key="item.key"
        class="transparent rounded-pill white--text"
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
        { key: "home", name: "O programie" },
        { key: "mentors", name: "Mentorzy" },
        { key: "application", name: "Rekrutacja" },
        { key: "partners", name: "Partnerzy" },
        { key: "faq", name: "FAQ" },
        { key: "docs", name: "Dokumenty" },
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
