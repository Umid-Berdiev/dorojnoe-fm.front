<script setup lang="ts">
  const streams = ref([
    {
      image: "/assets/images/sidebar_streams1.png",
      title: "Дорожное радио",
    },
    {
      image: "/assets/images/sidebar_streams2.png",
      title: "Танцпол",
    },
    {
      image: "/assets/images/sidebar_streams3.png",
      title: "Рок клуб",
    },
    {
      image: "/assets/images/sidebar_streams4.png",
      title: "Настольгия",
    },
  ]);
</script>

<template>
  <div class="grid lg:grid-cols-4 w-full lg:gap-12">
    <template v-for="item in streams">
      <div class="">
        <img
          :srcset="`${item.image} 1x, ${item.image} 2x`"
          alt="Stream cover image"
          class="w-full rounded-2xl"
        />
        <p
          class="font-roboto-condensed text-sm font-bold mt-3 whitespace-break-spaces"
        >
          {{ item.title }}
        </p>
      </div>
    </template>
  </div>
</template>
