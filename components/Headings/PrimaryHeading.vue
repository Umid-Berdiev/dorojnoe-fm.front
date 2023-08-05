<script lang="ts" setup></script>

<template>
  <div class="primary-heading">
    <span class="content">
      <slot />
    </span>
    <div class="line" />
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
      font-family: Roboto Condensed;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }

    .line {
      width: 80px;
      height: 4px;
      background: #da3832;
    }
  }
</style>
