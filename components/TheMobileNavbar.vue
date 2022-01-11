<template>
  <div
    class="lg:hidden w-screen fixed px-5 py-5 left-0 mobile-nav z-10 transition-all top-0 h-screen"
  >
    <div class="flex justify-between w-full">
      <div @click="closeNav" class="closer">
        <img class="w-10" src="../assets/images/closer.svg" alt="" />
      </div>
      <div class="flex w-4/12 sm:w-2/12 mr-5 justify-between">
        <img  src="../assets/images/cart.svg" alt="" />
        <img  src="../assets/images/person.svg" alt="" />
      </div>
    </div>
    <the-search-box class="w-11/12 mx-auto mt-10" />
    <div
      class="flex flex-col justify-between h-28 mt-6 text-white items-center"
    >
      <div class="link-item text-sm">Nft Shop</div>
      <div class="link-item text-sm active">About</div>
      <div class="link-item text-sm">Contact Us</div>
    </div>
    <div
      style="left: 50%; transform: translateX(-50%)"
      class="absolute bottom-6 inset-x-auto text-white mx-auto text-lg"
    >
      logo name
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav() {
      this.$emit('closeNav')
    },
  },
}
</script>

<style></style>
