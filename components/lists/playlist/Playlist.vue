<script setup lang="ts">
  //
</script>

<template>
  <div class="container">
    <ul role="list" class="divide-y divide-gray-200 mt-9 mb-16">
      <template v-for="item in 5">
        <PlaylistItem />
      </template>
    </ul>
    <PrimaryButtonRed> Больше результатов </PrimaryButtonRed>
  </div>
</template>

<style scoped lang="scss">
  //
</style>
