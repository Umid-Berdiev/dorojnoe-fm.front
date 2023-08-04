<script lang="ts" setup>
  function onCloseSidebar() {
    const sidebar = document.getElementById("sidebar");
    const sidebarOpenIcon = document.getElementById("sidebarOpenIcon");
    const mainContent = document.getElementById("mainContent");
    console.log(sidebar.classList);

    if (sidebar) {
      sidebar.classList.add("d-none");
      sidebarOpenIcon.classList.remove("d-none");
      mainContent.className = "col-12";
    }
  }

  function onOpenSidebar() {
    const sidebar = document.getElementById("sidebar");
    const sidebarOpenIcon = document.getElementById("sidebarOpenIcon");
    const mainContent = document.getElementById("mainContent");
    console.log(sidebar.classList);

    if (sidebar) {
      sidebar.classList.remove("d-none");
      sidebarOpenIcon.classList.add("d-none");
      mainContent.className = "col-12 col-md-8 col-lg-9";
    }
  }
</script>

<template>
  <img
    id="sidebarOpenIcon"
    class="open-icon position-absolute d-none"
    src="@/assets/icons/SidebarOpenCloseIcon.png"
    alt="OpenIcon"
    @click="onOpenSidebar"
  />
  <div class="default container-fluid">
    <div class="row">
      <TheSidebar id="sidebar" @toggle-sidebar="onCloseSidebar" />
      <div id="mainContent" class="col-12 col-md-8 col-lg-9">
        <TheBreadcrumb />
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .default {
    background: #f8f8fa;

    .row {
      min-height: 100vh;
    }
  }

  .open-icon {
    left: -0.9rem;
    top: 10rem;
  }
</style>
