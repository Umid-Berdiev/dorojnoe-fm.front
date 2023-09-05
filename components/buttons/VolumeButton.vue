<script lang="ts" setup>
  import "flowbite";

  const isVolumeControlVisible = ref(false);
  const volumeStep = ref(50);

  function toggleVolumeControl() {
    isVolumeControlVisible.value = !isVolumeControlVisible.value;
  }
</script>

<template>
  <div class="relative">
    <button type="button" class="volume-btn" @click="toggleVolumeControl">
      <VolumeIcon />
    </button>
    <div v-if="isVolumeControlVisible" class="volume-control-wrapper">
      <button type="button" class="volume-btn" @click="toggleVolumeControl">
        <VolumeIcon fill="#FE576F" />
      </button>
      <input
        type="range"
        v-model="volumeStep"
        min="0"
        max="100"
        step="1"
        class="w-28 h-1 bg-gray-200 rounded-lg cursor-pointer range-sm accent-[#FE576F]"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .volume-btn {
    @apply bg-transparent p-0;
  }

  .volume-control-wrapper {
    box-shadow: 0px 6.6579976081848145px 13.315995216369629px -8.322497367858887px
      rgba(0, 0, 0, 0.12);
    @apply flex absolute -top-[.5rem] -right-[.5rem] lg:-left-[.5rem] items-center gap-2 w-40 bg-white p-2 pr-2 lg:pr-4 rounded-full z-50;

    .volume-btn {
      @apply order-last lg:order-first;
    }
  }

  // /** FF*/
  // input[type="range"]::-moz-range-progress {
  //   background-color: #fe576f;
  // }
  // input[type="range"]::-moz-range-track {
  //   background-color: #e3e3e9;
  // }
  // /* IE*/
  // input[type="range"]::-ms-fill-lower {
  //   background-color: #fe576f;
  // }
  // input[type="range"]::-ms-fill-upper {
  //   background-color: #e3e3e9;
  // }

  // input[type="range"]::-moz-range-thumb {
  //   height: 4px;
  //   width: 4px;
  //   background: #fe576f;
  //   border-radius: 9999px;
  //   border: 0;
  //   appearance: none;
  //   -moz-appearance: none;
  //   -webkit-appearance: none;
  //   cursor: pointer;
  // }

  // /*Chrome*/
  // @media screen and (-webkit-min-device-pixel-ratio: 0) {
  //   input[type="range"] {
  //     overflow: hidden;
  //     cursor: pointer;
  //     width: 100%;
  //     appearance: none;
  //     -webkit-appearance: none;
  //     // background-color: #e3e3e9;
  //     border-radius: 10px;
  //   }

  // input[type="range"]::-webkit-slider-thumb {
  //   width: 4px;
  //   height: 4px;
  //   -webkit-appearance: none;
  //   cursor: pointer;
  //   background: #fe576f;
  // }
  // }
</style>
