<template>
  <div class="eagle-container bg-white w-full md:w-11/12 mx-auto">
    <h1 class="font-extrabold">The Philippine Eagle</h1>
    <div class="upload-token w-full">
      <BaseHeader>Upload Token</BaseHeader>
      <div class="flex w-10/12 justify-center md:justify-between flex-wrap">
        <div class="flex-1" style="min-width: 284px">
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
    <div class="upload-currency mt-20 w-full">
      <BaseHeader>Upload Currency password preview </BaseHeader>
      <div
        class="flex justify-center w-10/12 flex-wrap md:justify-between items-center mt-14"
      >
        <p>
          To display your currency password, you need a photo to preview. Upload
          your desired file
        </p>
        <BaseUpload class="mt-10 md:mt-0" />
      </div>
    </div>
    <div class="further-information mt-14 w-full">
      <BaseHeader>Further Information</BaseHeader>
      <BaseInput class="sm:w-7/12 w-11/12"> Token Name </BaseInput>
      <BaseInput
        placeholder="To view your products you need a website address. Enter the address"
        class="sm:w-7/12 w-11/12"
      >
        Website Link </BaseInput
      ><BaseInput
        placeholder="This description will be displayed when your currency password is released"
        class="sm:w-7/12 w-11/12"
        :textArea="true"
      >
        Description
      </BaseInput>
      <BaseInput
        placeholder="Email Your way of communicating with us, enter your email"
        class="sm:w-7/12 w-11/12"
      >
        EmailAddress
      </BaseInput>

      <div
        class="flex w-full relative adder items-center justify-evenly mt-14 flex-wrap"
      >
        <img
          class="sm:mr-2 mx-auto cursor-pointer absolute bottom-0 left-0"
          src="../assets/images/add.svg"
          alt=""
          @click="adders.push('1')"
        />
        <div
          v-for="item in adders"
          class="flex sm:w-11/12 mt-5 mx-auto w-full flex-wrap-reverse"
        >
          <BaseInput
            placeholder="Email Your way of communicating with us, enter your email"
            class="md:flex-1 sm:mx-auto manufactor w-11/12 sm:mr-6"
          >
            Manufacturer Group
          </BaseInput>
          <BaseInput
            class="mt-4 sm:mt-0 mr-10 sm:w-3/12 w-11/12"
            :minimal="true"
          >
            Responsibility
          </BaseInput>
        </div>
      </div>
      <div
        class="flex soc-media w-11/12 mx-auto flex-wrap justify-between mt-20"
      >
        <BaseInput class="my-5 md:my-0 w-full sm:w-2/12" :minimal="true">
          <img class="absolute" src="../assets/images/linkedin.svg" alt="" />
        </BaseInput>
        <BaseInput class="my-5 md:my-0 w-full sm:w-2/12" :minimal="true">
          <img class="absolute" src="../assets/images/whatsapp.svg" alt="" />
        </BaseInput>
        <BaseInput class="my-5 md:my-0 w-full sm:w-2/12" :minimal="true">
          <img class="absolute" src="../assets/images/twitter.svg" alt="" />
        </BaseInput>
        <BaseInput class="my-5 md:my-0 w-full sm:w-2/12" :minimal="true">
          <img class="absolute" src="../assets/images/instagram.svg" alt="" />
        </BaseInput>
      </div>
      <BaseInput
        placeholder="Enter a direct link for admin access to review the product"
        class="sm:w-7/12 w-11/12"
      >
        Direct access link
      </BaseInput>
      <BaseInput
        placeholder="Enter an initial price to provide your currency code"
        class="sm:w-6/12 w-11/12"
      >
        Initial price
      </BaseInput>
      <BaseInput
        placeholder="Specify a specific number to supply (this number cannot be changed)"
        class="sm:w-6/12 w-11/12"
      >
        Supply number
      </BaseInput>
      <button
        class="create-token-btn flex justify-center transition-all items-center mx-auto text-2xl"
      >
        create token
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adders: ['1'],
    }
  },
}
</script>

<style lang="scss">
@media (max-width: 768px) {
  .upload-token {
    .upload {
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
.create-token-btn:hover {
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
    > div:nth-child(2) {
      margin-top: 65px;

      > div:first-child {
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
  }
  .further-information {
    > .base-input-container:nth-child(2),
    > .base-input-container:nth-child(3),
    > .base-input-container:nth-child(5) {
      // width: 766px;
      margin-top: 73px;
    }

    > .base-input-container:nth-child(4) {
      // width: 766px;
      margin-top: 73px;
      height: 196px;
    }
    > .base-input-container:nth-child(8) {
      //   width: 766px;
      margin-top: 73px;
    }
    > .base-input-container:nth-child(9) {
      //   width: 705px;
      margin-top: 73px;
    }
    > .base-input-container:nth-child(10) {
      //   width: 705px;
      margin-top: 73px;
    }
    // > .addder {
    //   > div:first-child {
    //     .base-input-container {
    //       width: 727px;
    //     }
    //   }

    //   .base-input-container:nth-child(2) {
    //     width: 323px;
    //   }
    // }
    // .soc-media {
    //   .base-input-container {
    //     width: 224px;
    //     height: 50px;
    //   }
    // }
  }
}
// @media (max-width: 1024px) {
//   .eagle-container {
//     padding-left: 10px;
//     .further-information {
//       > .base-input-container:nth-child(2),
//       > .base-input-container:nth-child(3),
//       > .base-input-container:nth-child(5),
//       > .base-input-container:nth-child(4),
//       > .base-input-container:nth-child(8),
//       > .base-input-container:nth-child(9),
//       > .base-input-container:nth-child(10) {
//         width: 680px;
//         margin-top: 73px;
//       }
//     }
//   }
// }
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
        // width: 90vw;
        margin-top: 73px;
      }
    }
  }
}
</style>
