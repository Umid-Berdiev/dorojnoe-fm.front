<script lang="ts" setup>
  const props = defineProps<{
    modelValue?: string | number | null;
  }>();

  const emits = defineEmits<{
    (e: "update:modelValue", value: number | null): void;
  }>();

  defineOptions({
    inheritAttrs: false,
  });

  const computedModelValue = computed({
    get() {
      return props.modelValue;
    },
    set(val: number | null) {
      emits("update:modelValue", val);
    },
  });
</script>

<template>
  <label
    class="flex items-center px-4 py-2.5 text-black rounded-43xl cursor-pointer hover:bg-red-500 hover:text-white text-sm lg:text-base leading-5"
    :class="[
      $attrs.value === computedModelValue
        ? 'bg-red-500 text-white'
        : $attrs.class + ' text-black',
    ]"
  >
    <input
      type="radio"
      class="hidden peer"
      v-bind="$attrs"
      v-model="computedModelValue"
    />
    <slot>
      {{ $attrs.label }}
    </slot>
  </label>
</template>
