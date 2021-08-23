<template>
  <v-toolbar class="pb-8" dark color="primary" id="nav" app style="position: sticky; top:0; left: 0">
    <v-row align="center">
      <v-toolbar-title class="ml-5 d-none d-md-flex">
        SKNI Junior
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
        text
        v-for="(item, i) in items"
        :key="item.key"
        class="mr-2 transparent rounded-pill white--text"
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
        { key: "application", link: "/", icon: "", name: "Jak aplikować?" },
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
