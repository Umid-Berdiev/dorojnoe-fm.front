<script lang="ts" setup>
  import IconLogo from "@/components/icons/iconLogo.vue";
  import IconStar from "@/components/icons/iconStar.vue";
  import IconVote from "@/components/icons/iconVote.vue";
  import IconArrowDown from "@/components/icons/iconArrowDown.vue";

  const isSidebarOpen = ref(false);

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
  }
</script>

<template>
  <aside
    class="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white"
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
        <div class="flex-auto">asdasdasd</div>
        <div class="right-block">sdzxczxczxc</div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
  .chevron-double-right-icon {
    right: -3.9rem;
    top: 25rem;
    transition: left 0.3s ease-in-out;
  }

  .chevron-double-left-icon {
    right: 348px;
    top: 25rem;
    transition: left 0.3s ease-in-out;
  }

  .left-block {
    @apply pt-4 pr-4 pl-6 lg:w-[280px];
  }

  .right-block {
    @apply bg-main-bg-light flex flex-col items-center shrink-0 lg:w-[348px] p-8 ml-auto;
  }
</style>
