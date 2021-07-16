<template>
  <div>
    <baner @clicked="lol" />
    <b-row
      no-gutters
      ref="about"
      class="text-justify pt-5"
      align-v="center"
      align-h="end"
    >
      <b-col
        cols="5"
        class="h4 pl-5 py-5 ml-5 pr-2 text-center"
        style="background: rgba(10, 72, 130, 0.1)"
      >
        <p>
          Zawsze chciałeś wziąć udział w Game Jamie? A może napisać swoją własną
          aplikację? U nas zobaczysz, że programowanie nie jest żmudnym
          klepaniem kodu, ale także wyjątkowym przeżyciem, które będziesz
          wspominać przez długi czas.
        </p>
        <p>
          Celem naszego programu jest stworzenie społeczności w branży IT,
          nawiązywanie nowych współpracy z firmami, promowanie naszej uczelni
          oraz przede wszystkim nabór przyszłych członków SKNI „KOD” i ich
          szerokorozumiany rozwój.
        </p>
        <b-button
          pill
          size="lg"
          class="mt-2 p-3"
          style="background: rgb(10, 72, 130)"
          >Dowiedz się wjęcej</b-button
        >
      </b-col>
      <b-col cols="6" class="text-center">
        <b-img
          fluid
          center
          :src="require('@/assets/code.jpg')"
          style="
            filter:drop-shadow(8px 8px 10px gray);
          "
          class="pr-5 py-5"
        ></b-img>
      </b-col>
    </b-row>

    <b-row
      no-gutters
      align-v="center"
      class="text-center text-white py-5 my-2"
      :style="
        'background:linear-gradient(90deg,rgb(255, 255, 255, 0) 0%,rgba(10, 72, 130, 0.6) 0%), url(' +
        require('../assets/section_bg.png') +
        ');background-repeat:no-repeat;background-size:cover'
      "
    >
      <b-col cols="6" style="border-right: 1px solid white">
        <p class="p-5 h1">Co zyskujesz?</p>
        <ul style="list-style-type: none" class="h3">
          <li>Pomoc mentorów</li>
          <li>Pierwsze profesjonalne doświadczenie w branży IT</li>
          <li>Nowe znajomości</li>
          <li>Patronat największych firm na rynku</li>
        </ul>
      </b-col>
      <b-col cols="6">
        <p class="p-5 h1">Wystarczy że:</p>
        <ul style="list-style-type: none" class="h3">
          <li>Jesteś uczniem szkoły średniej</li>
          <li>Posiadasz podstawowe umiejętności informatyczne</li>
          <li>Potrafisz zachować kulturę osobistą</li>
          <li>Przejdziesz proces rekrutacyjny</li>
        </ul>
      </b-col>
    </b-row>
    <b-row no-gutters class="pt-5 m-5 text-center" align-h="center">
      <b-col cols="auto">
        <b-icon
          icon="pencil-square"
          class="display-4"
          style="color: rgb(10, 72, 130)"
        ></b-icon>
        <p class="h5">1. Wypełnij formularz</p>
      </b-col>
      <b-icon
        icon="arrow-right"
        class="h3 mx-4"
        style="color: rgb(10, 72, 130)"
      ></b-icon>
      <b-col cols="auto">
        <b-icon
          icon="alarm"
          class="display-4"
          style="color: rgb(10, 72, 130)"
        ></b-icon>
        <p class="h5">2. Czekaj na przyjęcie</p>
      </b-col>
      <b-icon
        icon="arrow-right"
        class="h3 mx-4"
        style="color: rgb(10, 72, 130)"
      ></b-icon>
      <b-col cols="auto">
        <b-icon
          icon="person-plus"
          class="display-4"
          style="color: rgb(10, 72, 130)"
        ></b-icon>
        <p class="h5">3. Dołącz do grupy tematycznej</p>
      </b-col>
      <b-icon
        icon="arrow-right"
        class="h3 mx-4"
        style="color: rgb(10, 72, 130)"
      ></b-icon>
      <b-col cols="auto">
        <b-icon
          icon="graph-up"
          style="color: rgb(10, 72, 130)"
          class="display-4"
        ></b-icon>
        <p class="h5">4. Rozwijaj swoje umiejętności</p>
      </b-col>
    </b-row>
    <b-row no-gutters align-h="center" class="pb-5">
      <b-button size="lg" pill style="background: rgb(10, 72, 130)"
        >Aplikuj</b-button
      >
    </b-row>
    <b-row no-gutters class="p-5" align-h="center">
      <b-col cols="12"><p class="h1 text-center">Partnerzy</p></b-col
      ><b-carousel controls background="white" style="max-width: 1000px">
        <b-carousel-slide>
          <template v-slot:img>
            <b-card-group>
              <b-card
                style="max-width: 250px; border: 0"
                class="mx-5"
                :img-src="require('@/assets/logo_color.png')"
                overlay
              ></b-card>
              <b-card
                style="max-width: 250px; border: 0"
                class="mx-5"
                :img-src="require('@/assets/logo_color.png')"
                overlay
              ></b-card>
              <b-card
                style="max-width: 250px; border: 0"
                class="mx-5"
                :img-src="require('@/assets/logo_color.png')"
                overlay
              ></b-card>
            </b-card-group>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <b-card-group>
              <b-card
                style="max-width: 250px; border: 0"
                class="mx-5"
                :img-src="require('@/assets/logo_color.png')"
                overlay
              ></b-card>
              <b-card
                style="max-width: 250px; border: 0"
                class="mx-5"
                :img-src="require('@/assets/logo_color.png')"
                overlay
              ></b-card>
              <b-card
                style="max-width: 250px; border: 0"
                class="mx-5"
                :img-src="require('@/assets/logo_color.png')"
                overlay
              ></b-card>
            </b-card-group>
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <b-card-group>
              <b-card
                style="max-width: 250px; border: 0"
                class="mx-5"
                :img-src="require('@/assets/logo_color.png')"
                overlay
              ></b-card>
              <b-card
                style="max-width: 250px; border: 0"
                class="mx-5"
                :img-src="require('@/assets/logo_color.png')"
                overlay
              ></b-card>
              <b-card
                style="max-width: 250px; border: 0"
                class="mx-5"
                :img-src="require('@/assets/logo_color.png')"
                overlay
              ></b-card>
            </b-card-group>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    lol() {
      var element = this.$refs["about"];
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
.carousel-control-next-icon {
  margin-right: -100px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.carousel-control-prev-icon {
  margin-left: -100px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}
</style>