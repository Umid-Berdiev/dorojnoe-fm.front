<script setup lang="ts">
  const podcasts = ref([
    {
      title: "Запаска",
      body: "Контролируем погоду, храним шины и вспоминаем историю",
      date: "23.12.2022",
      duration: "1 мин",
    },
    {
      title: "Запаска",
      body: "Тонкости хранения резины",
      date: "22.12.2022",
      duration: "2 мин",
    },
    {
      title: "Путешествие с удовольствием",
      body: "Японский сад в Краснодаре. Туризм в Калуге. Малоизвестные музеи Египта",
      date: "20.12.2022",
      duration: "3 мин",
    },
    {
      title: "Прогулки со смирновым",
      body: "История недавно пострадавшей от пожара усадьбы Лопухиных",
      date: "20.12.2022",
      duration: "2 мин",
    },
    {
      title: "Путешествие с удовольствием",
      body: "Ресторанный фестиваль в Санкт-Петербурге. Курорт «Белокуриха». Авиатуризм будущего",
      date: "20.12.2022",
      duration: "3 мин",
    },
    {
      title: "Вояж",
      body: "Монголия: что смотреть в самой популярной у российских туристов стране?",
      date: "20.12.2022",
      duration: "2 мин",
    },
    {
      title: "Расскажи мне про искусство",
      body: "Искусство в цифрах - Александр Шаров (Галерея 11.12)",
      date: "20.12.2022",
      duration: "17 мин",
    },
  ]);
</script>

<template>
  <div class="grid lg:grid-cols-2 lg:gap-8">
    <template v-for="(item, itemIndex) in podcasts">
      <!-- <template v-if="itemIndex === 4">
        <div class=""></div>
      </template> -->
      <div class="flex gap-3">
        <div>
          <img
            src="/assets/images/podcast_play_icon.png"
            alt="Podcast play icon"
          />
        </div>
        <div class="flex flex-col">
          <h5 class="font-oswald font-medium text-sm uppercase">
            {{ item.title }}
          </h5>
          <p class="font-inter text-base mt-1.5">{{ item.body }}</p>
          <div
            class="inline-flex justify-between font-inter text-xs font-medium mt-2.5 opacity-60"
          >
            <span>{{ item.date }}</span>
            <span>{{ item.duration }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
