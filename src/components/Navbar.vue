<template>
  <div>
    <b-navbar toggleable="lg" type="light" style="z-index: 1" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto h5">
          <b-nav-item
            right
            v-for="item in items"
            :key="item.name"
            :to="item.link"
            :active="$route.path == item.link"
            ><b-icon :icon="item.icon"></b-icon> {{ item.name }}</b-nav-item
          >
          <b-nav-item-dropdown text=" Dołącz do nas" right no-caret>
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
      items: [
        { key: "home", link: "/", icon: "house", name: "O programie" },
        { key: "mentors", link: "/mentors", icon: "person", name: "Mentorzy" },
        { key: "home", link: "/projects", icon: "book", name: "Projekty" },
      ],
    };
  },
};
</script>
