<template>
  <section>
    <v-card class="mb-5" flat tile>
      <h1 class="d-flex justify-center font-weight-medium">
        Mentorzy
      </h1>
    </v-card>

    <v-row class="mx-2">
      <v-col v-for="(mentor, i) in mentors" :key="i">
        <v-card class="col-lg-12 col-xl-12 outline rounded-lg mr-2 mb-2">
          <div data-aos="zoom-in">
            <div class="d-flex justify-center mb-3">
              <img
                :src="require('@/assets/team-3.jpg')"
                class="img-fluid"
                style="width: 20vw; min-width: 150px; height: auto;"
              />
            </div>
            <div>
              <h4>{{ mentor.name }}</h4>
              <h5 class="green--text mb-0 p-0">{{ mentor.position }}</h5>
              <div class="my-0 ml-0 d-flex justify-center">
                <v-col cols="6" class="d-flex justify-center p-1 pl-0 mb-2">
                  <v-btn
                    icon
                    color="#4267B2"
                    :href="mentor.fb"
                    class="text-decoration-none"
                    style="margin-right: 0.8vw"
                  >
                    <v-icon size="36">mdi-facebook </v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="#0e76a8"
                    :href="mentor.link"
                    class="text-decoration-none"
                    style="margin-right: 0.8vw"
                  >
                    <v-icon size="36">mdi-linkedin </v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="black"
                    :href="mentor.git"
                    class="text-decoration-none"
                  >
                    <v-icon size="36">mdi-github </v-icon>
                  </v-btn>
                </v-col>
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
          fb: "https://kod.prz.edu.pl/#/",
        },
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
          name: "GH",
          position: "Front",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          git: "/",
          link: "/",
          fb: "/",
        },
        {
          name: "Prz",
          position: "Back",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          git: "/",
          link: "/",
          fb: "/",
        },
      ],
    };
  },
};
</script>
