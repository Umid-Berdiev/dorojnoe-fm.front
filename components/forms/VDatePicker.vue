<script setup lang="ts">
  import { DatePicker } from "v-calendar";
  import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
  import "v-calendar/style.css";

  const props = withDefaults(
    defineProps<{
      modelValue?: string;
      label?: string;
      errorText?: string;
    }>(),
    {
      modelValue: new Date().toDateString(),
    }
  );

  const emits = defineEmits<{
    (e: "update:modelValue", value: string): void;
    (e: "editing"): void;
  }>();

  const locale = "ru-RU";
  const isOpen = ref(false);
  const masks = ref({
    input: "DD.MM.YYYY",
  });
  const datePickerModelConfig = reactive({
    type: "string",
    mask: "YYYY-MM-DD", // Uses 'iso' if missing
  });

  const computedDate = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emits("update:modelValue", val);
    },
  });
</script>

<template>
  <ClientOnly>
    <DatePicker
      v-model="computedDate"
      mode="date"
      :locale="{ id: locale, firstDayOfWeek: 2, masks: { weekdays: 'WW' } }"
      :masks="masks"
      :model-config="datePickerModelConfig"
      color="green"
      trim-weeks
      :popover="{ visibility: 'click' }"
      @popover-will-show="isOpen = true"
      @popover-will-hide="isOpen = false"
      class="relative"
    >
      <template #default="{ togglePopover, inputValue }">
        <button class="datepicker-btn" color="white" @click="togglePopover">
          <!-- :ui="{ rounded: 'rounded-full' }" -->
          <!-- class="px-4 py-2 ring-transparent shadow-none font-normal hover:bg-white" -->
          <span>{{ inputValue }}</span>
          <span class="pointer-events-none">
            <ChevronUpIcon v-if="isOpen" class="h-5 w-5" aria-hidden="true" />
            <ChevronDownIcon v-else class="h-5 w-5" aria-hidden="true" />
          </span>
        </button>
      </template>
    </DatePicker>
  </ClientOnly>
</template>

<style scoped lang="scss">
  .datepicker-btn {
    @apply inline-flex 
    justify-between
    bg-white 
    rounded-3xl 
    gap-2 
    ring-transparent 
    hover:bg-white 
    shadow-none 
    text-sm 
    lg:text-base 
    items-center 
    font-inter 
    pl-4 
    pr-2 
    py-3 
    max-h-[40px];
  }
</style>
