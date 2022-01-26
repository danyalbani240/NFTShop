<template>
  <div class="sections-container">
    <div
      class="sections md:flex hidden justify-between mx-auto items-center mt-4"
    >
      <div class="flex flex-col items-center">
        <img class="transition-all" src="../assets/images/film.svg" alt="" />
        <p class="mt-2.5">Film</p>
      </div>
      <div class="flex flex-col items-center">
        <img class="transition-all" src="../assets/images/music.svg" alt="" />
        <p class="mt-2.5">Music</p>
      </div>
      <div class="flex flex-col items-center">
        <img class="transition-all" src="../assets/images/picture.svg" alt="" />
        <p class="mt-2.5">Picture</p>
      </div>
      <div class="flex flex-col items-center">
        <img
          class="transition-all"
          src="../assets/images/animation.svg"
          alt=""
        />
        <p class="mt-2.5">Animation</p>
      </div>
      <div class="flex flex-col items-center">
        <img class="transition-all" src="../assets/images/paint.svg" alt="" />
        <p class="mt-2.5">Painting</p>
      </div>
    </div>
    <div class="md:hidden mt-4" v-swiper:mySwiper="options">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="flex flex-col items-center">
            <img
              class="transition-all"
              src="../assets/images/film.svg"
              alt=""
            />
            <p class="mt-2.5">Film</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="flex flex-col items-center">
            <img
              class="transition-all"
              src="../assets/images/music.svg"
              alt=""
            />
            <p class="mt-2.5">Music</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="flex flex-col items-center">
            <img
              class="transition-all"
              src="../assets/images/picture.svg"
              alt=""
            />
            <p class="mt-2.5">Picture</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="flex flex-col items-center">
            <img
              class="transition-all"
              src="../assets/images/animation.svg"
              alt=""
            />
            <p class="mt-2.5">Animation</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="flex flex-col items-center">
            <img
              class="transition-all"
              src="../assets/images/paint.svg"
              alt=""
            />
            <p class="mt-2.5">Painting</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 3,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>

<style></style>
