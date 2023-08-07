<script setup lang="ts">
  import IconPlay from "@/components/icons/iconPlay.vue";
  import IconPause from "@/components/icons/iconPause.vue";
  import IconVolumeRange from "@/components/icons/iconVolumeRange.vue";
  import IconLike from "@/components/icons/iconLike.vue";
  import IconLikeActive from "@/components/icons/iconLikeActive.vue";

  const audioSource =
    "https://uzpesni.ru/wp-content/uploads/2023/06/Jahongir-Otajonov-Bom-bom.mp3";

  const audioElement = ref<any>(null);
  const isPlaying = ref(false);
  const volume = ref(0.5);
  const like = ref(false);
  const showVolume = ref(false);
  // hooks
  // ####

  // functions
  const playPause = () => {
    if (!audioElement.value) return;

    if (isPlaying.value) {
      audioElement.value.pause();
    } else {
      audioElement.value.play();
    }
    isPlaying.value = !isPlaying.value;
  };

  const setVolume = () => {
    if (!audioElement.value) return;
    audioElement.value.volume = volume.value;
  };

  function openVolume() {
    showVolume.value = !showVolume.value;
  }
  function closeVolume() {
    showVolume.value = false;
  }
</script>
<template>
  <div class="player mb-6">
    <div class="flex gap-4">
      <button
        type="button"
        class="max-w-[200px] max-h-[200px] relative mb-3.5"
        @click="playPause"
      >
        <img src="@/public/alisa.jpg" class="w-full h-full" alt="" />
        <div
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <template v-if="!isPlaying">
            <icon-play />
          </template>
          <template v-else>
            <icon-pause />
          </template>
        </div>
      </button>
      <div class="controls flex flex-col justify-between">
        <button type="button" class="volume" @click="openVolume">
          <VolumeIcon />
        </button>
        <div
          v-if="showVolume"
          class="bg-[#fff] max-w-[168px] w-full absolute top-[20%] left-[10%] z-10 border rounded-[50px] p-2 pr-4 flex items-center gap-2 volume-shadow"
        >
          <audio ref="audioElement" :src="audioSource" />
          <IconVolumeRange />
          <input
            type="range"
            v-model="volume"
            min="0"
            max="1"
            step="0.01"
            @input="setVolume"
          />
        </div>
        <button type="button" class="like" @click="like = !like">
          <template v-if="like">
            <IconLikeActive />
          </template>
          <template v-else>
            <IconLike />
          </template>
        </button>
      </div>
    </div>
    <div class="artist-info">
      <div class="artist-name text-black font-medium text-sm mb-2">Алиса</div>
      <h1
        class="song-name text-black font-extrabold text-xl leading-tight uppercase"
      >
        Всё в наших руках (live 2022)
      </h1>
    </div>
  </div>
</template>

<style scoped>
  /*  */
  .volume-shadow {
    box-shadow: 0px 6.6579976081848145px 13.315995216369629px -8.322497367858887px
      rgba(0, 0, 0, 0.12);
  }
  /*Chrome*/
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="range"] {
      overflow: hidden;
      cursor: pointer;
      width: 100%;
      -webkit-appearance: none;
      background-color: #e3e3e9;
      border-radius: 10px;
    }

    /* input[type="range"]::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: #FE576F;
    margin-top: -1px;
  } */

    input[type="range"]::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      cursor: pointer;
      background: #fe576f;
      box-shadow: -80px 0 0 80px #fe576f;
    }
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
</style>
