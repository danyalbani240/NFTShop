<template>
  <div style="background-color: #f3f3f3">
    <TheHeader />
    <div class="pl-5 w-full flex items-center navigation">
      <p>Home</p>
      <p>Shop</p>
      <p>Picture</p>
    </div>
    <TheDetail />
    <TheRelated />
    <div class="flex justify-between flex-wrap " style="padding: 67px 30px">
      <img class="flex-1" src="../assets/images/52.svg" alt="" /><img class="flex-1"
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
  validate({params,query}) {
    
    return params.id == 1
  },
}
</script>

<style></style>
