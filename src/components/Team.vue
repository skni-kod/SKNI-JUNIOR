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
        v-for="(mentor, i) in mentors"
        :key="i"
        style="max-width: 700px; margin-left:auto; margin-right:auto;"
      >
        <v-card class="info col-12 outline rounded-lg">
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
                    class="text-decoration-none"
                  >
                    <v-icon size="34">mdi-github</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="#0e76a8"
                    @click="open(mentor.link)"
                    class="text-decoration-none"
                    :disabled="!mentor.active"
                    style="margin-right: 0.8vw"
                  >
                    <v-icon size="34">mdi-linkedin</v-icon>
                  </v-btn>
                </v-col>
              </div>
              <p>
                {{ mentor.description }}
              </p>
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
          position: "CEO",
          jpg: require("@/assets/mentorzy/Oskar.jpg"),
          description:
            'Pasjonat metodyk zwinnych, certyfikowany Scrum Master, koordynator projektów oraz osoba odpowiedzialna za PR Studenckiego Koła Naukowego Informatyków "KOD".',
          git: "https://github.com/Rakso12",
          link: "https://www.linkedin.com/in/oskartyniec/",
          active: true,
        },
        {
          name: "Patrycja Cyrul",
          position: "Pixel Art Designer",
          jpg: require("@/assets/mentorzy/Patrycja.jpg"),
          description:
            'Absolwentka Zarządzania projektami, miłośniczka content marketingu oraz pisania. Prowadząca fanpage SKNI KOD.',
          git: "",
          link: "/",
          active: true,
        },
        {
          name: "Mateusz Fesz",
          position: "Low-Level Programmer",
          jpg: require("@/assets/mentorzy/Mateusz.jpg"),
          description:
            "Absolwent Zespołu Szkół Technicznych i Ogólnokształcących w Krośnie, interesuje się głównie programowaniem niskopoziomowym. Członek m.in zespołu rozwijającego system operacyjny MicrOS, a także pasjonat języka programowania RUST. W wolnym czasie bawi się arduino i szkoli swoje techniki kulinarne.",
          git: "https://github.com/MatiF100",
          link: "",
          active: false,
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
        },
        {
          name: "Adrian Malec",
          position: "Frontend Developer",
          jpg: require("@/assets/mentorzy/Adrian.jpg"),
          description: "Absolwent Regionalnego Centrum Edukacji Zawodowej w Biłgoraju, udziela się w projektach związanych z web developingiem oraz game devem, lubi dobrą fabułę zarówno w grach jak i książkach.",
          git: "https://github.com/f10k1",
          link: " https://www.linkedin.com/in/adrian-malec-a252321a1/",
          active: true,
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
