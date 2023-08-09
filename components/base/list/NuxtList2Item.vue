<script lang="ts" setup>
  import { NuxtListItemProps } from "@/utils/interfaces";

  const props = defineProps<{
    item: NuxtListItemProps;
  }>();
</script>

<template>
  <li class="py-3 sm:py-4">
    <div
      class="flex text-base text-black uppercase space-between items-start self-stretch"
    >
      <span class="text-opacity-60 font-montserrat max-w-[9rem] lg:max-w-none">
        {{ item.label }}
      </span>
      <span
        class="ml-auto font-roboto-condensed text-right break-words max-w-[13rem] lg:max-w-none"
      >
        {{ item.value }}
      </span>
    </div>
  </li>
</template>
