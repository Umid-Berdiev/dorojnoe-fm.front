<script setup lang="ts">
  import "flowbite";

  // export default defineNuxtPlugin((nuxtApp) => {
  //   nuxtApp.vueApp.use(flowbite);
  // });
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
        <button type="button" class="volume-btn peer">
          <VolumeIcon />
        </button>
        <div
          class="absolute top-[13.5rem] left-[14.5rem] hidden peer-focus:flex items-center gap-2 lg:w-[10rem] bg-white p-2 rounded-full shadow-sm z-50"
        >
          <button type="button" class="volume-btn">
            <VolumeIcon />
          </button>
          <input
            id="small-range"
            type="range"
            value="50"
            class="w-full h-[5px] bg-gray-200 rounded-lg appearance-none cursor-pointer range-xs"
          />
          <!-- <input
            type="range"
            class="transparent h-1 w-full cursor-pointer appearance-none border-transparent bg-neutral-200"
            id="customRange1"
          /> -->
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
    .frequency-select {
      @apply block
      p-2.5
      w-full
      text-sm
      text-gray-500
      bg-transparent
      border-0
      border-gray-200
      appearance-none
      focus:outline-none
      focus:ring-0
      focus:border-gray-200;
    }

    .hidden-block {
      display: none;
      position: absolute;
    }

    .radio-player {
      @apply flex mt-4 gap-3;

      .volume-btn {
        @apply bg-transparent p-0;
      }

      // .volume-btn:hover .hidden-block {
      //   display: block;
      //   transition: 1s; /* moved this */
      // }
    }

    input[type="range"].range-xs::-webkit-slider-thumb {
      height: 0.5rem /* 16px */;
      width: 0.5rem /* 16px */;
    }
    input[type="range"].range-xs::-moz-range-thumb {
      height: 0.5rem /* 16px */;
      width: 0.5rem /* 16px */;
    }
  }
</style>
