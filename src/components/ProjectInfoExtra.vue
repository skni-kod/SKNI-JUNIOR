<template>
  <v-row
    no-gutters
    class="justify-center text-center text-white py-12 my-12 mr-12"
  >
    <v-col cols="12" v-for="(t, i) in text" :key="i">
      <p class="pt-5 mb-2 h1">{{ t.question }}</p>
      <ul style="list-style-type: none" class="h3 pb-10">
        <li v-for="(answer, id) in t.answers" :key="id" class="mb-1">
          {{ answer }}
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      text: [
        {
          question: "Wystarczy że:",
          answers: [
            "Jesteś uczniem szkoły średniej",
            "Posiadasz podstawowe umiejętności informatyczne",
            "Potrafisz zachować kulturę osobistą",
            "Przejdziesz proces rekrutacyjny",
          ],
        },
        {
          question: "Co zyskujesz?",
          answers: [
            "Pomoc mentorów",
            "Pierwsze profesjonalne doświadczenie w branży IT",
            "Nowe znajomości",
            "Patronat największych firm na rynku",
          ],
        },
      ],
    };
  },
};
</script>
