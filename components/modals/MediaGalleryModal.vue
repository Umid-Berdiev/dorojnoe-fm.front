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
                  class="absolute top-8 right-16 bg-transparent text-white p-0 border-0 focus-visible:outline-none cursor-pointer"
                  @click="closeModal"
                >
                  <XMarkIcon class="w-14 h-14" />
                </button>
                <Swiper
                  :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }"
                  :initialSlide="activeIndex"
                  :spaceBetween="10"
                  :navigation="true"
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
                  :spaceBetween="24"
                  slidesPerView="auto"
                  :freeMode="true"
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
    position: relative;
    height: 100%;
    padding: 2rem 4rem;

    .gallerySwiper1 {
      // top: 15%;
      position: absolute;
      top: 10%;

      .swiper-wrapper {
        align-items: center !important;
        justify-content: space-between;

        .swiper-slide {
          width: 100% !important;
          max-width: 100%;
          text-align: center;

          /* Center slide text vertically */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          max-width: 758px;
          height: 100%;
          max-height: 440px;
          border-radius: 1.5rem;
        }
      }

      .swiper-button-next,
      .swiper-button-prev {
        background-size: 1rem;
      }
    }

    .gallerySwiper2 {
      position: absolute;
      bottom: 2rem;

      .swiper-wrapper {
        align-items: center !important;
        justify-content: space-between;

        .swiper-slide {
          width: 100% !important;
          max-width: 164px;
          text-align: center;

          /* Center slide text vertically */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          border: 2px solid #ffffff00;
          border-radius: 0.5rem;
        }

        .swiper-slide-thumb-active img {
          border: 2px solid #fff;
        }
      }
    }
  }
</style>
