<template>
  <div class="flex flex-col head-nav text-white">
      <div style="width:484px; margin-top:11px;" class="flex mx-auto justify-between text-white">
          <p>Home</p>
          <p>Nft Shop</p>
          <p>About</p>
          <p>Contact Us</p>
      </div>
      <div style="padding-bottom:22px;" class="flex flex-1 justify-between">
          <div class="flex ml-8 items-center">
              <img src="../assets/images/NFTLogo.svg" alt="">
              <p class="ml-6 text-4xl">logo name</p>
          </div>
          
              <TheSearchBox class=" self-center" />
          
          <div class="self-end mr-9">
              <div class="buttons flex justify-between"><div class="h-full cart cursor-pointer"></div> <div class="divider"></div> <div class="profile h-full w-6"></div></div>
          </div>
      </div>    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>