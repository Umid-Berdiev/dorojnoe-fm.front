<script lang="ts" setup></script>

<template>
  <li class="py-3 sm:py-4">
    <div
      class="flex text-base text-black text-opacity-60 font-montserrat uppercase justify-between items-center self-stretch"
    >
      <div class="inline-flex items-center max-w-[12rem] lg:max-w-none">
        <slot name="left"></slot>
      </div>
      <div class="text-right">
        <slot name="right"></slot>
      </div>
    </div>
  </li>
</template>
