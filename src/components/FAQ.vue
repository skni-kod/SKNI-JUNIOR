<template>
  <v-row justify="center">
    <v-col cols="10">
      <h1 class="text-center">Najczęściej zadawane pytania</h1>
    </v-col>
      <v-col sm="11" md="9" lg="8" xl="6" class="mx-2">
      <v-expansion-panels focusable accordion>
        <v-expansion-panel
          v-for="(question, i) in questions"
          :key="i"
          class="primary white--text my-2 rounded-lg text-justify"
          style="max-width: 700px;"
        >
          <v-expansion-panel-header
            style="font-size: 18.5px"
            class="my-0"
            >{{ question.name }}</v-expansion-panel-header
          >
          <v-expansion-panel-content
            class="white black--text pt-4"
            style="hyphens: auto; overflow-wrap: break-word; word-break: break-word; align: center"
          >
          <p class="h6 mb-0" v-html="question.response"></p>
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
            "Uczestnicy mogą nabyć umiejętności takie jak programowanie w wielu językach, umiejętności miękkie, zapoznanie z metodykami zarządzania projektami, doświadczenie w prowadzeniu social mediów jak również zarządzanie grupą czy pracy w grupie i wiele wiele innych.",
        },
      ],
    };
  },
};
</script>
