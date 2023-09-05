<script setup lang="ts"></script>

<template>
  <div class="h-auto overflow-y-auto my-8 font-inter text-base">
    <ul class="vertical-menu space-y-1">
      <!-- START: radiostation menu -->
      <li>
        <button
          type="button"
          class="flex items-center w-full py-2 px-3 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
          :class="{ border: $route.path.startsWith('/radiostation') }"
          aria-controls="dropdown-mobile-radiostation"
          data-collapse-toggle="dropdown-mobile-radiostation"
        >
          <RadioIcon
            class="inline-flex items-center flex-shrink-0 transition duration-75 w-5 h-5"
          />

          <span class="flex-1 ml-3 text-left whitespace-nowrap">
            Радиостанция
          </span>
        </button>
        <ul
          id="dropdown-mobile-radiostation"
          class="py-2 space-y-2"
          :class="{ hidden: !$route.path.startsWith('/radiostation') }"
        >
          <template v-for="item in radioStationMenuItems">
            <li>
              <NuxtLink
                :to="item.path"
                class="flex items-center w-full py-2 px-3 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
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
          class="flex items-center py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <NewsIcon
            class="inline-flex items-center transition duration-75 w-5 h-5"
          />
          <span class="ml-3">Новости</span>
        </NuxtLink>
      </li>
      <!-- END: news menu -->

      <!-- START: broadcast-programs menu -->
      <li>
        <button
          type="button"
          class="flex items-center w-full py-2 px-3 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
          :class="{ border: $route.path.startsWith('/broadcast-programs') }"
          aria-controls="dropdown-mobile-broadcast-programs"
          data-collapse-toggle="dropdown-mobile-broadcast-programs"
        >
          <ProgramsIcon
            class="inline-flex items-center flex-shrink-0 transition duration-75 w-5 h-5"
          />

          <span class="flex-1 ml-3 text-left whitespace-nowrap">
            Программы
          </span>
        </button>
        <ul
          id="dropdown-mobile-broadcast-programs"
          class="py-2 space-y-2"
          :class="{ hidden: !$route.path.startsWith('/broadcast-programs') }"
        >
          <template v-for="item in broadcastProgramMenuItems">
            <li>
              <NuxtLink
                :to="item.path"
                class="flex items-center w-full py-2 px-3 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
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
          class="flex items-center py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <GiftIcon
            class="inline-flex items-center transition duration-75 w-5 h-5"
          />
          <span class="ml-3">Акции и события</span>
        </NuxtLink>
      </li>
      <!-- END: promotions menu -->

      <!-- START: media menu -->
      <li>
        <NuxtLink
          to="/media"
          class="flex items-center py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <ImageIcon
            class="inline-flex items-center transition duration-75 w-5 h-5"
          />
          <span class="ml-3">Фото и видео</span>
        </NuxtLink>
      </li>
      <!-- END: media menu -->

      <!-- START: presenters menu -->
      <li>
        <NuxtLink
          to="/presenters"
          class="flex items-center py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <ImageIcon
            class="inline-flex items-center transition duration-75 w-5 h-5"
          />
          <span class="ml-3">Ведущие</span>
        </NuxtLink>
      </li>
      <!-- END: presenters menu -->

      <!-- START: order-song menu -->
      <li>
        <NuxtLink
          to="/order-song"
          class="flex items-center py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 group"
        >
          <ImageIcon
            class="inline-flex items-center transition duration-75 w-5 h-5"
          />
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
