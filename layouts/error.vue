<template>
  <div class="not-found">
    <!-- <TheHero />
    <TheSections />
    <TheSort /> -->
    <nuxt-link to="/">
      <div class="not-found flex justify-center flex-col">
        <img
          class="max-w-2xl mx-auto mt-32"
          src="../assets/images/not-found.svg"
          alt=""
        />
        <p class="mt-14 text-8xl text-center">Not Found</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
