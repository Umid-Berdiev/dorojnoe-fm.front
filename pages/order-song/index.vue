<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import { ChevronRightIcon } from "@heroicons/vue/20/solid";
  import OrderSong from "~/components/blocks/order-song/OrderSong.vue";
  import SelectCity from "~/components/blocks/order-song/SelectCity.vue";
  import WriteDownMessage from "~/components/blocks/order-song/WriteDownMessage.vue";
  import WhenToPlay from "~/components/blocks/order-song/WhenToPlay.vue";
  import SuccessStep from "~/components/blocks/order-song/SuccessStep.vue";

  useHead({
    script: [
      {
        src: "/js/web-audio-recorder/WebAudioRecorder.min.js",
        // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
        tagPosition: "head",
      },
    ],
  });

  const currentStep = useLocalStorage("order-song-step", "OrderSong");
  const steps = {
    OrderSong,
    SelectCity,
    WriteDownMessage,
    WhenToPlay,
    SuccessStep,
  };

  const activeIndex = computed(() => {
    switch (currentStep.value) {
      case "SelectCity":
        return 2;
      case "WriteDownMessage":
        return 4;
      case "WhenToPlay":
        return 6;
      default:
        0;
    }
  });
</script>

<template>
  <div class="default-container">
    <Swiper
      :initialSlide="activeIndex"
      :slidesPerView="'auto'"
      :breakpoints="{
        1280: {
          slidesPerView: 7,
        },
      }"
      id="order-song-swiper"
      v-if="currentStep !== 'SuccessStep'"
    >
      <SwiperSlide>
        <PrimaryButtonWhite
          :class="[
            'rounded-43xl py-2.5 px-4 text-sm lg:text-base',
            { active: currentStep === 'OrderSong' },
          ]"
          @click="currentStep = 'OrderSong'"
        >
          Выбрать песню
        </PrimaryButtonWhite>
      </SwiperSlide>
      <SwiperSlide>
        <ChevronRightIcon class="w-6 h-6" />
      </SwiperSlide>
      <SwiperSlide>
        <PrimaryButtonWhite
          :class="[
            'rounded-43xl py-2.5 px-4 text-sm lg:text-base',
            { active: currentStep === 'SelectCity' },
          ]"
          @click="currentStep = 'SelectCity'"
        >
          Выбрать город
        </PrimaryButtonWhite>
      </SwiperSlide>
      <SwiperSlide>
        <ChevronRightIcon class="w-6 h-6" />
      </SwiperSlide>
      <SwiperSlide>
        <PrimaryButtonWhite
          :class="[
            'rounded-43xl py-2.5 px-4 text-sm lg:text-base',
            { active: currentStep === 'WriteDownMessage' },
          ]"
          @click="currentStep = 'WriteDownMessage'"
        >
          Записать обращение
        </PrimaryButtonWhite>
      </SwiperSlide>
      <SwiperSlide>
        <ChevronRightIcon class="w-6 h-6" />
      </SwiperSlide>
      <SwiperSlide>
        <PrimaryButtonWhite
          :class="[
            'rounded-43xl py-2.5 px-4 text-sm lg:text-base',
            { active: currentStep === 'WhenToPlay' },
          ]"
          @click="currentStep = 'WhenToPlay'"
        >
          Когда исполнить
        </PrimaryButtonWhite>
      </SwiperSlide>
    </Swiper>
    <ClientOnly>
      <Component :is="steps[currentStep]" />
    </ClientOnly>
  </div>
</template>

<style lang="scss">
  #order-song-swiper .swiper-wrapper {
    display: flex;
    align-items: center;

    .swiper-slide {
      width: auto !important;
    }
  }

  .active {
    @apply bg-firebrick text-white;
  }

  .inactive {
    @apply bg-white text-black;
  }
</style>
