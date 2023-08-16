<script lang="ts" setup>
  import IconLogo from "@/components/icons/iconLogo.vue";
  import IconStar from "@/components/icons/iconStar.vue";
  import IconVote from "@/components/icons/iconVote.vue";
  import IconArrowDown from "@/components/icons/iconArrowDown.vue";
  import { newsCategories } from "@/utils/mockdata/news";

  const isSidebarOpen = ref(false);

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
  }
</script>

<template>
  <aside
    class="sidebar-wrapper"
    :class="{ 'w-screen': isSidebarOpen, 'w-[280px]': !isSidebarOpen }"
  >
    <ChevronDoubleLeftIcon
      v-if="isSidebarOpen"
      class="hidden lg:block chevron-double-left-icon absolute cursor-pointer"
      @click="toggleSidebar"
    />

    <ChevronDoubleRightIcon
      v-if="!isSidebarOpen"
      class="hidden lg:block chevron-double-right-icon absolute cursor-pointer"
      @click="toggleSidebar"
    />

    <div class="flex w-full h-full overflow-y-auto">
      <div class="left-block flex-none">
        <div class="logo mb-4 w-[160px] max-h-[138px] mx-auto">
          <NuxtLink to="/">
            <IconLogo />
          </NuxtLink>
        </div>
        <div class="radio-channel mb-6 cursor-pointer">
          <div class="dropdown flex gap-2 items-center">
            <div class="drop-icon mr-2">
              <IconStar />
            </div>
            <div class="channel-name">
              <span>Москва</span>
              <span>/</span>
              <span>96,0 FM</span>
            </div>
            <div class="icon">
              <IconArrowDown />
            </div>
          </div>
        </div>
        <div class="radio-player">
          <RadioPlayer />
        </div>
        <div class="vote mb-3.5">
          <button type="button">
            <IconVote class="w-full" />
          </button>
        </div>
        <NavLink />
      </div>
      <div v-if="isSidebarOpen" class="flex-auto inline-flex w-full">
        <div class="center-block">
          <!-- advertising -->
          <div class="advertising-block">
            <img
              srcset="/assets/images/BG5.png 1x, /assets/images/BG5.png 2x"
              alt="Advertising image"
              class="w-full"
            />
          </div>
          <SecondaryHeading class="mt-8">Потоки</SecondaryHeading>
          <StreamBlock />
          <button
            class="mt-7 rounded-43xl bg-main-bg-light py-2.5 px-4 font-inter text-base font-medium leading-[18px]"
          >
            Плейлист
          </button>
          <SecondaryHeading class="mt-16">Подкасты</SecondaryHeading>
          <!-- news categories -->
          <div class="hidden lg:flex lg:flex-wrap lg:gap-3">
            <template
              v-for="(item, itemIndex) in newsCategories"
              :key="itemIndex"
            >
              <RadioButton
                class="bg-main-bg-light"
                :id="item"
                name="category"
                :value="item"
              >
                {{ item }}
              </RadioButton>
            </template>
          </div>
          <!-- podcasts -->
          <PodcastBlock class="mt-16" />
          <button
            class="mt-7 rounded-43xl bg-main-bg-light py-2.5 px-4 font-inter text-base font-medium leading-[18px]"
          >
            Все
          </button>
        </div>
        <div class="right-block">
          <img
            srcset="/assets/images/BG4.png 1x, /assets/images/BG4.png 2x"
            alt="Advertising image"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
  @import "animate.css";

  .sidebar-wrapper {
    transition: width 1s ease;
    @apply hidden lg:block fixed top-0 left-0 z-40 h-screen bg-white;

    .chevron-double-right-icon {
      right: -3.9rem;
      top: 25rem;
    }

    .chevron-double-left-icon {
      right: 348px;
      top: 25rem;
    }

    .left-block {
      @apply pt-4 pr-4 pl-6 lg:w-[280px];
    }

    .right-block {
      @apply bg-main-bg-light flex flex-col items-start shrink-0 lg:w-[348px] p-8 ml-auto;
    }

    .center-block {
      @apply flex-auto p-8;
    }
  }
</style>
