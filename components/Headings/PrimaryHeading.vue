<script lang="ts" setup>
  withDefaults(
    defineProps<{
      underlined: boolean;
    }>(),
    {
      underlined: false,
    }
  );
</script>

<template>
  <div class="primary-heading">
    <span class="content">
      <slot />
    </span>
    <div v-if="underlined" class="line bg-primary" />
  </div>
</template>

<style scoped lang="scss">
  .primary-heading {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;

    .content {
      color: #162826;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      @apply font-roboto;
    }

    .line {
      width: 80px;
      height: 4px;
      // background: #da3832;
    }
  }
</style>
