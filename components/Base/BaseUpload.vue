<template>
  <div
    @click="$emit('click', $event)"
    class="upload flex flex-col items-center cursor-pointer justify-center transition-all"
  >
    <img src="../../assets/images/upload.svg" alt="" />
    <p>upload</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.upload {
  border: 1px solid #c91efa;
  box-shadow: none;
  border-radius: 10px;
  width: 128px;
  height: 117px;
  p {
    color: #c91efa52;
  }
}
.upload:hover {
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.1);
}
</style>
