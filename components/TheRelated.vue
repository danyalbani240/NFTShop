<template>
  <div class="related bg-white">
    <div>
      <BaseHeader>Related Products</BaseHeader>
    </div>
    <div style="margin-top:60px;" class="flex justify-between items-center">
      <div class="prev cursor-pointer flex items-center justify-center">
        <img src="../assets/images/prev.svg" alt="" />
      </div>
      <div class="popular-items-container flex flex-wrap justify-between">
        <BaseCard />
        <BaseCard />
        <BaseCard />
        <BaseCard />
      </div>
      <div class="next cursor-pointer flex items-center justify-center">
        <img src="../assets/images/next.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.popular-items-container {
  width: 1112px;
}
.prev,
.next {
  width: 36px;
  height: 58px;
  background-color: #fbfafa;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
