<script lang="ts" setup>
  defineProps<{
    path: string[];
  }>();

  const route = useRoute();
</script>

<template>
  <nav class="hidden lg:flex mb-6 md:mb-14" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-base text-gray-700 hover:text-blue-600"
        >
          Главная
        </NuxtLink>
      </li>
      <li v-if="path[0]">
        <div class="flex items-center">
          /
          <NuxtLink
            to="/"
            :class="[
              'ml-1 text-base text-gray-700 hover:text-blue-600 md:ml-2',
              path.length === 1 && 'text-main-grey',
            ]"
          >
            {{ path[0] }}
          </NuxtLink>
        </div>
      </li>
      <li aria-current="page" v-if="path[1]">
        <div class="flex items-center">
          /
          <span class="ml-1 text-base text-main-grey md:ml-2">
            {{ path[1] }}
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<style></style>
