<script lang="ts" setup>
  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <label :for="$attrs.id">
    <input type="radio" class="hidden peer" v-bind="$attrs" />
    <span>
      {{ $attrs.value }}
    </span>
  </label>
</template>

<style scoped lang="scss">
  label {
    @apply flex items-center px-4 py-2.5 bg-white text-black peer-checked:bg-red-500 peer-checked:text-white rounded-43xl cursor-pointer hover:bg-[#FE576F] hover:text-white text-sm lg:text-base;
  }
</style>
