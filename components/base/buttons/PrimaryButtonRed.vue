<script setup lang="ts">
  withDefaults(
    defineProps<{
      loading: boolean;
    }>(),
    {
      loading: false,
    }
  );
</script>

<template>
  <button
    type="button"
    class="text-base text-white bg-firebrick hover:bg-red-700 rounded-full px-4 py-2.5 text-center font-inter"
    :disabled="loading"
  >
    <p class="inline-flex gap-3 items-center">
      <LoadingIcon v-show="loading" />
      <span>
        <slot />
      </span>
    </p>
  </button>
</template>

<style scoped lang="scss">
  button:disabled {
    color: lightgray;
    cursor: not-allowed;
  }
</style>
