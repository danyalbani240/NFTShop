<template>
  <div class="flex base-input-container justify-between items-center">
    <p class="flex justify-center items-center flex-1">
      <slot></slot>
    </p>
    <input type="text" :class="{'minimal': minimal, 'w-517':w517}" :placeholder="placeholder" class="base-input h-full w-563" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    minimal:{
      type:Boolean,
      default:false,
    }, w517:{
      type:Boolean,
      default:false,
    }
  },
}
</script>

<style lang="scss" scoped>
.base-input-container {
  background-color: rgba(244, 244, 244, 0.97);
  min-height: 50px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.32);
  border-radius: 12px;
  overflow-x: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.32);
  p {
    color: #1d1355;
    font-size: 18px;
    // margin-left: 36px;
  }
  input {
    border-radius: 22.5px 12px 12px 22.5px;
    border: 1px solid #c91efa;
    min-height: 50px;
    padding-left: 24px;
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
  }
  .w-563 {
    width: 563px;
  }
  .minimal{
    width: 166px;

  }
  .w-517{
    width: 517px;
  }
}
</style>
