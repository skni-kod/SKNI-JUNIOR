<template>
  <div class="container">
    <h2 id="headline">Do rozpoczęcia rekrutacji pozostało:</h2>
    <div id="countdown">
      <ul>
        <li>
          <span>{{ dispD }}</span
          >{{ postfixD }}
        </li>
        <li>
          <span>{{ dispH }}</span
          >{{ postfixH }}
        </li>
        <li>
          <span>{{ dispM }}</span
          >{{ postfixM }}
        </li>
        <li>
          <span>{{ dispS }}</span
          >{{ postfixS }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  color: #333;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-weight: normal;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
}

li {
  display: inline-block;
  font-size: 1.2em;
  list-style-type: none;
  padding: 0.7em;
  text-transform: uppercase;
}

li span {
  display: block;
  font-size: 3rem;
}
</style>

<script>
export default {
  data() {
    return {
      dispD: 0,
      dispH: 0,
      dispM: 0,
      dispS: 0,
    };
  },
  computed: {
    _sec() {
      return 1000;
    },
    _min() {
      return this._sec * 60;
    },
    _hours() {
      return this._min * 60;
    },
    _days() {
      return this._hours * 24;
    },
    postfixD() {
      return this.dispD !== "01" ? "Dni" : "Dzień";
    },
    postfixH() {
      let x = parseInt(this.dispH);
      if (x == 0 || (x > 4 && x < 22)) {
        return "godzin";
      } else if (x == 1) {
        return "godzina";
      } else {
        return "godziny";
      }
    },
    postfixM() {
      let x = this.dispM;
      if (x == 1) {
        return "minuta";
      } else if (x % 10 >= 2 && x % 10 <= 4 && Math.floor(x / 10) != 1) {
        return "minuty";
      } else {
        return "minut";
      }
    },
    postfixS() {
      let x = this.dispS;
      if (x == 1) {
        return "sekunda";
      } else if (x % 10 >= 2 && x % 10 <= 4 && Math.floor(x / 10) != 1) {
        return "sekundy";
      } else {
        return "sekund";
      }
    },
  },
  mounted() {
    this.showReamaining();
  },
  methods: {
    showReamaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2021, 8, 13, 12, 0, 0, 0);

        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }
        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._min);
        const seconds = Math.floor((distance % this._min) / this._sec);

        this.dispM = minutes < 10 ? "0" + minutes : minutes;
        this.dispS = seconds < 10 ? "0" + seconds : seconds;
        this.dispH = hours < 10 ? "0" + hours : hours;
        this.dispD = days < 10 ? "0" + days : days;
      }, 1000);
    },
  },
};
</script>
