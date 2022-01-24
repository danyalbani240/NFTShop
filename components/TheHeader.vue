<template>
  <div class="flex flex-col head-nav text-white">
    <div
      style="width: 484px; margin-top: 11px"
      class="mx-auto justify-between hidden lg:flex text-white"
    >
      <p>Home</p>
      <p>Nft Shop</p>
      <p>About</p>
      <p>Contact Us</p>
    </div>
    <div
      style="padding-bottom: 22px"
      class="flex flex-1 items-center lg:items-baseline justify-between"
    >
      <div class="flex ml-8 items-center">
        <img src="../assets/images/NFTLogo.svg" alt="" />
        <p class="ml-6 text-4xl hidden lg:block">logo name</p>
      </div>

      <TheSearchBox class="self-center lg:flex hidden w-5/12" />

      <div class="self-end mr-9 lg:block hidden">
        <div class="buttons flex justify-between">
          <div class="h-full cart cursor-pointer"></div>
          <div class="divider"></div>
          <div class="profile cursor-pointer h-full w-6"></div>
        </div>
      </div>
      <!-- mobile -->
      <div
        class="mt-2.5 mr-4 text-white bg-transparent lg:hidden"
        @click="toggleNav"
      >
        <div class="burger-line h-1 w-10 bg-white my-1.5"></div>
        <div class="burger-line h-1 w-10 bg-white my-1.5"></div>
        <div class="burger-line h-1 w-10 bg-white my-1.5"></div>
      </div>
      <TheMobileNavbar @closeNav="isNav = false" v-if="isNav" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNav: false,
    }
  },
  methods: {
    toggleNav() {
      this.isNav = !this.isNav
    },
  },
}
</script>

<style></style>
