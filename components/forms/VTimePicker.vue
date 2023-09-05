<script setup lang="ts">
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from "@headlessui/vue";
  import SimpleBar from "simplebar-vue";
  import "simplebar-vue/dist/simplebar.min.css";

  interface TimepickerProps {
    modelValue?: string;
    prefix?: string;
  }

  const props = withDefaults(defineProps<TimepickerProps>(), {
    modelValue: "07:00",
    prefix: "",
  });

  const emits = defineEmits<{
    (e: "update:modelValue", value: string | number): void;
  }>();

  const options = ref([
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
  ]);
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
        class="flex align-middle bg-white pl-4 py-2.5 gap-2 text-center w-40 lg:w-24 text-sm lg:text-base font-inter leading-5"
        :class="{ 'rounded-3xl': !open, 'rounded-t-3xl': open }"
      >
        <span class="pointer-events-none items-center">{{ prefix }}</span>
        <span class="block truncate">{{ selectedOption }}</span>
      </ListboxButton>

      <Transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="text-sm lg:text-base font-inter absolute mt-1 max-h-60 w-full overflow-auto rounded-b-3xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <SimpleBar data-simplebar-auto-hide="false" class="h-40">
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="option in options"
              :key="option"
              :value="option"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-4 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
                >
                  {{ option }}
                </span>
              </li>
            </ListboxOption>
          </SimpleBar>
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
</template>
