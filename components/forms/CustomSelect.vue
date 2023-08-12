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
  <Listbox v-model="selectedOption" v-slot="{ open }">
    <div class="relative">
      <ListboxButton
        class="custom-select-btn"
        :class="{ 'rounded-3xl': !open, 'rounded-t-3xl': open }"
      >
        <span class="block truncate">{{
          options.find((option) => option[asValue] === selectedOption)[asLabel]
        }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronUpIcon v-if="open" class="h-5 w-5" aria-hidden="true" />
          <ChevronDownIcon v-else class="h-5 w-5" aria-hidden="true" />
        </span>
      </ListboxButton>

      <Transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="options-wrapper absolute mt-1 max-h-60 w-full overflow-auto rounded-b-3xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        >
          <SimpleBar data-simplebar-auto-hide="false" class="h-40">
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="option in options"
              :key="option[asLabel]"
              :value="option[asValue]"
              as="template"
              class="text-sm lg:text-base font-inter"
            >
              <li
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                  >{{ option[asLabel] }}</span
                >
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </SimpleBar>
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
</template>

<style scoped lang="scss">
  .custom-select-btn {
    @apply flex py-2.5 pl-4 pr-8 items-center gap-2 bg-white font-inter relative text-left text-sm lg:text-base w-full leading-5;
  }

  .options-wrapper {
    @apply text-base;
  }
</style>
