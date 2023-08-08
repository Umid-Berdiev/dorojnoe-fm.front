<template>
  <div class="relative">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
    >
      <SearchIcon />
    </div>
    <input
      type="search"
      id="default-search"
      class="text-base block w-full p-2.5 pl-10 text-gray-900 rounded-3xl bg-white focus:ring-blue-500 focus:border-blue-500"
      placeholder="Поиск"
      required
    />
  </div>
</template>

<style scoped lang="scss">
  #default-search {
    color: var(--main-grey, #a7a7a7);
    border: 1px solid #dbdbdb;
  }
</style>
