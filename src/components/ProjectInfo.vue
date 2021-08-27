<template>
  <section>
    <div v-if="$vuetify.breakpoint.xlOnly">
      <v-row no-gutters class="align-center justify-center text-center" style="margin: 0px 100px">
        <v-col cols="4" class="mx-16">
          <v-img
            fluid
            :src="require('@/assets/coding.jpg')"
            style="width: 45vw; max-height: 500px; filter: drop-shadow(3px 3px 3px BurlyWood)"
            class="d-flex justify-center rounded py-5 my-2"
          ></v-img>
        </v-col>
        <v-col cols="4" class="accent h5 px-4 pt-5 pb-2 mb-0 mx-16 text-center rounded-xl">
          <p>{{ text_skni }}</p>
          <p>{{ text_app }}</p>
        </v-col>
      </v-row>
    </div>
    <div v-else-if="$vuetify.breakpoint.mdAndUp" style="margin: 20px auto">
      <v-row class="text-justify mx-10 align-center">
        <v-col
          cols="auto"
          class="accent h5 px-4 pt-5 pb-2 mb-3 text-center rounded-xl"
        >
          <p>{{ text_skni }}</p>
        </v-col>
        <v-col cols="6">
          <v-img
            fluid
            :src="require('@/assets/coding.jpg')"
            style="width: 42vw; max-height: 400px; max-width: 600px; margin: auto; filter: drop-shadow(3px 3px 3px BurlyWood)"
            class="d-flex justify-center rounded py-5 my-4"
          ></v-img>
        </v-col>
        <v-col class="accent h5 px-4 pt-5 pb-2 my-6 mx-7 text-center rounded-xl">
          <p>{{ text_app }}</p>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row no-gutters class="text-justify mx-10 align-center">
        <v-col
          cols="auto"
          class="accent h5 px-4 pt-5 pb-2 mb-5 text-center rounded-xl"
        >
          <p>{{ text_skni }}</p>
        </v-col>
        <v-col cols="auto" class="accent h5 px-4 pt-5 pb-2 my-5 text-center rounded-xl">
          <p>{{ text_app }}</p>
        </v-col>
        <v-col cols="auto">
          <v-img
            fluid
            :src="require('@/assets/coding.jpg')"
            style="max-height: 450px; filter: drop-shadow(3px 3px 3px BurlyWood)"
            class="d-flex justify-center rounded py-5 my-5"
          ></v-img>
        </v-col>
      </v-row>
    </div>
    <v-row no-gutters class="text-justify pt-5 align-center justify-center">
      <v-col
        class="accent h5 mx-10 px-4 pt-6 pb-3 mb-16 text-center rounded-xl"
        style="max-width: 1200px"
      >
        <p v-html="text_end"></p>
        <b-button
          active
          pill
          size="lg"
          class="mt-0 p-3 mb-5"
          style="background: rgb(10, 72, 130); cursor: pointer"
          href="https://kod.prz.edu.pl/joinjunior/"
          target="_blank"
          >Aplikuj już dziś!</b-button
        >
      </v-col>
    </v-row>
    <project-info-extra />
  </section>
</template>

<script>
import ProjectInfoExtra from "../components/ProjectInfoExtra.vue";

export default {
  components: { ProjectInfoExtra },
  data() {
    return {
      text_skni:
        "SKNI JUNIOR jest skierowany dla uczniów szkół średnich zainteresowanych szeroko pojętym IT. Po rekrutacji uczestnicy zostaną podzieleni na mniejsze zespoły z indywidualnym mentorem. Następnie zespołowi zostanie przydzielone konkretne zadanie, podczas którego uczestnicy będą zdobywać wiedzę, jak i rozwijać umiejętność współpracy. Nad prawidłowym przebiegiem tego procesu będzie czuwał mentor. Dzięki takiemu modelowi pracy członkowie projektu będą przygotowani do następnych bardziej zaawansowanych projektów w branży IT.",
      text_app:
        "Dzięki szerokiej ofercie uczestnik może wybrać dziedzinę w jakiej chce się rozwijać - m.in. programowanie, tworzenie grafiki czy prowadzenie social mediów jak również marketing i zarządzanie projektami. Ponadto członek SKNI Junior może również brać udział w szkoleniach organizowanych przez koło naukowe, czy konferencjach i hackathonach.",
      text_end:
        "Jeśli chcesz w przyszłości zostać programistą, copywriterem a nawet kierownikiem projektów, nie czekaj &#x1F609;",
    };
  },
};
</script>
