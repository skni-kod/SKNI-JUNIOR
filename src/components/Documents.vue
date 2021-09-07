<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="text-center">Pliki do pobrania</h1>
    </v-col>
    <v-col class="mb-16 pb-4 mx-7" sm="9">
      <ul style="list-style-type: none; padding: 0;">
        <v-hover v-for="(file, i) in files" :key="i" v-slot="{ hover }"
          ><li class="accent mb-2 text-center mx-auto" style="max-width: 500px">
            <a :href="file.link" download>
              <h5
                class="py-3 px-2 black--text"
                style="text-decoration: none;"
                :class="{'primary white--text': hover}"
              >
                {{ file.text }}
              </h5>
            </a>
          </li>
        </v-hover>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      files: [
        {
          text: "Regulamin",
          link: "/junior/documents/regulamin.pdf",
        },
        {
          text: "Zgoda Rodziców",
          link: "/junior/documents/zgoda_rodzicow.pdf",
        },
      ],
    };
  },
};
</script>
