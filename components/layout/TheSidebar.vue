<script lang="ts" setup>
  const isSidebarOpen = ref(false);

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
  }
</script>

<template>
  <aside
    class="sidebar-wrapper"
    :class="{ 'w-[80rem]': isSidebarOpen, 'w-[280px]': !isSidebarOpen }"
    aria-label="Sidebar"
  >
    <ChevronDoubleRightIcon
      v-if="!isSidebarOpen"
      class="hidden lg:block chevron-double-right-icon absolute top-[25rem] left-[16.7rem] cursor-pointer z-50"
      @click="toggleSidebar"
    />
    <div class="flex w-full h-full">
      <LeftSection />
      <div
        v-show="isSidebarOpen"
        class="flex-auto inline-flex h-full overflow-y-auto"
      >
        <CenterSection />
        <div class="right-block">
          <ChevronDoubleLeftIcon
            v-if="isSidebarOpen"
            class="hidden lg:block chevron-double-left-icon absolute top-[25rem] left-[-53px] cursor-pointer z-50"
            @click="toggleSidebar"
          />

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
    transition: width 0.5s ease;
    @apply hidden lg:flex fixed top-0 z-40 h-screen bg-white pb-4;

    .right-block {
      @apply bg-main-bg-light flex flex-col items-start shrink-0 lg:w-[348px] p-8 relative h-full;
    }
  }
</style>
