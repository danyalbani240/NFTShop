<template>
  <div
    class="hero justify-between sm:bg-contain lg:bg-contain md:bg-cover xl:bg-cover bg-cover"
  >
    <nav class="flex justify-between">
      <div
        class="logo w-6 lg:w-20 lg:h-20 lg:mt-5 bg-contain ml-5 mt-2.5"
      ></div>
      <div
        class="burger mt-2.5 mr-4 text-white bg-transparent lg:hidden"
        @click="toggleNav"
      >
        <div class="burger-line h-1 w-10 bg-white my-1.5"></div>
        <div class="burger-line h-1 w-10 bg-white my-1.5"></div>
        <div class="burger-line h-1 w-10 bg-white my-1.5"></div>
      </div>
      <TheMobileNavbar @closeNav="isNavOpen = false" :isOpen="isNavOpen" />
      <div class="links mt-11 hidden lg:flex justify-between text-white">
        <p class="cursor-pointer">Home</p>
        <p class="cursor-pointer">Nft Shop</p>
        <p class="cursor-pointer">About</p>
        <p class="cursor-pointer">Contact Us</p>
      </div>
      <div class="buttons hidden lg:flex justify-between">
        <div class="h-full cart transition-all cursor-pointer">
          <img src="../assets/images/cart.svg" alt="" />
        </div>
        <div class="divider"></div>
        <div class="profile cursor-pointer transition-all h-full">
          <img src="../assets/images/person.svg" alt="" />
        </div>
      </div>
    </nav>
    <div class="flex justify-between mt-8 sm:mt-14 2xl:mt-40 md:mt-20 lg:mt-28">
      <div
        class="hero-comment ml-2 inline-flex flex-col items-center justify-center"
      >
        <h2 class="sm:text-2xl lg:text-4xl text-lg font-bold">
          Turn Clicks Into
        </h2>
        <img class="nft-head" src="../assets/images/NFText.svg" alt="" />
        <p class="hidden sm:block">
          Must explain to you how all this mistaken idea of pleasure and
          praising pain was born and will give you a complete account of the
          system, and expound the actual teachings.
        </p>
        <div
          class="register cursor-pointer mt-5 ml-0 sm:mx-auto text-white flex justify-center items-center"
        >
          Register
        </div>
      </div>
      <div class="hero-right sm:w md:w-9/12 lg:w-6/12 w-7/12">
        <div class="flex flex-row-reverse">
          <img
            class="md:w-8/12 lg:w-full"
            src="../assets/images/hero-object.svg"
            alt=""
          />
        </div>
        <div class="lg:flex flex-row-reverse hidden">
          <the-search-box
            style="width: 560px"
            class="lg:mt-4 xl:mt-16 xl:mr-8 -mt-32"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheSearchBox from './TheSearchBox.vue'
export default {
  components: { TheSearchBox },
  data() {
    return {
      isNavOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
  },
}
</script>
