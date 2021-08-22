<template>
  <b-row no-gutters class="px-5 py-2 mx-5" align-h="center">
    <b-col cols="12"><p class="h1 text-center mt-5 pb-5">Partnerzy</p></b-col
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
</template>

<script>
export default {}
</script>