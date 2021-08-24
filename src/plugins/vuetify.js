import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#104882",
        secondary: "#B3E5FC",
        accent: '#e1e7ea',
        info: "#F8F8F8"
      },
    },
  },
});
