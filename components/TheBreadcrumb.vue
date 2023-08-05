<script lang="ts" setup></script>

<template>
  <nav class="flex mb-14" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <a
          href="#"
          class="inline-flex items-center text-base font-medium text-gray-700 hover:text-blue-600"
        >
          Главная
        </a>
      </li>
      <li>
        <div class="flex items-center">
          /
          <a
            href="#"
            class="ml-1 text-base font-medium text-gray-700 hover:text-blue-600 md:ml-2"
            >Радиостанция</a
          >
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          /
          <span class="ml-1 text-base font-medium text-gray-500 md:ml-2"
            >Плейлист</span
          >
        </div>
      </li>
    </ol>
  </nav>
</template>

<style></style>
