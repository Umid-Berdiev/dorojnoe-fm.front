<script setup lang="ts">
  import { initAccordions } from "flowbite";

  onMounted(() => {
    initAccordions();
  });
</script>

<template>
  <div
    class="mt-3 font-inter lg:text-base inline-flex flex-col items-end gap-1 text-left font-normal text-black w-full max-w-[214px]"
  >
    <div class="flex w-full flex-col items-start gap-1">
      <!-- START: radiostation menu -->
      <div
        id="accordion-radiostation"
        data-accordion="collapse"
        data-active-classes="bg-white text-black border"
        data-inactive-classes="bg-white text-black"
      >
        <h2 id="accordion-radiostation-heading-1">
          <button
            type="button"
            class="flex items-center py-2.5 px-4 rounded-lg gap-4"
            data-accordion-target="#accordion-radiostation-body-1"
            aria-expanded="false"
            aria-controls="accordion-radiostation-body-1"
          >
            <div class="w-6 text-center">
              <RadioIcon class="" />
            </div>
            <p class="flex-grow">Радиостанция</p>
          </button>
        </h2>
        <div
          id="accordion-radiostation-body-1"
          aria-labelledby="accordion-radiostation-heading-1"
          class="py-[15px] pl-10"
          :class="{ hidden: !$route.path.startsWith('/radiostation') }"
        >
          <div class="flex flex-col items-start gap-1 border-y">
            <template v-for="item in radioStationMenuItems">
              <NuxtLink
                :to="item.path"
                class="flex p-2.5 items-start font-inter text-base"
              >
                {{ item.label }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
      <!-- END: radiostation menu -->
      <div class="py-2.5 px-4">
        <NuxtLink to="/news" class="flex items-center gap-4">
          <div class="w-6 text-center">
            <NewsIcon class="" />
          </div>
          <p class="flex-grow">Новости</p>
        </NuxtLink>
      </div>
      <!-- START: broadcast-programs menu -->
      <div
        id="accordion-broadcast-programs"
        data-accordion="collapse"
        data-active-classes="bg-white text-black border"
        data-inactive-classes="bg-white text-black"
      >
        <h2 id="accordion-broadcast-programs-heading-1">
          <button
            type="button"
            class="flex items-center py-2.5 px-4 rounded-lg gap-4"
            data-accordion-target="#accordion-broadcast-programs-body-1"
            aria-expanded="false"
            aria-controls="accordion-broadcast-programs-body-1"
          >
            <div class="w-6 text-center">
              <ProgramsIcon class="" />
            </div>
            <p class="flex-grow">Программы</p>
          </button>
        </h2>
        <div
          id="accordion-broadcast-programs-body-1"
          aria-labelledby="accordion-broadcast-programs-heading-1"
          class="py-[15px] pl-10"
          :class="{ hidden: !$route.path.startsWith('/broadcast-programs') }"
        >
          <div class="flex flex-col items-start gap-1 border-y">
            <template v-for="item in broadcastProgramMenuItems">
              <NuxtLink
                :to="item.path"
                class="flex p-2.5 items-start font-inter text-base"
              >
                {{ item.label }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
      <!-- END: broadcast-programs menu -->
      <div class="py-2.5 px-4">
        <NuxtLink to="/promotions" class="flex items-center gap-4">
          <div class="w-6 text-center">
            <GiftIcon class="" />
          </div>
          <p class="flex-grow">Акции и события</p>
        </NuxtLink>
      </div>
      <div class="py-2.5 px-4">
        <NuxtLink to="/media" class="flex items-center gap-4">
          <div class="w-6 text-center">
            <ImageIcon class="" />
          </div>
          <p class="flex-grow">Фото и видео</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .router-link-exact-active {
    @apply font-bold;
  }
</style>
