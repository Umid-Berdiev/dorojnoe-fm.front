<script setup lang="ts">
  import { initCollapses } from "flowbite";

  onMounted(() => {
    initCollapses();
  });
</script>

<template>
  <div class="h-full px-3 py-4 overflow-y-auto mt-3 font-inter text-base">
    <ul class="space-y-2">
      <!-- START: radiostation menu -->
      <li>
        <button
          type="button"
          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
          :class="{ border: $route.path.startsWith('/radiostation') }"
          aria-controls="dropdown-radiostation"
          data-collapse-toggle="dropdown-radiostation"
        >
          <RadioIcon class="flex-shrink-0 transition duration-75 w-5 h-5" />

          <span class="flex-1 ml-3 text-left whitespace-nowrap">
            Радиостанция
          </span>
        </button>
        <ul
          id="dropdown-radiostation"
          class="py-2 space-y-2"
          :class="{ hidden: !$route.path.startsWith('/radiostation') }"
        >
          <template v-for="item in radioStationMenuItems">
            <li>
              <NuxtLink
                :to="item.path"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </li>
      <!-- END: radiostation menu -->

      <!-- START: news menu -->
      <li>
        <NuxtLink
          to="/news"
          class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <NewsIcon class="transition duration-75 w-5 h-5" />
          <span class="ml-3">Новости</span>
        </NuxtLink>
      </li>
      <!-- END: news menu -->

      <!-- START: broadcast-programs menu -->
      <li>
        <button
          type="button"
          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
          :class="{ border: $route.path.startsWith('/broadcast-programs') }"
          aria-controls="dropdown-broadcast-programs"
          data-collapse-toggle="dropdown-broadcast-programs"
        >
          <ProgramsIcon class="flex-shrink-0 transition duration-75 w-5 h-5" />

          <span class="flex-1 ml-3 text-left whitespace-nowrap">
            Программы
          </span>
        </button>
        <ul
          id="dropdown-broadcast-programs"
          class="py-2 space-y-2"
          :class="{ hidden: !$route.path.startsWith('/broadcast-programs') }"
        >
          <template v-for="item in broadcastProgramMenuItems">
            <li>
              <NuxtLink
                :to="item.path"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </li>
      <!-- END: broadcast-programs menu -->

      <!-- START: promotions menu -->
      <li>
        <NuxtLink
          to="/promotions"
          class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <GiftIcon class="transition duration-75 w-5 h-5" />
          <span class="ml-3">Акции и события</span>
        </NuxtLink>
      </li>
      <!-- END: promotions menu -->

      <!-- START: media menu -->
      <li>
        <NuxtLink
          to="/media"
          class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <ImageIcon class="transition duration-75 w-5 h-5" />
          <span class="ml-3">Фото и видео</span>
        </NuxtLink>
      </li>
      <!-- END: media menu -->

      <!-- START: presenters menu -->
      <li>
        <NuxtLink
          to="/presenters"
          class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <ImageIcon class="transition duration-75 w-5 h-5" />
          <span class="ml-3">Ведущие</span>
        </NuxtLink>
      </li>
      <!-- END: presenters menu -->

      <!-- START: order-song menu -->
      <li>
        <NuxtLink
          to="/order-song"
          class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <ImageIcon class="transition duration-75 w-5 h-5" />
          <span class="ml-3">Заказать песню</span>
        </NuxtLink>
      </li>
      <!-- END: order-song menu -->
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .router-link-exact-active {
    @apply font-bold;
  }
</style>
