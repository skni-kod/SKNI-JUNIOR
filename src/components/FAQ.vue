<template>
  <b-row no-gutters align-h="center" class="pb-5">
    <b-col
      cols="10"
      v-for="(question, index) in questions"
      :key="question.name"
      class="pb-2 d-flex justify-center"
    >
      <div class="accordion" role="tablist" style="width: 700px">
        <v-card no-body class="mb-2" style="border:0">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <v-btn
              block
              v-b-toggle="String(index)"
              style="background:rgb(10, 72, 130)"
              class="p-2 rounded-pill white--text text-sm-h5"
              >{{ question.name }}</v-btn
            >
          </b-card-header>
          <b-collapse
            :id="String(index)"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text v-html="question.response">{{
                question.response
              }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </v-card>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          name: "Skąd nazwa SKNI JUNIOR?",
          response:
            '-SKNI - ponieważ jest to projekt Studenckiego Koła Naukowego Informatyków "KOD" (w skrócie SKNI KOD) <br /> -JUNIOR - tu poruszamy dwie kwestie, wiek oraz poziom doświadczenia w branży IT sugerujący przygotowanie i zapoznanie się ze światem IT pozwalające na zdobycie umiejętności i obycia z zadaniami spotykanymi w przyszłej pracy.',
        },
        {
          name: "Czy uczestnictwo jest płatne?",
          response:
            "-NIE, jedyną ceną jaką płacisz za udział to zaangażowanie, którego wymagamy od każdego z uczestników.",
        },
        {
          name: "Czy muszę coś umieć aby wziąć udział w projekcie?",
          response:
            "-Twoje umiejętności będą weryfikowane podczas wypełniania ankiety oraz w późniejszych rozmowach z naszymi mentorami i organizatorami. Nie patrzymy wyłącznie na umiejętności programistyczne, liczą się dla nas również umiejętności miękkie oraz twoje zainteresowania. Podsumowując, KAŻDY ma szansę na dostanie się do projektu.",
        },
        {
          name: "Kim są mentorzy?",
          response:
            "- Są to studenci kierunków informatycznych oraz pracownicy dużych renomowanych firm z branży IT",
        },
        {
          name: "Jakie umiejętności zyskuje jako uczestnik projektu?",
          response:
            "- Uczestnicy mogą nabyć umiejętności takie jak programowanie w wielu językach, umiejętności miękkie, zapoznanie z metodykami zarządzania projektami, doświadczeni w prowadzeniu social mediów jak również zarządzanie grupą czy pracy w grupie i wiele wiele innych.",
        },
      ],
    };
  },
};
</script>
