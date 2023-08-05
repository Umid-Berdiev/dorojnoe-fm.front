<script setup lang="ts">
  import PlaylistItem from "./PlaylistItem.vue";
  import PrimaryButton from "@/components/buttons/PrimaryButton.vue";

  //
</script>

<template>
  <ul role="list" class="divide-y divide-gray-200 min-h-screen mt-9">
    <PlaylistItem v-for="item in 5" />
  </ul>
  <PrimaryButton> Больше результатов </PrimaryButton>
</template>

<style scoped lang="scss">
  //
</style>
