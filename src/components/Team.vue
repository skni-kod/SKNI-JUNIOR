<template>
  <section>
    <v-card class="my-16" flat tile>
      <h1 class="d-flex justify-center text-lg-h1 font-weight-medium">Mentorzy</h1>
    </v-card>

    <v-row class="mx-2">
      <v-col v-for="(mentor, i) in mentors" :key="i">
        <v-card class="col-lg-12 outline rounded-lg mr-2 mb-2">
          <div data-aos="zoom-in">
            <div class="d-flex justify-center mb-3">
              <img
                :src="require('@/assets/team-3.jpg')"
                class="img-fluid"
              />
            </div>
            <div>
              <h4>{{ mentor.name }}</h4>
              <h5 class="green--text">{{ mentor.position }}</h5>
              <div class="mb-4">
                <v-icon>mdi-facebook </v-icon>
                <v-icon>mdi-linkedin </v-icon>
                <v-icon>mdi-github </v-icon>
              </div>
              <p>
                {{ mentor.description }}
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mentors: [
        {
          name: "Adam Kowalski",
          position: "CEO",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          git: "/",
          link: "/",
          fb: "/",
        },
        {
          name: "Adam Kowalski",
          position: "CEO",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: "GH",
          position: "Front",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          name: "Prz",
          position: "Back",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
    };
  },
};
</script>
