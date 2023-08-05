<script setup lang="ts">
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from "@headlessui/vue";
  import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
  import SimpleBar from "simplebar-vue";
  import "simplebar-vue/dist/simplebar.min.css";

  interface TimepickerProps {
    placeholder?: string;
    modelValue?: string;
  }

  const props = withDefaults(defineProps<TimepickerProps>(), {
    modelValue: "07:00",
    placeholder: "Select",
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
        class="timepicker-btn relative text-left sm:text-sm"
        :class="{ 'rounded-2xl': !open, 'rounded-t-2xl': open }"
      >
        <span class="block truncate">{{ selectedOption }}</span>
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
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-b-2xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50"
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
                  >{{ option }}</span
                >
                <!-- <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span> -->
              </li>
            </ListboxOption>
          </SimpleBar>
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
</template>

<style scoped lang="scss">
  .timepicker-btn {
    display: flex;
    padding: 10px 40px 10px 16px;
    align-items: center;
    gap: 8px;
    // border-radius: 62px;
    background: #fff;
    color: var(--main-b-lack, #222);
    // font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
  }
</style>
