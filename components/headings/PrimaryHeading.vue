<script lang="ts" setup>
  withDefaults(
    defineProps<{
      underlined?: boolean;
    }>(),
    {
      underlined: false,
    }
  );
</script>

<template>
  <div class="primary-heading text-[1.5rem] mb-6 lg:mb-8">
    <h1 class="content">
      <slot />
    </h1>
    <div v-if="underlined" class="line bg-firebrick" />
  </div>
</template>

<style scoped lang="scss">
  .primary-heading {
    @apply inline-flex flex-col items-start gap-3.5 lg:gap-4;

    .content {
      @apply font-roboto-condensed text-gray2 font-bold uppercase;
    }

    .line {
      @apply w-18 h-[3px] lg:h-1 lg:w-20;
    }
  }
</style>
