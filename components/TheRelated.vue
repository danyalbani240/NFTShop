<template>
  <div class="related pt-10 bg-white">
    <div class="ml-8">
      <BaseHeader>Related Products</BaseHeader>
    </div>
    <div style="margin-top: 60px" class="flex justify-between items-center">
      <div
        id="button-prev-relacionados"
        class="prev mx-auto cursor-pointer flex items-center justify-center"
      >
        <img src="../assets/images/prev.svg" alt="" />
      </div>
      <div
        class="popular-items-container overflow-x-hidden flex flex-wrap justify-between"
      >
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
        class="next mx-auto cursor-pointer flex items-center justify-center"
      >
        <img src="../assets/images/next.svg" alt="" />
      </div>
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
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
      },
    }
  },
}
</script>

<style>
.popular-items-container {
  width: 1112px;
}
.prev,
.next {
  min-width: 36px;
  height: 58px;
  background-color: #fbfafa;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
