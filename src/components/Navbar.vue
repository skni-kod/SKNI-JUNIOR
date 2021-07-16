<template>
  <div>
    <b-navbar
      toggleable="lg"
      :type="nav_type"
      fixed="top"
      :style="nav_variant"
    >
      <b-navbar-toggle target="nav-collapse" class='ml-auto'></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto h5" ref="navbar">
          <b-nav-item
            class="px-5"
            ref="navbar_item"
            v-for="item in items"
            :key="item.name"
            :to="item.link"
            :active="$route.path == item.link"
            ><b-icon :icon="item.icon"></b-icon> {{ item.name }}</b-nav-item
          >
          <b-nav-item-dropdown text=" Dołącz do nas" no-caret>
            <template slot="button-content">
              <b-icon icon="person-plus"></b-icon>
              Dołącz do nas
            </template>
            <b-dropdown-item href="#">Uczestnik</b-dropdown-item>
            <b-dropdown-item href="#">Mentor</b-dropdown-item>
            <b-dropdown-item href="#">Partner</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      nav_variant: "",
      nav_type:'light',
      items: [
        { key: "home", link: "/", icon: "house", name: "O programie" },
        { key: "mentors", link: "/mentors", icon: "person", name: "Mentorzy" },
        { key: "home", link: "/projects", icon: "book", name: "Projekty" },
      ],
    };
  },
  created() {
    document.addEventListener("scroll", () => {
      if (window.scrollY != 0) {
        this.$data.nav_variant = "background:rgb(10, 72, 130)";
        this.$data.nav_type = 'dark';
        //this.$refs.navbar.classList.remove("ml-auto");
        this.$refs.navbar_item.forEach((element) => {
          element.classList.remove("px-5");
          element.classList.add("px-3");
        });
      } else {
        this.$data.nav_variant = "";
        this.$data.nav_type = "light";
        //this.$refs.navbar.classList.add("ml-auto");
        this.$refs.navbar_item.forEach((element) => {
          element.classList.remove("px-3");
          element.classList.add("px-5");
        });
      }
    });
  },
};
</script>
