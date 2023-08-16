<script lang="ts" setup>
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
      class="hidden lg:block chevron-double-left-icon fixed top-[25rem] right-[348px] cursor-pointer"
      @click="toggleSidebar"
    />

    <ChevronDoubleRightIcon
      v-if="!isSidebarOpen"
      class="hidden lg:block chevron-double-right-icon fixed top-[25rem] left-[16.7rem] cursor-pointer"
      @click="toggleSidebar"
    />

    <div class="flex w-full h-full overflow-y-auto">
      <LeftSection />
      <div v-if="isSidebarOpen" class="flex-auto inline-flex w-full">
        <CenterSection />
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
    transition: width 0.5s ease;
    @apply hidden lg:block fixed top-0 left-0 z-40 h-screen bg-white;

    .right-block {
      @apply bg-main-bg-light flex flex-col items-start shrink-0 lg:w-[348px] p-8 ml-auto;
    }
  }
</style>
