<template>
  <div>
    <b-row no-gutters class="d-flex flex-column" style="height: 100%">
      <div
        class="half d-flex justify-content-center align-items-center"
        ref="parallax"
      >
        <p>SKNI</p>
      </div>
      <div class="half d-flex justify-content-center align-items-center">
        <p>JUNIOR</p>
        <p
          style="
            position: absolute;
            bottom: 20%;
            display: flex;
            justify-content: center;
            right: 0;
            overflow: hidden;
            align-items: center;
            cursor: pointer;
            background: white;
            font-size: 20px;
            font-weight: bold;
            width: 60%;
            color: rgb(10, 72, 130);
          "
        >
          STWORZONE PRZEZ
          <b-img
            fluid
            alt="lol"
            @click="gotoSKNI"
            :src="require('@/assets/logo_color.png')"
            style="max-width: 300px"
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
  </div>
</template>

<script>
export default {
  name: "baner",
  methods: {
    gotoSKNI() {
      document.location.href = "https://kod.prz.edu.pl/#/";
    },
    emit() {
      this.$emit("clicked",'about');
    },
  },
  mounted() {
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
div {
  height: 100vh;
  position: relative;
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
  font-size: 150px;
  color: rgb(10, 72, 130);
}
div.half:nth-child(1) p {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
div.half:nth-child(1) p::before {
  content: "";
  height: 100%;
  position: absolute;
  box-shadow: inset 0 0 500px rgba(255, 255, 255, 0.9);
  width: 100%;
  z-index: -1;
}

div.half:nth-child(2) {
  overflow: hidden;
  position: absolute;
  left: 40%;
  height: 100%;
  display: flex;
  width: 60%;
  font-size: 150px;
}

div.half:nth-child(2) p {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: white;
}
div.half:nth-child(2) p::before {
  content: "";
  height: 100%;
  position: absolute;
  background: rgb(10, 72, 130);
  width: 100%;
  z-index: -1;
}
</style>