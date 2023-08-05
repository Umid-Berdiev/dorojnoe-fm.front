<script lang="ts" setup>
const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<template>
  <div class="default overflow-hidden block md:flex">
    <HeaderMobile />
    <TheSidebar
      class="hidden md:block"
      :class="{ 'sidebar-open': sidebarOpen }"
    />
    <main
      id="main-content"
      class="mt-20 md:mt-0 min-h-screen w-auto relative p-4"
    >
      <img
        id="sidebarToggleIcon"
        class="hidden md:block toggle-icon absolute cursor-pointer"
        src="@/assets/icons/SidebarOpenCloseIcon.png"
        alt="OpenIcon"
        @click="toggleSidebar"
      />
      <slot />
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<style scoped lang="scss">
.default {
  background: #f8f8fa;

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
