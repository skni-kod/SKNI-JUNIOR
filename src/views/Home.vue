<template>
  <div>
    <baner />
    <b-row
      no-gutters
      id='about'
      class="text-justify d-flex align-items-center"
      style="background: rgb(10, 72, 130); color: white"
    >
      <b-col cols="6" class="h4 p-5">
        <p>
          Zawsze chciałeś wziąć udział w Game Jamie? A może napisać swoją własną
          aplikację? U nas zobaczysz, że programowanie nie jest żmudnym
          klepaniem kodu, ale także wyjątkowym przeżyciem, które będziesz
          wspominać przez długi czas.
        </p>
        <p>
          Jako uczestnik “SKNI Junior” zostaniesz przydzielony do projektu
          dobranego pod twoje preferencje, a także poznasz nowe osoby o
          podobnych zainteresowaniach. Nie musisz się martwić, jeżeli czegoś nie
          będziesz potrafić. Nasza inicjatywa ma na celu Twój rozwój, dlatego
          będziemy organizować liczne szkolenia, nie tylko z branży IT. Ponadto
          wybraliśmy spośród nas mentorów, którzy będą prowadzić Was przez cały
          czas trwania programu.
        </p>
      </b-col>
      <b-col cols="6" class="text-center">
        <b-img
          fluid
          center
          :src="require('@/assets/code.jpg')"
          class="p-5"
          style="clip-path: inset(5% 20% 15% 10%)"
        ></b-img>
      </b-col>
    </b-row>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="120"
      viewBox="0.2 0 178 30"
      preserveAspectRatio="none"
    >
      <g transform="translate(-14.514284,-115.36352)">
        <path
          style="fill: #4074b5"
          d="m 14.74107,115.49581 h 178.02679 v 30.61607 h -29.10417 v -12.47321 h -10.58333 v -8.31548 h -13.98512 v 13.98512 h -20.41072 v -13.98512 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 121.54343 H 51.40476 v 15.875 H 29.860117 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
        />
        <path
          style="fill: rgb(10, 72, 130)"
          d="M 14.741071,112.54762 H 192.76786 v 30.61607 H 163.66369 V 130.69048 H 153.08036 V 122.375 h -13.98512 v 13.98512 H 118.68452 V 122.375 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 118.59524 H 51.40476 v 15.875 H 29.860118 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
        />
      </g>
    </svg>
    <b-row no-gutters align-v="center" class="text-center">
      <b-col cols="6">
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
    <b-row no-gutters class="p-5 m-5 text-center h2" align-h="center">
      <b-col cols="12" class="my-3">1. Wypełnij formularz </b-col
      ><b-icon icon="chevron-double-down"></b-icon>
      <b-col cols="12" class="my-3">2. Czekaj na przyjęcie</b-col>
      <b-icon icon="chevron-double-down"></b-icon>
      <b-col cols="12" class="my-3">3. Dołącz do grupy tematycznej </b-col>
      <b-icon icon="chevron-double-down"></b-icon>
      <b-col cols="12" class="my-3"
        >4. Stwórz wspólny projekt oraz bierz udział w wydarzeniach
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Home",
};
