<template>
  <section>
    <v-row no-gutters class="pt-5 mx-5" align="center" justify="center">
      <p class="h1 pt-3">Dołącz do nas!</p>
    </v-row>
    <v-row
      no-gutters
      class="pt-5 mx-5 text-center"
      align="center"
      justify="center"
      v-for="(icon, i) in icons"
      :key="i"
    >
      <v-col cols="auto">
        <v-icon size="100" color="primary">{{ icon.name }}</v-icon>
        <p class="h5">{{ icon.description }}</p>
      </v-col>
      <v-col cols="auto">
        <v-icon v-if="i !== 3" class="h3 mx-4" color="primary" size="28"
          >mdi-arrow-right</v-icon
        >
      </v-col>
    </v-row>

    <v-row no-gutters justify="center" class="pb-5 mb-5">
      <v-btn
        dark
        class="rounded-pill text-subtitle-2"
        color="primary"
        >Aplikuj</v-btn
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
