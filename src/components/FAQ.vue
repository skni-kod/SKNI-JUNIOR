<template>
  <v-row justify="center">
    <v-col cols="7">
      <v-expansion-panels focusable accordion class="mb-4 mx-6">
        <v-expansion-panel
          v-for="(question, i) in questions"
          :key="i"
          class="primary white--text my-2 pb-0 rounded-lg"
          style="max-width: 900px"
        >
          <v-expansion-panel-header style="font-size: 18.5px" class="py-0 my-0">{{
            question.name
          }}</v-expansion-panel-header>
          <v-expansion-panel-content
            v-html="question.response"
            class="white black--text py-3 px-5"
          >
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          name: "Skąd nazwa SKNI JUNIOR?",
          response:
            'SKNI - ponieważ jest to projekt Studenckiego Koła Naukowego Informatyków "KOD" (w skrócie SKNI KOD), <br /> JUNIOR - tu poruszamy dwie kwestie, wiek oraz poziom doświadczenia w branży IT sugerujący przygotowanie i zapoznanie się ze światem IT pozwalające na zdobycie umiejętności i obycia z zadaniami spotykanymi w przyszłej pracy.',
        },
        {
          name: "Czy uczestnictwo jest płatne?",
          response:
            "NIE, jedyną ceną jaką płacisz za udział to zaangażowanie, którego wymagamy od każdego z uczestników.",
        },
        {
          name: "Czy muszę coś umieć aby wziąć udział w projekcie?",
          response:
            "Twoje umiejętności będą weryfikowane podczas wypełniania ankiety oraz w późniejszych rozmowach z naszymi mentorami i organizatorami. Nie patrzymy wyłącznie na umiejętności programistyczne, liczą się dla nas również umiejętności miękkie oraz twoje zainteresowania. Podsumowując, KAŻDY ma szansę na dostanie się do projektu.",
        },
        {
          name: "Kim są mentorzy?",
          response:
            "Są to studenci kierunków informatycznych oraz pracownicy dużych renomowanych firm z branży IT",
        },
        {
          name: "Jakie umiejętności zyskuje jako uczestnik projektu?",
          response:
            "Uczestnicy mogą nabyć umiejętności takie jak programowanie w wielu językach, umiejętności miękkie, zapoznanie z metodykami zarządzania projektami, doświadczeni w prowadzeniu social mediów jak również zarządzanie grupą czy pracy w grupie i wiele wiele innych.",
        },
      ],
    };
  },
};
</script>