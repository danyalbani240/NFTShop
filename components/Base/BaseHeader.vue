<template>
  <div class="flex">
      <p>
          <slot> </slot>
      </p>
      <div class="flex-1 lev"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
p{
    color: rgba(0, 0, 0,0.7);
    font-size: 24px;
    margin-right: 36px;
}
.lev{
    height: 1px;
    background-color: rgba(0, 0, 0, 0.16);
}
</style>