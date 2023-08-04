<script lang="ts" setup>
  //
</script>

<template>
  <Transition name="toggle">
    <div class="sidebar col-12 col-md-4 col-lg-3 bg-white position-relative">
      <img
        class="close-icon position-absolute"
        src="@/assets/icons/SidebarOpenCloseIcon.png"
        alt="CloseIcon"
        @click="$emit('toggle-sidebar')"
      />
      <nav class="nav flex-column">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </nav>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
  /* we will explain what these classes do next! */
  .toggle-enter-active,
  .toggle-leave-active {
    transition: all 1s ease-in;
  }

  .toggle-enter-from,
  .toggle-leave-to {
    opacity: 0;
  }

  .close-icon {
    right: -3.9rem;
    top: 10rem;
  }
</style>
