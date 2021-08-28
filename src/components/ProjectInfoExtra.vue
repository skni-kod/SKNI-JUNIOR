<template>
  <div
    :style="
      'background:linear-gradient(90deg,rgb(255, 255, 255, 0) 0%,rgba(10, 72, 130, 0.6) 0%), url(' +
        require('../assets/section_bg.png') +
        ');background-repeat:no-repeat;background-size:cover;'
    "
  >
    <v-row
      no-gutters
      class="justify-center text-center text-white py-12 mx-auto"
    >
      <v-col cols="auto" v-for="(t, i) in text" :key="i">
        <p class="pt-5 mb-9 h1">
          {{ t.question }}
        </p>
        <ul style="list-style-type: none" class="h3 pl-0 mb-12 mx-5">
          <li v-for="(answer, id) in t.answers" :key="id" class="mb-4 justify-center">
            {{ answer }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </div>
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
            "Nowe znajomości",
            "Pierwsze profesjonalne doświadczenie w branży IT",
            "Patronat największych firm na rynku",
          ],
        },
      ],
    };
  },
};
</script>
