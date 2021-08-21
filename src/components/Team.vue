<template>
  <section>
    <v-card class="mb-6" flat tile>
      <h1 class="d-flex justify-center">Mentorzy</h1>
    </v-card>

    <v-row class="mx-2">
      <v-col v-for="(mentor,i) in mentors" :key="i">
      <v-card
        class="col-lg-12 outline rounded-lg mr-2 mb-2"
      >
        <div data-aos="zoom-in">
          <div>
            <img :src="require('@/assets/logo_color.png')" class="img-fluid" />
          </div>
          <div>
            <h4>{{mentor.name}}</h4>
            <span class="green--text">{{mentor.position}}</span>
            <p>
              {{ mentor.description }}
            </p>
          </div>
        </div>
      </v-card>
      </v-col>
    </v-row >
  </section>
</template>

<script>
export default {
  data() {
    return {
      mentors: [
      { name: "ASD", position: "CEO", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
      { name: "GH", position: "Front", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
      { name: "Prz", position: "Back", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
    ]
    }
  }
};
</script>
