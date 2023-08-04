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

  function onOpenSidebar() {
    const sidebar = document.getElementById("sidebar");
    const sidebarOpenIcon = document.getElementById("sidebarOpenIcon");
    const mainContent = document.getElementById("mainContent");

    if (sidebar) {
      console.log("ok");

      sidebar.classList.remove("animate__fadeOutLeft");
      sidebar.classList.add("animate__fadeInLeft");
      sidebarOpenIcon?.classList.add("d-none");
      if (mainContent)
        mainContent.className =
          "col-12 col-md-8 col-lg-9 animate__animated animate__fadeInLeft";
    }
  }

  function onToggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");

    if (sidebar && mainContent) {
      console.log("ok");

      sidebar.classList.toggle("animate__fadeInLeft");
      sidebar.classList.toggle("animate__fadeOutLeft");
      sidebar.classList.toggle("d-none");
      // mainContent.classList.toggle("animate__fadeInLeft");
      // mainContent.classList.toggle("animate__fadeOutLeft");
    }
  }
</script>

<template>
  <UContainer class="default">
    <TheSidebar id="sidebar" @toggle-sidebar="onCloseSidebar" />
    <UCard class="w-screen">
      <div class="" id="main-content">
        <img
          id="sidebarToggleIcon"
          class="toggle-icon position-absolute"
          src="@/assets/icons/SidebarOpenCloseIcon.png"
          alt="OpenIcon"
          @click="onToggleSidebar"
        />
      </div>
      <TheBreadcrumb />
      <slot />

      <template #footer>
        <TheFooter />
      </template>
    </UCard>
  </UContainer>
</template>

<style scoped lang="scss">
  .default {
    background: #f8f8fa;
    display: flex;

    .toggle-icon {
      left: -0.9rem;
      top: 10rem;
    }
  }
</style>
