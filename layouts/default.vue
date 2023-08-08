<script lang="ts" setup>
const sidebarOpen = ref(false);

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
</script>

<template>
  <div class="default overflow-hidden block md:flex">
    <HeaderMobile @toggle-radio="toggleSidebar" />
    <TheSidebar class="hidden md:block" />
    <main
      id="main-content"
      class="sm:ml-64 w-auto relative px-3 md:px-8 pt-5 md:pt-6 bg-inherit"
      @click="sidebarOpen = false"
    >
      <RadioPatok
        :class="{ 'ml-0 md:ml-[100%] md:mt-0 mt-[100%]': !sidebarOpen }"
        @toggle-radio="toggleSidebar"
      />

      <SidebarToggleButton
        id="sidebarToggleIcon"
        class="hidden md:block toggle-icon absolute cursor-pointer"
        @click="toggleSidebar"
      />

      <slot @click="toggleSidebar" />
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

// .sidebar-open {
//   margin-left: 100%; /* Sidebar ochilganda kengaytirish */
// }

.toggle-icon {
  left: -0.9rem;
  top: 10rem;
  transition: left 0.3s ease-in-out;
}
</style>
