<template>
  <section>
    <v-row no-gutters class="mx-5 mb-5 align-center justify-center">
      <h1 class="pt-3">Dołącz do nas!</h1>
    </v-row>
    <counter class="my-10" />
    <div class="mx-10">
      <div
        class="accent rounded-pill p-5"
        style="max-width: 1500px; margin:auto"
      >
        <v-row no-gutters class=" text-center" justify="center">
          <div
            v-for="(icon, i) in icons"
            :key="i"
            justify="center"
            style="display: inline-block"
          >
            <div style="display: inline-block; vertical-align: middle">
              <v-icon size="6.5vw" color="primary">{{ icon.name }}</v-icon>
              <h5>{{ icon.description }}</h5>
            </div>
            <div style="display: inline-block; vertical-align: middle">
              <v-icon v-if="i !== 3" class="mx-2" color="primary" size="3.8vw"
                >mdi-arrow-right</v-icon
              >
              <div style="clear:left"></div>
            </div>
          </div>
        </v-row>

        <v-row no-gutters justify="center" class="mt-8">
          <b-button
            active
            pill
            class="mt-0 p-3 mb-5"
            target="_blank"
            style="background: rgb(10, 72, 130); cursor: pointer; font-size: 1.65rem"
            href="https://kod.prz.edu.pl/joinjunior/"
            >Aplikuj!</b-button
          >
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import Counter from './Counter.vue'

export default {
  components: {
    Counter
  },
  data() {
    return {
      icons: [
        {
          name: "mdi-pencil-box-outline",
          description: "1. Wypełnij formularz",
        },
        { name: "mdi-alarm", description: "2. Czekaj na przyjęcie" },
        {
          name: "mdi-account-plus-outline",
          description: "3. Dołącz do grupy",
        },
        {
          name: "mdi-finance",
          description: "4. Rozwijaj umiejętności",
        },
      ],
    };
  },
};
</script>
