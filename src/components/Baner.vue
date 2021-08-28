<template>
  <div class="main">
    <b-row
      no-gutters
      class="d-flex flex-column"
      style="height: 100%"
      v-if="!smallScreen"
    >
      <div class="half d-flex align-items-center text-center" ref="parallax">
        <p>SKNI</p>
      </div>
      <div class="half d-flex align-items-center">
        <p>JUNIOR</p>
        <p class="logo">
          STWORZONE PRZEZ
          <b-img
            fluid
            alt="logoSKNI"
            @click="gotoSKNI"
            :src="require('@/assets/logaSKNI-KOD/logo_color.png')"
            style="max-width: 285px; cursor: pointer;"
          ></b-img>
        </p>
        <b-icon
          icon="chevron-down"
          @click="emit"
          style="
            cursor: pointer;
            color: rgb(10, 72, 130);
            position: absolute;
            bottom: 10px;
          "
          class="display-4"
        ></b-icon>
      </div>
    </b-row>
    <b-row
      v-else
      class="vh-100 text-center alternativeBaner"
      ref="parallax"
      no-gutters
      align-v="center"
    >
      <b-col cols="12">
        <p style="font-size: 140px;">SKNI JUNIOR</p>
        <p class="h2">
          STWORZONE PRZEZ
          <b-img
            fluid
            alt="logoSKNI"
            @click="gotoSKNI"
            :src="require('@/assets/logaSKNI-KOD/logo_white.png')"
            style="max-width: 285px; cursor: pointer;"
          ></b-img>
        </p>
        <b-icon
          icon="chevron-down"
          @click="emit"
          style="cursor: pointer; color: white"
          class="display-4 pt-5 mt-5"
        ></b-icon>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "baner",
  data() {
    return { smallScreen: false };
  },
  methods: {
    gotoSKNI() {
      window.open("https://kod.prz.edu.pl/#/", '_blank');
    },
    emit() {
      this.$emit("clicked", "about");
    },
    responsive() {
      if (window.outerWidth < 1025) {
        this.$data.smallScreen = true;
      } else {
        this.$data.smallScreen = false;
      }
    },
  },
  mounted() {
    this.responsive();
    window.addEventListener("resize", this.responsive);
    document.addEventListener("mousemove", parallax);
    const elem = this.$refs.parallax;
    // Magic happens here
    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth3 = `${50 - (_mouseX - _w) * 0.04}% ${
        50 - (_mouseY - _h) * 0.04
      }%`;
      let x = `${_depth3}`;
      elem.style.backgroundPosition = x;
    }
  },
};
</script>
<style scoped>
div.main {
  height: 100vh;
  position: relative;
}
div.half {
  font-size: 100px;
}

div.half:nth-child(1) {
  background: linear-gradient(
      90deg,
      rgb(255, 255, 255, 0) 0%,
      rgba(10, 72, 130, 0.8) 0%
    ),
    url("../assets/background_image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 60%;
  clip-path: polygon(0 0, 83% 0, 66% 100%, 0 100%);
  background-position: right;
  background-blend-mode: hard-light;
  overflow: hidden;
  color: rgb(10, 72, 130);
}
div.half:nth-child(1) p {
  position: relative;
  width: 100%;
  overflow: hidden;
}
div.half:nth-child(1) p::before {
  content: "";
  height: 100%;
  position: absolute;
  left: 0;
  box-shadow: inset 0 0 500px rgba(255, 255, 255, 0.9);
  width: 80%;
  z-index: -1;
}

div.half:nth-child(2) {
  overflow: hidden;
  position: absolute;
  left: 50%;
  height: 100%;
  display: flex;
  width: 60%;
}

div.half:nth-child(2) p {
  position: relative;
  width: 100%;
  display: flex;
  margin-left: 5vw;
  overflow: hidden;
  color: rgba(10, 72, 130, 0.9);
}
div.half:nth-child(2) p::before {
  content: "";
  height: 100%;
  position: absolute;
  background: rgb(10, 72, 130);
  width: 100%;
  z-index: -1;
}

div.half:nth-child(2) p.logo {
  position: absolute;
  bottom: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  color: rgb(10, 72, 130);
  font-size: 15px;
  display: flex;
  justify-items: center;
  right: 20px;
  padding: 0;
}

.alternativeBaner {
  background: linear-gradient(
      90deg,
      rgb(255, 255, 255, 0) 0%,
      rgba(10, 72, 130, 0.8) 0%
    ),
    url("../assets/background_image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
</style>
