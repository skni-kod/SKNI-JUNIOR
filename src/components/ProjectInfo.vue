<template>
  <section>
    <b-row no-gutters class="text-justify" align-v="center" align-h="end">
      <b-col cols="5" class="accent h4 pl-5 py-5 pr-2 text-center">
        <p>{{ text_skni }}</p>
      </b-col>
      <b-col cols="6" class="text-center">
        <b-img
          fluid
          center
          align="center"
          :src="require('@/assets/code.jpg')"
          style="filter: drop-shadow(8px 8px 10px gray)"
          class="pr-5 py-5"
        ></b-img>
      </b-col>
    </b-row>
    <b-row no-gutters class="text-justify pt-5" align-v="center" align-h="end">
      <b-button
        active
        pill
        size="lg"
        class="mt-2 p-3 mb-8"
        style="background: rgb(10, 72, 130); cursor: pointer"
        href="https://kod.prz.edu.pl/joinjunior/"
        >Aplikuj już dziś!</b-button
      >
    </b-row>
    <project-info-extra></project-info-extra>
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
      text_app: [
        "Dzięki szerokiej ofercie uczestnik może wybrać dziedzinę w jakiej chcę się rozwijać - m.in. programowanie, tworzenie grafiki czy prowadzenie social mediów jak również marketing i zarządzanie projektami. Ponadto członek SKNI Junior może również brać udział w szkoleniach organizowanych przez koło naukowe, czy konferencjach i hackathonach.",
        "Jeśli chcesz w przyszłości zostać programistą, copywriterem a nawet kierownikiem projektów, nie czekaj &#x1F609;",
      ],
    };
  },
};
</script>
