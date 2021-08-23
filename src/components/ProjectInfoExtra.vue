<template>
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
</template>

<script>
export default {}
</script>