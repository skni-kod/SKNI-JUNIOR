<template>
  <nav>
    <v-app-bar  class="align-items-stretch">
      <v-toolbar-title>
        SKNI
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-list nav dense>
        <v-list-item v-for="item in items" :key="item.key">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>

    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      nav_variant: "",
      nav_type: "light",
      items: [
        { key: "home", link: "/", icon: "house", name: "O programie" },
        { key: "application", link: "/", icon: "", name: "Jak aplikować?" },
        { key: "mentors", link: "/mentors", icon: "person", name: "Mentorzy" },
        { key: "partners", link: "/", icon: "", name: "Partnerzy" },
        { key: "faq", link: "/", icon: "", name: "FAQ" },
      ],
    };
  },
  created() {
    document.addEventListener("scroll", () => {
      if (window.scrollY != 0) {
        this.$data.nav_variant = "background:rgb(10, 72, 130)";
        this.$data.nav_type = "dark";
      } else {
        this.$data.nav_variant = "";
        this.$data.nav_type = "light";
      }
    });
  },
};
</script>
