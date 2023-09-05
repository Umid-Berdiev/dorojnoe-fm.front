<script lang="ts" setup>
  defineProps<{
    path: string[];
  }>();

  const route = useRoute();

  const routeLinks = computed(() => {
    const filteredRoute = route.path.includes("radiostation")
      ? "/"
      : route.path;
    const routePathArr = filteredRoute.split("/");
    if (routePathArr.length > 1) routePathArr.shift();
    return routePathArr;
  });
</script>

<template>
  <nav class="hidden lg:flex mb-6 lg:mb-14" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 lg:space-x-3">
      <li class="inline-flex items-center">
        <NuxtLink to="/" class="inline-flex items-center text-base">
          Главная
        </NuxtLink>
      </li>
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
            <span v-else-if="link === 'Радиостанция'" class="ml-1 lg:ml-2">{{
              link
            }}</span>
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
