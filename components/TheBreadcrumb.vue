<script lang="ts" setup></script>

<template>
  <nav class="hidden lg:flex mb-6 md:mb-14" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <NuxtLink
          href="#"
          class="inline-flex items-center text-base text-gray-700 hover:text-blue-600"
        >
          Главная
        </NuxtLink>
      </li>
      <li>
        <div class="flex items-center">
          /
          <NuxtLink
            href="#"
            class="ml-1 text-base text-gray-700 hover:text-blue-600 md:ml-2"
          >
            Радиостанция
          </NuxtLink>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          /
          <span class="ml-1 text-base text-main-grey md:ml-2"> Плейлист </span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<style></style>
