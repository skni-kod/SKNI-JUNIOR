<template>
  <v-toolbar dark color="rgb(10,74,130)">
    <v-row align="center">
      <v-toolbar-title class="ml-5 my-1">
        SKNI
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text v-for="item in items" :key="item.key" class="mr-2 my-1 transparent rounded-pill white--text">
        {{ item.name }}
      </v-btn>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { key: "home", link: "/", icon: "house", name: "O programie" },
        { key: "application", link: "/", icon: "", name: "Jak aplikować?" },
        { key: "mentors", link: "/mentors", icon: "person", name: "Mentorzy" },
        { key: "partners", link: "/", icon: "", name: "Partnerzy" },
        { key: "faq", link: "/", icon: "", name: "FAQ" },
      ],
    };
  },
};
</script>
