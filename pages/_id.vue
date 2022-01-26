<template>
  <div style="background-color: #f3f3f3">
    <TheHeader />
    <div class="pl-5 w-full flex items-center navigation">
      <p class="flex items-center">
        Home
        <img
          class="ml-1.5 mr-1 flex-1"
          src="../assets/images/navifationArrow.svg"
          alt=""
        />
      </p>
      <p class="flex items-center">
        Shop
        <img
          class="ml-1.5 mr-1 flex-1"
          src="../assets/images/navifationArrow.svg"
          alt=""
        />
      </p>
      <p style="color: #1d1355">Picture</p>
    </div>
    <TheDetail />
    <TheRelated />
    <div class="flex justify-between flex-wrap" style="padding: 67px 30px">
      <img class="flex-1 m-2.5" src="../assets/images/52.svg" alt="" /><img
        class="flex-1 m-2.5"
        src="../assets/images/52.svg"
        alt=""
      />
    </div>
    <TheRela style="margin-bottom: 198px" />
    <TheFooter />
  </div>
</template>

<script>
export default {
  validate({ params, query }) {
    return params.id == 1
  },
}
</script>

<style></style>
