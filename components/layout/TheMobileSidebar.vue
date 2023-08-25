<template>
  <header class="mobile-sidebar-wrapper">
    <LogoIcon class="w-18 h-[60px]" />
    <div class="ml-6 flex items-center gap-2">
      <StarIcon />
      <span class="font-inter text-base font-bold">Москва</span>
    </div>
    <button type="button" class="ml-auto">
      <HumburgerIcon class="w-8 h-8" />
    </button>
  </header>
</template>

<style scoped lang="scss">
  .mobile-sidebar-wrapper {
    @apply flex items-center lg:hidden w-full h-auto bg-white p-3;
  }
</style>
