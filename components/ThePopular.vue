<template>
  <div class="popular-items flex items-center justify-between ">
      <div class="prev cursor-pointer flex items-center justify-center">
        <img src="../assets/images/prev.svg" alt="">
      </div>
      <div class="popular-items-container flex flex-wrap justify-between">
          <BaseCard />
          <BaseCard />
          <BaseCard />
          <BaseCard />
      </div>
      <div class="next cursor-pointer flex items-center justify-center">
        <img src="../assets/images/next.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>