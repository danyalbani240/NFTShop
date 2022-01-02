<template>
  <div class="eagle-container bg-white w-11/12 mx-auto">
    <h1>The Philippine Eagle</h1>
    <div class="upload-token">
      <BaseHeader>Upload Token</BaseHeader>
      <div class="flex justify-between">
        <div style="margin-left: 21px">
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
        <BaseUpload style="margin-right: 148px" />
      </div>
    </div>
    <div class="upload-currency mt-20">
      <BaseHeader>Upload Currency password preview </BaseHeader>
      <div class="flex justify-between items-center mt-14">
        <p style="color: rgba(0, 0, 0, 0.4); width: 431px; margin-left: 21px">
          To display your currency password, you need a photo to preview. Upload
          your desired file
        </p>
        <BaseUpload style="margin-right: 148px" />
      </div>
    </div>
    <div class="further-information mt-14">
      <BaseHeader>Further Information</BaseHeader>
      <BaseInput style="width: 766px; margin-top: 73px"> Token Name </BaseInput>
      <BaseInput style="width: 766px; margin-top: 73px">
        Website Link
      </BaseInput>
      <BaseInput style="width: 766px; margin-top: 73px">
        Email Address
      </BaseInput>
      <BaseInput style="width: 766px; margin-top: 73px; height: 196px">
        Description
      </BaseInput>
      <div class="flex items-center justify-evenly mt-14">
        <img src="../assets/images/add.svg" alt="" />
        <BaseInput :w517="true" style="width: 727px">
          Manufacturer Group
        </BaseInput>
        <BaseInput :minimal="true" style="width: 323px">
          Responsibility
        </BaseInput>
      </div>
      <div class="flex justify-evenly mt-20">
        <BaseInput :minimal="true" style="width: 224px">
          <img src="../assets/images/linkedin.svg" alt="" />
        </BaseInput>
        <BaseInput :minimal="true" style="width: 224px">
          <img src="../assets/images/whatsapp.svg" alt="" />
        </BaseInput>
        <BaseInput :minimal="true" style="width: 224px">
          <img src="../assets/images/twitter.svg" alt="" />
        </BaseInput>
        <BaseInput :minimal="true" style="width: 224px">
          <img src="../assets/images/instagram.svg" alt="" />
        </BaseInput>
      </div>
      <BaseInput style="width: 766px; margin-top: 73px">
        Direct access link
      </BaseInput>
      <BaseInput style="width: 705px; margin-top: 73px">
        Initial price
      </BaseInput>
      <BaseInput style="width: 705px; margin-top: 73px">
        Supply number
      </BaseInput>
      <button class="create-token-btn flex justify-center items-center mx-auto text-2xl">
        create token
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.create-token-btn {
  background: #c91efa;
  box-shadow: 0px 0px 15px #c91efa;
  border-radius: 19px;
  width: 271px;
  height: 66px;
  color: white;
  margin-top: 130px;
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
        div {
          margin: 13.5px 0;
          p {
            color: #999999;
          }
        }
      }
    }
  }
}
</style>
