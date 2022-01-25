<template>
  <div class="eagle-container bg-white w-full md:w-11/12  mx-auto">
    <h1 class="font-extrabold">The Philippine Eagle</h1>
    <div class="upload-token">
      <BaseHeader>Upload Token</BaseHeader>
      <div class="flex justify-center md:justify-between flex-wrap">
        <div  class="flex-1 " style="min-width:284px">
          <div class="flex">
            <img
              class="mr-1.5"
              src="../assets/images/check-circle.svg"
              alt=""
            />
            <p>File size up to 100 MB</p>
          </div>
          <div class="flex">
            <img
              class="mr-1.5"
              src="../assets/images/check-circle.svg"
              alt=""
            />
            <p>photo, video, audio or 3D model</p>
          </div>
          <div class="flex">
            <img
              class="mr-1.5"
              src="../assets/images/check-circle.svg"
              alt=""
            />
            <p>Acceptable formats JPG, PNG, MP</p>
          </div>
        </div>
        <BaseUpload class="mx-auto" />
      </div>
    </div>
    <div class="upload-currency mt-20">
      <BaseHeader>Upload Currency password preview </BaseHeader>
      <div
        class="flex justify-center flex-wrap md:justify-between items-center mt-14"
      >
        <p>
          To display your currency password, you need a photo to preview. Upload
          your desired file
        </p>
        <BaseUpload class="mt-10 md:mt-0" />
      </div>
    </div>
    <div class="further-information mt-14">
      <BaseHeader>Further Information</BaseHeader>
      <BaseInput> Token Name </BaseInput>
      <BaseInput> Website Link </BaseInput>
      <BaseInput> Email Address </BaseInput>
      <BaseInput> Description </BaseInput>
      <div class="flex adder items-center justify-evenly mt-14 flex-wrap">
        <div  class="flex flex-wrap-reverse md:flex-1">
          <img class="sm:mr-2 mx-auto cursor-pointer" src="../assets/images/add.svg" alt="" />
          <BaseInput  class="md:flex-1 mx-auto manufactor sm:mr-6"> Manufacturer Group </BaseInput>
        </div>
        <BaseInput class="mt-4 sm:mt-0 mr-10" style="width:323px" :minimal="true"> Responsibility </BaseInput>
      </div>
      <div class="flex soc-media flex-wrap justify-evenly mt-20">
        <BaseInput class=" my-5 md:my-0" :minimal="true">
          <img class="absolute" src="../assets/images/linkedin.svg" alt="" />
        </BaseInput>
        <BaseInput class=" my-5 md:my-0" :minimal="true">
          <img class="absolute" src="../assets/images/whatsapp.svg" alt="" />
        </BaseInput>
        <BaseInput class=" my-5 md:my-0" :minimal="true">
          <img class="absolute" src="../assets/images/twitter.svg" alt="" />
        </BaseInput>
        <BaseInput class=" my-5 md:my-0 mr-12" :minimal="true">
          <img class="absolute" src="../assets/images/instagram.svg" alt="" />
        </BaseInput>
      </div>
      <BaseInput> Direct access link </BaseInput>
      <BaseInput> Initial price </BaseInput>
      <BaseInput> Supply number </BaseInput>
      <button
        class="create-token-btn flex justify-center transition-all items-center mx-auto text-2xl"
      >
        create token
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.upload-token {
  .upload{
    margin-right: 148px;
  }
}
@media (max-width:768px){
  .upload-token {
  .upload{
    margin: 0;
  }
}
}
.create-token-btn {
  background: #c91efa;
  border-radius: 19px;
  width: 271px;
  height: 66px;
  color: white;
  margin-top: 130px;
}
.create-token-btn:hover{
  box-shadow: 0px 0px 15px #c91efa;

}
.eagle-container {
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
  padding-top: 48px;
  padding-bottom: 212px;
  padding-left: 48px;
  margin-top: 53px;
  margin-bottom: 114px;
  h1 {
    color: #1d1355;
    text-align: center;
    font-size: 36px;
    line-height: 54px;
  }
  .upload-token {
    margin-top: 90px;
    > div {
      margin-top: 65px;
      
      > div {
        margin-left: 21px;
        div {
          margin: 13.5px 0;
          p {
            color: #999999;
          }
        }
      }
    }
  }
  .upload-currency {
    > div {
      > p {
        color: rgba(0, 0, 0, 0.4);
        width: 431px;
        margin-left: 21px;
      }
    }
    > :last-child {
      margin-right: 148px;
    }
  }
  .further-information {
    > .base-input-container:nth-child(2),
    > .base-input-container:nth-child(3),
    > .base-input-container:nth-child(5) {
      width: 766px;
      margin-top: 73px;
    }

    > .base-input-container:nth-child(4) {
      width: 766px;
      margin-top: 73px;
      height: 196px;
    }
    > .base-input-container:nth-child(8) {
      width: 766px;
      margin-top: 73px;
    }
    > .base-input-container:nth-child(9) {
      width: 705px;
      margin-top: 73px;
    }
    > .base-input-container:nth-child(10) {
      width: 705px;
      margin-top: 73px;
    }
    > .addder {
      > div:first-child {
        .base-input-container {
          width: 727px;
        }
      }

      .base-input-container:nth-child(2) {
        width: 323px;
      }
    }
    .soc-media {
      .base-input-container {
        width: 224px;
        height: 50px;
       
      }
    }
  }
}
@media (max-width: 1024px) {
  .eagle-container {
    padding-left: 10px;
    .further-information {
      > .base-input-container:nth-child(2),
      > .base-input-container:nth-child(3),
      > .base-input-container:nth-child(5),
      > .base-input-container:nth-child(4),
      > .base-input-container:nth-child(8),
      > .base-input-container:nth-child(9),
      > .base-input-container:nth-child(10) {
        width: 680px;
        margin-top: 73px;
      }
    }
  }
}
@media (max-width: 768px) {
  .eagle-container {
    padding-left: 10px;
    border-radius: 0;
    .further-information {
      > .base-input-container:nth-child(2),
      > .base-input-container:nth-child(3),
      > .base-input-container:nth-child(5),
      > .base-input-container:nth-child(4),
      > .base-input-container:nth-child(8),
      > .base-input-container:nth-child(9),
      > .base-input-container:nth-child(10) {
        width: 80vw;
        margin-top: 73px;
      }
    }
  }
}
@media (max-width: 400px) {
  .manufactor{
    width:330px
  }
}
</style>
