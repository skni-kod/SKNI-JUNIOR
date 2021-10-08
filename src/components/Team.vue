<template>
  <section>
    <v-card class="mb-5" flat tile>
      <h1
        class="d-flex justify-center font-weight-medium"
        style="background-color: rgb(247,247,247)"
      >
        Mentorzy
      </h1>
    </v-card>

    <v-row class="mx-1">
      <v-col
        xl="4"
        xs="5"
        v-for="(mentor, i) in mentors"
        :key="i"
        style="margin-left:auto; margin-right:auto; padding: 20px 1.8vw;"
      >
        <v-card
          height="100%"
          class="info col-12 outline rounded-lg"
          style="min-width: 28vw;"
        >
          <div data-aos="zoom-in">
            <div class="d-flex justify-center mb-3">
              <img
                :src="mentor.jpg"
                class="img-fluid"
                style="width: 15vw; min-width: 100px; max-width: 250px; height: auto;"
              />
            </div>
            <div>
              <h4>{{ mentor.name }}</h4>
              <h5 class="green--text mb-0 p-0">{{ mentor.position }}</h5>
              <div class="my-0 ml-0 d-flex justify-center">
                <v-col cols="6" class="d-flex justify-center p-1 pl-0 mb-2">
                  <v-btn
                    icon
                    color="black"
                    @click="open(mentor.git)"
                    :disabled="!mentor.active"
                    class="text-decoration-none"
                  >
                    <v-icon size="34">mdi-github</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="#0e76a8"
                    @click="open(mentor.link)"
                    class="text-decoration-none"
                    :disabled="!mentor.active2"
                  >
                    <v-icon size="32">mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn
                    v-if="mentor.name === 'Igor Moryto'"
                    icon
                    color="black"
                    @click="open(mentor.art)"
                    class="text-decoration-none"
                  >
                    <v-icon size="30" class="m-0 p-0">mdi-nintendo-game-boy</v-icon>
                  </v-btn>
                </v-col>
              </div>
              <p
                class="text-justify"
                style="hyphens: auto; overflow-wrap: break-word; word-break: break-word;"
                v-html="mentor.description"
              ></p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mentors: [
        {
          name: "Oskar Tyniec",
          position: "Project Leader",
          jpg: require("@/assets/mentorzy/Oskar.jpg"),
          description:
            'Pasjonat metodyk zwinnych, certyfikowany Scrum Master, koordynator projektów oraz osoba odpowiedzialna za PR Studenckiego Koła Naukowego Informatyków "KOD".',
          git: "https://github.com/Rakso12",
          link: "https://www.linkedin.com/in/oskartyniec/",
          active: true,
          active2: true,
        },
        {
          name: "Jakub Szatkowski",
          position: "Software Engineer",
          jpg: require("@/assets/mentorzy/Jakub.jpg"),
          description:
            "Absolwent Informatyki na Politechnice Rzeszowkiej oraz ZS3 w Sanoku. Posiada bardzo szerokie zainteresowania, jednak najważniejszy kierunek to programowanie niskopoziomowe. W wolnym czasie miłośnik dobrej kuchni i sportu. Stack technologiczny to:<br>C, Assembler x86, Python, Java.",
          git: "https://github.com/SzateX",
          link: "https://www.linkedin.com/in/jakub-szatkowski-21ba501b6/",
          active: true,
          active2: true,
        },
        {
          name: "Patrycja Cyrul",
          position: "Copywriter",
          jpg: require("@/assets/mentorzy/Patrycja.jpg"),
          description:
            "Absolwentka Zarządzania Projektami na Politechnice Rzeszowskiej, miłośniczka content marketingu oraz pisania. Prowadząca fanpage SKNI KOD.",
          git: "",
          link: "https://www.linkedin.com/in/patrycja-cyrul",
          active: false,
          active2: true,
        },
        {
          name: "Adrian Malec",
          position: "Frontend Developer",
          jpg: require("@/assets/mentorzy/Adrian.jpg"),
          description:
            "Absolwent Regionalnego Centrum Edukacji Zawodowej w Biłgoraju, udziela się w projektach związanych z web developingiem oraz game devem, lubi dobrą fabułę zarówno w grach jak i książkach.",
          git: "https://github.com/f10k1",
          link: "https://www.linkedin.com/in/adrian-malec-a252321a1/",
          active: true,
          active2: true,
        },
        {
          name: "Kacper Maciołek",
          position: "Game Developer",
          jpg: require("@/assets/mentorzy/Kacper.jpg"),
          description:
            'Absolwent Zespołu Szkół Technicznych w Mielcu. Lider zespołu tworzącego grę Roguelike w SKNI "KOD". W wolnym czasie zacięty gracz Football Managera.',
          git: "https://github.com/Kacperacy",
          link: "https://www.linkedin.com/in/kacper-macio%C5%82ek-577564209/",
          active: true,
          active2: true,
        },
        {
          name: "Igor Moryto",
          position: "3D Artist",
          jpg: require("@/assets/mentorzy/Igor.jpg"),
          description:
            "Absolwent Zespołu Szkół Technicznych w Mielcu. Pasjonat tworzenia gier komputerowych, w sczególności od strony graficznej i game designu. Regularny uczestnik game jamów. <br> Jedna z jego gier powstałych na Game Jamie: <a href='https://ezykill.itch.io/flapybat' target='_blank'>Flapy Bat</a>",
          git: "",
          link: "",
          art: "https://www.artstation.com/ezykill",
          active: false,
          active2: false,
        },
        {
          name: "Maciek Pietrasz",
          position: "Pixel Art Designer",
          jpg: require("@/assets/mentorzy/Maciek.jpg"),
          description:
            'Współtwórca projektu i osoba odpowiedzialna za tworzenia grafiki w projekcie "Roguelike". Miłośnik książek o tematyce fantasy. Planujacy swoje działania realista. Ambitny i wytrwały w wyznaczonych celach.',
          git: "https://github.com/Komosabe",
          link: "/",
          active: true,
          active2: false,
        },
        {
          name: "Mateusz Fesz",
          position: "Low-Level Programmer",
          jpg: require("@/assets/mentorzy/Mateusz.jpg"),
          description:
            "Absolwent ZSTiO w Krośnie. Główny kierunek zainteresowań to programowanie niskopoziomowe. Członek m.in. zespołu rozwijającego system operacyjny MicrOS, a także pasjonat języka programowania RUST. W wolnym czasie zajmuje się Arduino i szkoli swoje techniki kulinarne.",
          git: "https://github.com/MatiF100",
          link: "",
          active: true,
          active2: false,
        },
      ],
    };
  },
  methods: {
    open(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
