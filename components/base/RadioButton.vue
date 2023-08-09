<script lang="ts" setup>
  // defineProps<{
  //   name: string;
  //   value: string;
  // }>();

  const attrs = useAttrs();
  defineOptions({
    inheritAttrs: false,
  });
</script>

<template>
  <div>
    <input type="radio" class="hidden peer" v-bind="$attrs" />
    <label
      :for="attrs.id"
      class="flex items-center px-4 py-2.5 bg-white text-black peer-checked:bg-red-500 peer-checked:text-white rounded-43xl cursor-pointer hover:bg-gray-200"
    >
      <div class="block">
        {{ attrs.value }}
      </div>
    </label>
  </div>
</template>
