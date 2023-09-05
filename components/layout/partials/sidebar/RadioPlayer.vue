<script setup lang="ts">
  import "flowbite";

  // export default defineNuxtPlugin((nuxtApp) => {
  //   nuxtApp.vueApp.use(flowbite);
  // });

  const isVolumeControlVisible = ref(false);
  const volumeStep = ref(50);

  function toggleVolumeControl() {
    isVolumeControlVisible.value = !isVolumeControlVisible.value;
  }
</script>

<template>
  <div class="radio-player-wrapper">
    <!-- frequency select -->
    <FrequencySelect />
    <div class="radio-player">
      <div class="relative flex-auto">
        <img
          srcset="
            /assets/images/radio_player_cover1.png 1x,
            /assets/images/radio_player_cover1.png 2x
          "
          alt="Radio player cover image"
          class="w-full"
        />
        <button class="absolute top-18 left-16 bg-transparent p-0">
          <PlayIcon />
        </button>
      </div>
      <div class="flex flex-col items-center gap-3 pt-3">
        <button type="button" class="volume-btn" @click="toggleVolumeControl">
          <VolumeIcon />
        </button>
        <div v-if="isVolumeControlVisible" class="volume-control-wrapper">
          <button type="button" class="volume-btn" @click="toggleVolumeControl">
            <VolumeIcon fill="#FE576F" />
          </button>
          <input type="range" v-model="volumeStep" min="0" max="100" step="1" />
        </div>
        <button class="bg-transparent p-0 mt-auto">
          <ChevronDoubleUpIcon />
        </button>
        <button class="bg-transparent p-0">
          <LikeIcon />
        </button>
      </div>
    </div>
    <div class="font-montserrat mt-4">
      <p class="text-sm font-medium">Алиса</p>
      <h3 class="mt-2 text-lg font-black uppercase">
        Всё в наших руках (live 2022)
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .radio-player-wrapper {
    .hidden-block {
      display: none;
      position: absolute;
    }

    .radio-player {
      @apply flex mt-4 gap-3;

      .volume-btn {
        @apply bg-transparent p-0;
      }

      .volume-control-wrapper {
        box-shadow: 0px 6.6579976081848145px 13.315995216369629px -8.322497367858887px
          rgba(0, 0, 0, 0.12);
        @apply flex fixed top-[13.55rem] left-[17.75rem] items-center gap-2 lg:w-[10rem] bg-white p-2 pr-4 rounded-full z-50;
      }

      /** FF*/
      input[type="range"]::-moz-range-progress {
        background-color: #fe576f;
      }
      input[type="range"]::-moz-range-track {
        background-color: #e3e3e9;
      }
      /* IE*/
      input[type="range"]::-ms-fill-lower {
        background-color: #fe576f;
      }
      input[type="range"]::-ms-fill-upper {
        background-color: #e3e3e9;
      }

      input[type="range"]::-moz-range-thumb {
        height: 6px;
        width: 6px;
        background: #fe576f;
        border-radius: 9999px;
        border: 0;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        cursor: pointer;
      }
    }
  }

  /*Chrome*/
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="range"] {
      overflow: hidden;
      cursor: pointer;
      width: 100%;
      appearance: none;
      -webkit-appearance: none;
      // background-color: #e3e3e9;
      border-radius: 10px;
    }

    input[type="range"]::-webkit-slider-thumb {
      width: 6px;
      -webkit-appearance: none;
      height: 6px;
      cursor: pointer;
      background: #fe576f;
      box-shadow: -80px 0 0 80px #fe576f;
    }
  }
</style>
