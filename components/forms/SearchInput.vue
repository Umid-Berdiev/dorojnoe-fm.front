<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      placeholder?: string;
    }>(),
    {
      placeholder: "Поиск",
    }
  );
</script>

<template>
  <div class="relative h-fit">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
    >
      <SearchIcon />
    </div>
    <input
      type="search"
      class="default-search-input"
      :placeholder="placeholder"
      required
    />
  </div>
</template>

<style scoped lang="scss">
  .default-search-input {
    color: var(--main-grey, #a7a7a7);
    // border: 1px solid #dbdbdb;
    @apply border
    border-[#dbdbdb]
    text-sm
    lg:text-base
    block
    w-full
    py-[7px]
    pl-10
    text-gray-900
    rounded-3xl
    bg-white
    focus:ring-blue-500
    focus:border-blue-500
    font-inter;
  }
</style>
