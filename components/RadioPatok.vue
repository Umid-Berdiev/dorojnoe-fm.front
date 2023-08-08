<script setup lang="ts">
const emit = defineEmits<{
  (e: "toggleRadio"): void;
}>();

// functions
function toggleRadio() {
  emit("toggleRadio");
}
</script>
<template>
  <div
    class="transition-all duration-300 md:verflow-x-hidden overflow-y-hidden top-1/4 md:top-0 w-full bottom-0 fixed z-20 bg-white"
  >
    <SidebarToggleButton
      class="hidden md:block absolute right-[18%] top-1/4 cursor-pointer rotate-180"
      @click="toggleRadio"
    />
    <div class="pt-6 px-3">
      <div class="">Потоки</div>
    </div>
  </div>
</template>
