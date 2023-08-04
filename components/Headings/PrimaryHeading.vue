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
    gap: 16px;

    .content {
      color: #162826;
      font-family: Roboto Condensed;
      font-size: 24px;
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
