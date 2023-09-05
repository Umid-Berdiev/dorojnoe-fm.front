<script setup lang="ts">
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from "@headlessui/vue";
  import { XMarkIcon } from "@heroicons/vue/20/solid";

  const props = withDefaults(
    defineProps<{
      isOpen: boolean;
      gallery: string[];
      activeIndex: number;
    }>(),
    {
      isOpen: false,
      gallery: () => [],
      activeIndex: 0,
    }
  );

  const emits = defineEmits<{
    (e: "update:isOpen", isOpen: boolean): void;
  }>();

  function closeModal() {
    thumbsSwiper.value = null;
    emits("update:isOpen", false);
  }

  function openModal() {
    emits("update:isOpen", true);
  }

  const thumbsSwiper = ref(null);
  const modules = [SwiperFreeMode, SwiperNavigation, SwiperThumbs];

  const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
  };
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-40">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-50" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="relative w-full h-screen transform overflow-hidden text-center shadow-xl transition-all items-center"
            >
              <div class="modalContent relative">
                <button
                  type="button"
                  class="absolute top-4 lg:top-8 right-4 lg:right-16 bg-transparent text-white p-0 border-0 focus-visible:outline-none cursor-pointer"
                  @click="closeModal"
                >
                  <XMarkIcon class="w-10 h-10 lg:w-14 lg:h-14" />
                </button>
                <Swiper
                  :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }"
                  :initialSlide="activeIndex"
                  :navigation="true"
                  :slidesPerView="1"
                  :spaceBetween="12"
                  :thumbs="{ swiper: thumbsSwiper }"
                  :modules="modules"
                  class="gallerySwiper1"
                >
                  <SwiperSlide v-for="item in gallery">
                    <img :src="item" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  @swiper="setThumbsSwiper"
                  :slidesPerView="3"
                  :spaceBetween="12"
                  :breakpoints="{
                    // '640': {
                    //   slidesPerView: 2,
                    //   spaceBetween: 20,
                    // },
                    // '768': {
                    //   slidesPerView: 4,
                    //   spaceBetween: 40,
                    // },
                    '1280': {
                      slidesPerView: 'auto',
                      spaceBetween: 24,
                    },
                  }"
                  :freeMode="false"
                  :watchSlidesProgress="true"
                  :modules="modules"
                  class="gallerySwiper2"
                >
                  <SwiperSlide v-for="item in gallery">
                    <img :src="item" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="scss">
  .modalContent {
    @apply relative h-full lg:py-8;

    .gallerySwiper1 {
      @apply absolute top-1/2 transform -translate-y-1/2;

      .swiper-wrapper {
        align-items: center !important;
        justify-content: space-between;

        .swiper-slide {
          width: 100% !important;
          @apply max-w-full text-center flex justify-center items-center;
        }

        .swiper-slide img {
          // display: block;
          // width: 100%;
          // max-width: 758px;
          // height: 100%;
          // max-height: 440px;
          // border-radius: 1.5rem;

          @apply block w-full max-w-[320px] lg:max-w-[758px] h-[200px] lg:h-[440px] rounded-3xl;
        }
      }

      .swiper-button-prev {
        left: 5rem;
      }

      .swiper-button-next {
        right: 5rem;
      }

      .swiper-button-next,
      .swiper-button-prev {
        // background-size: 1rem;
        @apply hidden lg:flex;
      }
    }

    .gallerySwiper2 {
      // position: absolute;
      // bottom: 2rem;
      @apply absolute bottom-8 transform left-5 lg:left-20 right-5 lg:right-20;

      .swiper-wrapper {
        // align-items: center !important;
        // justify-content: space-between;
        @apply items-center justify-between;

        .swiper-slide {
          width: 100% !important;
          // max-width: 164px;
          // text-align: center;

          // /* Center slide text vertically */
          // display: flex;
          // justify-content: center;
          // align-items: center;

          @apply w-full max-w-[80px] lg:max-w-[164px];

          img {
            display: block;
            width: 100%;
            height: 100%;
            border: 2px solid #ffffff00;
            border-radius: 0.5rem;
          }
        }

        .swiper-slide-thumb-active img {
          border: 2px solid #fff;
        }
      }
    }
  }
</style>
