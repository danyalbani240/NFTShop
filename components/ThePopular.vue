<template>
  <div class="popular-items flex items-center justify-between">
    <div
      id="button-prev-relacionados"
      class="prev cursor-pointer flex items-center justify-center"
    >
      <img src="../assets/images/prev.svg" alt="" />
    </div>
    <div class="popular-items-container flex flex-wrap justify-between">
      <div v-swiper:mySwiper="options">
        <div class="swiper-wrapper flex justify-between">
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="500"
          />
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="800"
          />
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="1300"
          /><BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="500"
          />
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="800"
          />
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="1300"
          />

          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="500"
          />
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="800"
          />
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="1000"
          />
          <BaseCard
            class="swiper-slide"
            data-aos="flip-left"
            data-aos-duration="1300"
          />
        </div>
      </div>
    </div>
    <div
      id="button-next-relacionados"
      class="next cursor-pointer flex items-center justify-center"
    >
      <img src="../assets/images/next.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '#button-next-relacionados',
          prevEl: '#button-prev-relacionados',
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>

<style>
.swiper-slide {
  height: auto !important;
}
</style>
