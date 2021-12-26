<template>
  <div class="hero">
    <nav class="flex">
      <div class="logo"></div>
      <div class="links flex justify-between text-white">
        <p class="cursor-pointer">Home</p>
        <p class="cursor-pointer">Nft Shop</p>
        <p class="cursor-pointer">About</p>
        <p class="cursor-pointer">Contact Us</p>
      </div>
      <div class="buttons flex justify-between">
        <div class="h-full cart cursor-pointer"></div>
        <div class="divider"></div>
        <div class="profile h-full w-6"></div>
      </div>
    </nav>
    <div class="hero-comment mt-32">
      <h2 class="text-4xl font-bold">Turn Clicks Into</h2>
      <img  src="../assets/images/NFText.svg" alt="">
      <p >Must explain to you how all this mistaken idea of pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings.</p>
      <div class="register text-white flex justify-center items-center">
        Register
      </div>
    </div>
    <the-search-box />
  </div>
</template>

<script>
import TheSearchBox from './TheSearchBox.vue'
export default {
  components: { TheSearchBox },

}
</script>

