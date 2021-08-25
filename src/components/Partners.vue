<template>
  <v-card class="info ma-2" flat>
    <v-col cols="auto"><p class="h1 text-center mt-6">Partnerzy</p></v-col>
    <v-carousel
      :cycle="cycle"
      :interval="cycleTime"
      height="auto"
      hide-delimiters
      show-arrows-on-hover
    >
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-carousel-item
          v-for="(i, index) in Math.ceil(items.length / 4)"
          :key="index"
        >
          <v-row
            no-gutters
            justify="center"
            align="center"
            class="px-4 fill-height"
          >
            <v-col
              :cols="3"
              v-for="(j, jindex) in items.length > 3 ? 4 : items.length"
              :key="jindex"
            >
              <v-img
                :src="items[i * 4 + j - 5].src"
                :alt="items[i * 4 + j - 5].alt"
                class="mx-auto"
                style="cursor: pointer; max-width: 220px"
              />
            </v-col>
          </v-row>
        </v-carousel-item>
      </div>
      <div v-else>
        <v-carousel-item
          v-for="(item, index) in items"
          :key="index"
          style="cursor: pointer"
        >
          <v-row align="center" justify="center" class="px-4 fill-height">
            <v-col cols="auto">
              <v-img :src="item.src" :alt="item.alt" />
            </v-col>
          </v-row>
        </v-carousel-item>
      </div>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      cycle: true,
      cycleTime: 5000,
      items: [
        {
          src: require("@/assets/sponsorzy/ideo.png"),
          alt: "IDEO",
          text: "IDEO",
        },
        {
          src: require("@/assets/sponsorzy/prz.jpg"),
          alt: "PRZ",
          text: "PRZ",
        },
        {
          src: require("@/assets/sponsorzy/fabrity.png"),
          alt: "FABRITY",
          text: "FABRITY",
        },
      ],
    };
  },
};
</script>
