<script lang="ts" setup>
  import { NuxtListItemProps } from "@/utils/interfaces";

  const props = defineProps<{
    item: NuxtListItemProps;
  }>();
</script>

<template>
  <li class="py-3 sm:py-4">
    <div
      class="flex text-base text-black uppercase space-between items-start self-stretch gap-8"
    >
      <span class="text-opacity-60 font-montserrat">
        {{ item.label }}
      </span>
      <span class="ml-auto font-roboto-condensed text-right break-all">
        {{ item.value }}
      </span>
    </div>
  </li>
</template>
