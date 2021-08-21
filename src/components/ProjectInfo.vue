<template>
<section>
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
        aplikację? U nas zobaczysz, że programowanie nie jest żmudnym klepaniem
        kodu, ale także wyjątkowym przeżyciem, które będziesz wspominać przez
        długi czas.
      </p>
      <p>
        Celem naszego programu jest stworzenie społeczności w branży IT,
        nawiązywanie nowych współpracy z firmami, promowanie naszej uczelni oraz
        przede wszystkim nabór przyszłych członków SKNI „KOD” i ich
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
        style="filter: drop-shadow(8px 8px 10px gray)"
        class="pr-5 py-5"
      ></b-img>
    </b-col>
  </b-row>
  <b-row
    no-gutters
    align-v="center"
    class="text-center text-white py-5 my-5"
    :style="
      'background:linear-gradient(90deg,rgb(255, 255, 255, 0) 0%,rgba(10, 72, 130, 0.6) 0%), url(' +
        require('../assets/section_bg.png') +
        ');background-repeat:no-repeat;background-size:cover'
    "
  >
    <b-col cols="6" style="border-right: 1px solid white">
      <p class="pt-5 pb-2 h1">Co zyskujesz?</p>
      <ul style="list-style-type: none" class="h3 pb-5">
        <li>Pomoc mentorów</li>
        <li>Pierwsze profesjonalne doświadczenie w branży IT</li>
        <li>Nowe znajomości</li>
        <li>Patronat największych firm na rynku</li>
      </ul>
    </b-col>
    <b-col cols="6">
      <p class="pt-5 pb-2 h1">Wystarczy że:</p>
      <ul style="list-style-type: none" class="h3 pb-5">
        <li>Jesteś uczniem szkoły średniej</li>
        <li>Posiadasz podstawowe umiejętności informatyczne</li>
        <li>Potrafisz zachować kulturę osobistą</li>
        <li>Przejdziesz proces rekrutacyjny</li>
      </ul>
    </b-col>
  </b-row>
  </section>
</template>

<script>
export default {};
</script>
