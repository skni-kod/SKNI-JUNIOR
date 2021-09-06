<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="text-center">Pliki do pobrania</h1>
    </v-col>
    <v-col class="mb-16 pb-4 mx-7" sm="9">
      <ul style="list-style-type: none; padding: 0;">
        <li
          v-for="(file, i) in files"
          :key="i"
          class="accent mb-2 text-center mx-auto"
          style="max-width: 500px"
        >
          <h5 class="py-3 px-2">{{ file.text }}</h5>
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      files: [
        { text: "Regulamin.pdf", link: "" },
        { text: "Zgoda_rodziców.pdf", link: "/" },
      ],
    };
  },
};
</script>
