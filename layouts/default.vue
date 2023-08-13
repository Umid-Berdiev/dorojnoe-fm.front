<script lang="ts" setup>
  const sidebarOpen = ref(false);
</script>

<template>
  <div class="default">
    <TheSidebar />
    <main
      id="main-content"
      class="sm:ml-64 w-auto relative px-3 md:px-8 pt-5 md:pt-6 bg-inherit"
    >
      <slot />
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<style scoped lang="scss">
  .default {
    @apply bg-main-bg-light mx-auto;
    // max-width: 1280px;
    position: relative;

    .toggle-icon {
      left: -0.9rem;
      top: 10rem;
    }
  }

  .sidebar-open {
    margin-left: -16rem; /* Sidebar ochilganda kengaytirish */
  }

  .toggle-icon {
    left: -0.9rem;
    top: 10rem;
    transition: left 0.3s ease-in-out;
  }
</style>
