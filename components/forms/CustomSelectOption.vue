<script setup lang="ts">
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from "@headlessui/vue";
  import {
    CheckIcon,
    ChevronUpIcon,
    ChevronDownIcon,
  } from "@heroicons/vue/20/solid";
  import SimpleBar from "simplebar-vue";
  import "simplebar-vue/dist/simplebar.min.css";

  interface CustomSelectProps {
    options: any[];
    placeholder?: string;
    modelValue?: string | number;
    asValue: string;
    asLabel: string;
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
      <!-- <span
        v-if="selected"
        class="inset-y-0 flex items-center pl-3 text-gray-600"
      >
        <CheckIcon class="h-5 w-5" aria-hidden="true" />
      </span> -->
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
