<script lang="ts" setup>
  defineProps<{
    data: string;
  }>();
</script>

<template>
  <li>
    <input
      :id="data"
      type="radio"
      name="hosting"
      value="hosting-small"
      class="hidden peer"
      required
    />
    <label
      :for="data"
      class="flex items-center px-4 py-2.5 bg-white text-black peer-checked:bg-red-500 peer-checked:text-white rounded-43xl cursor-pointer hover:bg-gray-200"
    >
      <div class="block">
        {{ data }}
      </div>
    </label>
  </li>
</template>
