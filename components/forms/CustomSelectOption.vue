<script setup lang="ts">
  import { ListboxOption } from "@headlessui/vue";
  import "simplebar-vue/dist/simplebar.min.css";

  interface CustomSelectProps {
    modelValue?: string | number;
  }

  const props = withDefaults(defineProps<CustomSelectProps>(), {
    modelValue: "",
    placeholder: "Select",
    asValue: "value",
    asLabel: "label",
  });

  const emits = defineEmits<{
    (e: "update:modelValue", value: string | number): void;
  }>();

  const selectedOption = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emits("update:modelValue", value);
    },
  });
</script>

<template>
  <ListboxOption
    v-slot="{ active, selected }"
    as="template"
    class="text-sm lg:text-base font-inter"
  >
    <li
      :class="[
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-900',
        'relative cursor-default select-none py-2 px-4',
      ]"
    >
      <span
        :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']"
      >
        <slot></slot>
      </span>
    </li>
  </ListboxOption>
</template>

<style scoped lang="scss">
  //
</style>
