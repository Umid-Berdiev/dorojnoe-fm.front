<script lang="ts" setup>
  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <label :for="$attrs.id">
    <input type="radio" class="hidden peer" v-bind="$attrs" />
    <span
      class="flex items-center px-4 py-2.5 bg-white text-black peer-checked:bg-red-500 peer-checked:text-white rounded-43xl cursor-pointer hover:bg-red-500 hover:text-white text-sm lg:text-base leading-5"
    >
      <slot>
        {{ $attrs.label }}
      </slot>
    </span>
  </label>
</template>
