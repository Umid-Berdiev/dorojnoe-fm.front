<script setup lang="ts"></script>

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
      <div class="flex flex-col items-center gap-3">
        <div class="flex pt-3">
          <button
            data-popover-target="volume-range-popover  "
            type="button"
            class="volume-btn"
          >
            <VolumeIcon />
          </button>
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

    .radio-player {
      @apply flex mt-4 gap-3;

      .volume-btn {
        @apply bg-transparent p-0;
      }
    }
  }
</style>
