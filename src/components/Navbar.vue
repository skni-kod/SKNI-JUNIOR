<template>
  <v-toolbar color="primary">
    <v-row>
      <v-toolbar-title class="ml-4">
        SKNI
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn v-for="item in items" :key="item.key" class="mr-3">
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
