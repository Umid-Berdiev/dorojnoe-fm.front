<script lang="ts" setup>
  function onCloseSidebar() {
    const sidebar = document.getElementById("sidebar");
    const sidebarOpenIcon = document.getElementById("sidebarOpenIcon");
    const mainContent = document.getElementById("mainContent");

    if (sidebar) {
      sidebar.classList.remove("animate__fadeInLeft");
      sidebar.classList.add("animate__fadeOutLeft");
      sidebarOpenIcon?.classList.remove("d-none");
      if (mainContent)
        mainContent.className = "col-12 animate__animated animate__fadeOutLeft";
    }
  }
</script>

<template>
  <div class="default">
    <TheSidebar @toggle-sidebar="onCloseSidebar" />
    <main
      id="main-content"
      class="lg:ml-[280px] w-auto relative px-3 md:px-8 pt-5 md:pt-6 bg-inherit"
    >
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
  .default {
    max-width: 1280px;
    position: relative;
    @apply bg-main-bg-light mx-auto;

    .toggle-icon {
      left: -0.9rem;
      top: 10rem;
      z-index: 1000;
    }
  }
</style>
