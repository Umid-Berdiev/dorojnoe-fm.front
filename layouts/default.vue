<script lang="ts" setup></script>

<template>
  <div class="default">
    <TheSidebar />
    <TheMobileSidebar />
    <main
      id="main-content"
      class="lg:ml-[280px] w-full lg:w-auto relative bg-inherit"
    >
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
  .default {
    @apply max-w-7xl relative bg-main-bg-light mx-auto lg:shadow lg:shadow-main-grey;

    .toggle-icon {
      left: -0.9rem;
      top: 10rem;
      z-index: 1000;
    }
  }
</style>
