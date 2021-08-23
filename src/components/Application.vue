<template>
  <section>
    <v-row no-gutters class="mx-5" align="center" justify="center">
      <p class="h1 pt-3">Dołącz do nas!</p>
    </v-row>
    <v-row
      no-gutters
      class="pt-5 mx-5 text-center"
      align="center"
      justify="center"
    >
      <div v-for="(icon, i) in icons" :key="i">
        <v-col cols="auto">
          <v-icon size="100" color="primary">{{ icon.name }}</v-icon>
          <h5>{{ icon.description }}</h5>
        </v-col>
        <v-col>
          <v-icon v-if="i !== 3" class="mx-2" color="primary" size="36"
            >mdi-arrow-right</v-icon
          >
        </v-col>
      </div>
    </v-row>

    <v-row no-gutters justify="center" class="mt-5">
      <b-button
        active
        pill
        size="lg"
        class="mt-2 px-3 pt-3"
        style="background: rgb(10, 72, 130); cursor: pointer"
        href="https://kod.prz.edu.pl/joinjunior/"
        >Aplikuj!</b-button
      >
    </v-row>
  </section>
</template>

<script>
export default {
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
          description: "3. Dołącz do grupy tematycznej",
        },
        {
          name: "mdi-finance",
          description: "4. Rozwijaj swoje umiejętności",
        },
      ],
    };
  },
};
</script>
