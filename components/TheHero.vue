<template>
  <div class="hero justify-between sm:bg-cover  bg-contain">
    <nav class="flex justify-between  ">
      <div class="logo w-6 bg-contain ml-5 mt-2.5"></div>
      <div class="burger mt-2.5  mr-4 text-white bg-transparent relative z-20 lg:hidden" @click="toggleNav">
        <div class="burger-line h-1 w-10 bg-white my-1.5"></div>
        <div class="burger-line h-1 w-10 bg-white my-1.5"></div>
        <div class="burger-line h-1 w-10 bg-white my-1.5"></div>
      </div>
      <div  :class="{'hidden': !isNavOpen,'block': isNavOpen,}" class=" lg:hidden w-screen bg-black fixed left-0 z-10 top-0 h-screen">

      </div>
      <div class="links hidden lg:flex justify-between text-white">
        <p class="cursor-pointer">Home</p>
        <p class="cursor-pointer">Nft Shop</p>
        <p class="cursor-pointer">About</p>
        <p class="cursor-pointer">Contact Us</p>
      </div>
      <div class="buttons hidden lg:flex justify-between">
        <div class="h-full cart cursor-pointer"></div>
        <div class="divider"></div>
        <div class="profile h-full w-6"></div>
      </div>
    </nav>
    <div class="hero-comment ml-2 inline-flex flex-col items-center justify-center mt-10 lg:mt-32">
      <h2 class="sm:text-3xl lg:text-4xl text-lg font-bold">Turn Clicks Into</h2>
      <img class="nft-head"  src="../assets/images/NFText.svg" alt="">
      <p class="hidden md:block">Must explain to you how all this mistaken idea of pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings.</p>
      <div class="register mt-5 ml-0 sm:ml-auto text-white flex justify-center items-center">
        Register
      </div>
    </div>
    <div class="lg:flex flex-row-reverse hidden ">
      <the-search-box class=" lg:-mt-14 -mt-32" />
    </div>
  </div>
</template>

<script>
import TheSearchBox from './TheSearchBox.vue'
export default {
  components: { TheSearchBox },
  data(){
    return{
      isNavOpen: false,
    }
  },
  methods:{
    toggleNav(){
      this.isNavOpen = !this.isNavOpen;
    }
  }
}
</script>

