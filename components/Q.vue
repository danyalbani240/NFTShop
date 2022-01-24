<template>
  <div class="Q">
    <div style="margin-left: 31px">
      <BaseHeader> Your Questions </BaseHeader>
    </div>
    <hooper :settings="hooperSettings">
      <slide
        ><div class="flex justify-evenly">
          <div class="flex items-center px-10 flex-1">
            <div class="flex-col flex-1 justify-between flex">
              <div class="flex">
                <img
                  class="mr-10"
                  src="../assets/images/questionmark.svg"
                  alt=""
                />
                <p class="text-2xl">How do I sell an NFT?</p>
              </div>
              <div class="flex items-start mt-8 lg:items-center">
                <img class="mr-10" src="../assets/images/support.svg" alt="" />
                <p class="text-2xl w-full q-describe">
                  To list an NFT for sale, our team will first of all approve
                  the content to make sure it’s appropriate for listing. This
                  process usually takes 4-8 hours. Upon successful approval,
                  your NFT will list immediately on the Marketplace as either an
                  auction or fixed price sale, according to your preference.
                  Alternatively, you can also choose to list your NFT at a fixed
                  time (with a minimum of 12 hours after approval).
                </p>
              </div>
            </div>
          </div>

          <img
            class="Q-image hidden xl:block"
            src="../assets/images/Q.svg"
            alt=""
          /></div
      ></slide>
      <slide
        ><div class="flex justify-evenly">
          <div class="flex items-center px-10 flex-1">
            <div class="flex-col flex-1 justify-between flex">
              <div class="flex">
                <img
                  class="mr-10"
                  src="../assets/images/questionmark.svg"
                  alt=""
                />
                <p class="text-2xl">How do I sell an NFT?</p>
              </div>
              <div class="flex items-start mt-8 lg:items-center">
                <img class="mr-10" src="../assets/images/support.svg" alt="" />
                <p class="text-2xl w-full q-describe">
                  To list an NFT for sale, our team will first of all approve
                  the content to make sure it’s appropriate for listing. This
                  process usually takes 4-8 hours. Upon successful approval,
                  your NFT will list immediately on the Marketplace as either an
                  auction or fixed price sale, according to your preference.
                  Alternatively, you can also choose to list your NFT at a fixed
                  time (with a minimum of 12 hours after approval).
                </p>
              </div>
            </div>
          </div>

          <img
            class="Q-image hidden xl:block"
            src="../assets/images/Q.svg"
            alt=""
          /></div
      ></slide>
      <hooper-navigation slot="hooper-addons">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          slot="hooper-prev"
        >
          <path
            d="M16.7912 12.2519L9.47605 5.22146L2.4107 12.5029L0.163278 10.3277L9.39904 0.809391L18.9614 9.99955L16.7912 12.2519Z"
            fill="black"
            fill-opacity="0.38"
          />
          <path
            d="M9.40048 7.87646L17.5415 15.4692H1.25944L9.40048 7.87646Z"
            fill="#220970"
          />
        </svg>
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          slot="hooper-next"
        >
          <path
            d="M2.16363 5.63069L9.32929 12.5175L16.2502 5.38481L18.4517 7.51562L9.40473 16.8394L0.0378528 7.83704L2.16363 5.63069Z"
            fill="black"
            fill-opacity="0.38"
          />
          <path
            d="M9.40332 9.91675L1.42867 2.47925L17.378 2.47925L9.40332 9.91675Z"
            fill="#220970"
          />
        </svg>
      </hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  data() {
    return {
      hooperSettings: {
        vertical: false,
        itemsToShow: 1,
        centerMode: true,
        breakpoints: {
          801: {
            centerMode: false,
            itemsToShow: 1,
            vertical: true,
          },
        },
      },
    }
  },
}
</script>

<style>
.hooper {
  min-height: 300px;
  margin-top: 60px;
}
.hooper-prev{
  top: 2rem !important;
}
.hooper-next{
  bottom: 9rem !important;
}
.hooper-prev,
.hooper-next {
  left: 0 !important;
}
.hooper-pagination {
  display: none;
  bottom: -25px;
}
@media (max-width: 800px) {
  .hooper {
    min-height: 400px;
  }
  .hooper-navigation {
    display: none;
  }
  .hooper-pagination {
    display: flex;
    bottom: 0;
  }
}
@media (max-width: 640px) {
  .hooper {
    min-height: 600px;
  }
  .hooper-navigation {
    display: none;
  }
  .hooper-pagination {
    display: flex;
    bottom: 0;
  }
}
</style>
