<script setup lang="ts">
  import PlaylistItem from "./PlaylistItem.vue";
  import PrimaryButton from "@/components/buttons/PrimaryButton.vue";

  //
</script>

<template>
  <div class="container">
    <ul role="list" class="divide-y divide-gray-200 min-h-screen mt-9 mb-16">
      <PlaylistItem v-for="item in 5" />
    </ul>
    <PrimaryButton> Больше результатов </PrimaryButton>
  </div>
</template>

<style scoped lang="scss">
  //
</style>
