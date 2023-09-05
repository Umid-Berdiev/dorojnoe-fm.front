<script setup lang="ts">
  import { NuxtListItemProps } from "@/utils/interfaces";

  const data = ref<NuxtListItemProps[]>([
    {
      title: "Запаска",
      subtitle: "Владимир Лебедев",
      right_text: "11:30 – 11:45",
      image: "~/assets/images/broadcast_item_1.png",
    },
    {
      title: "Запаска",
      subtitle: "Владимир Лебедев",
      right_text: "11:30 – 11:45",
      image: "~/assets/images/broadcast_item_1.png",
    },
    {
      title: "Запаска",
      subtitle: "Владимир Лебедев",
      right_text: "11:30 – 11:45",
      image: "~/assets/images/broadcast_item_1.png",
    },
    {
      title: "Запаска",
      subtitle: "Владимир Лебедев",
      right_text: "11:30 – 11:45",
      image: "~/assets/images/broadcast_item_1.png",
    },
    {
      title: "Запаска",
      subtitle: "Владимир Лебедев",
      right_text: "11:30 – 11:45",
      image: "~/assets/images/broadcast_item_1.png",
    },
    {
      title: "Запаска",
      subtitle: "Владимир Лебедев",
      right_text: "11:30 – 11:45",
      image: "~/assets/images/broadcast_item_1.png",
    },
    {
      title: "Запаска",
      subtitle: "Владимир Лебедев",
      right_text: "11:30 – 11:45",
      image: "~/assets/images/broadcast_item_1.png",
    },
  ]);
</script>

<template>
  <div class="">
    <NuxtList :data="data" />
    <button
      type="button"
      class="bg-white text-base font-medium rounded-43xl px-4 py-2.5 text-center mt-12 lg:mt-16"
    >
      Расписание по Москве
    </button>
  </div>
</template>

<style scoped lang="scss">
  //
</style>
