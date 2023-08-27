<script lang="ts" setup>
  defineProps<{
    path: string[];
  }>();

  const route = useRoute();

  const routeLinks = computed(() => {
    const routePathArr = route.path.split("/");
    if (routePathArr.length > 1) routePathArr.shift();
    return routePathArr;
  });
</script>

<template>
  <nav class="hidden lg:flex mb-6 md:mb-14" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <NuxtLink to="/" class="inline-flex items-center text-base">
          Главная
        </NuxtLink>
      </li>
      <!-- <li v-if="path[0]">
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
          <p
            class="ml-1 text-base text-main-grey md:ml-2 lg:max-w-[300px] truncate"
          >
            {{ path[1] }}
          </p>
        </div>
      </li> -->
      <template v-for="(link, linkIdx) in path">
        <li>
          <p class="flex items-center text-base">
            /
            <span
              v-if="linkIdx === path.length - 1"
              class="text-main-grey ml-1 lg:ml-2 lg:max-w-[300px] truncate"
            >
              {{ link }}
            </span>
            <NuxtLink
              v-else
              :to="`/${routeLinks.slice(0, linkIdx + 1).join('/')}`"
              :class="['ml-1 lg:ml-2']"
            >
              {{ link }}
            </NuxtLink>
          </p>
        </li>
      </template>
    </ol>
  </nav>
</template>

<style></style>
