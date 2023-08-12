<script setup lang="ts">
  import { newsCategories } from "@/utils/mockdata/news";

  const props = defineProps<{
    // id: number | string;
  }>();

  const route = useRoute();
  const paramsID = route.params.id;

  const item = ref({
    id: 789,
    category: "Музыкальные",
    title:
      "Саша Савельева высказалась о своём отсутствии на юбилейном концерте «Фабрики звёзд»",
    body: "В минувшие выходные в Москве прошёл концерт «Фабрики звёзд», приуроченный к 20-летию проекта. На сцену вышли многие артисты, которые стали популярны благодаря шоу. Выступила и группа «Фабрика». Правда, из звёзд, кто был в команде изначально, можно было заметить только Иру Тоневу. Остальные две девочки — новенькие.",
    date: "Вчера в 9:00",
    image: "/assets/images/news_cover_photo_2.png",
  });

  watchEffect(() => {
    if (paramsID) {
      //
    }
  });
</script>

<template>
  <TheMobileBreadcrumb>Новости</TheMobileBreadcrumb>
  <TheBreadcrumb :path="['Новости', item.title]" />
  <div class="max-w-[656px]">
    <div class="flex gap-2 mb-4 items-center">
      <PrimaryButtonWhite
        class="px-2.5 py-1.5 rounded-43xl font-inter text-sm"
        >{{ item.category }}</PrimaryButtonWhite
      >
      <p class="text-main-grey font-inter text-sm">{{ item.date }}</p>
    </div>
    <PrimaryHeading>{{ item.title }}</PrimaryHeading>
  </div>
  <div class="flex lg:gap-10">
    <div class="w-full lg:basis-3/4">
      <img
        :srcset="`${item.image} 1x, ${item.image} 2x`"
        alt="News cover image"
        class="w-full rounded-2xl"
      />
      <!-- advertising -->
      <div class="lg:hidden advertising-mobile-block mt-8">
        <img
          srcset="
            /assets/images/news_mobile_advertising.png 1x,
            /assets/images/news_mobile_advertising.png 2x
          "
          alt="Advertising"
          class="w-full"
        />
      </div>
      <div class="text-base my-8 lg:my-12 leading-6">
        <p>{{ item.body }}</p>
      </div>
      <img
        srcset="
          /assets/images/news_id_page_second_cover.png 1x,
          /assets/images/news_id_page_second_cover.png 2x
        "
        alt="News cover image"
        class="w-full rounded-2xl"
      />
      <div class="text-base my-8 lg:my-12 leading-6">
        <p>
          Фанаты не поняли, почему на один вечер коллектив не мог выступить
          «золотым составом» с Сати Казановой и Сашей Савельевой. На вопросы
          поклонников ответила одна из артисток.
        </p>
      </div>
      <div class="text-base my-8 lg:my-12">
        <p class="leading-6 font-bold border-l-2 pl-4 lg:pl-12">
          «Как жаль, что я не смогла принять участие в концерте, посвящённом
          20-летию «Фабрики звёзд». Если честно, я совершенно не понимаю,
          правда, я искренне не понимаю, не могу и мне бы хотелось разобраться в
          этом. Почему люди, те, кто участвовал в «Фабрике», те, кто успешно её
          прошел, почему многие не хотят себя связывать с «Фабрикой звёзд»? Ведь
          это такой большой шаг, это такая большая платформа для всех нас, кто
          смог себя реализовать дальше. Я понимаю, что, может быть, кто-то не
          смог реализовать себя так, как хотел», — заявила Савельева.
        </p>
        <p class="mt-8 text-main-grey font-semibold">
          Фото: из галереи соц. сетей артистки
        </p>
      </div>
      <!-- news categories -->
      <div class="hidden lg:flex lg:flex-wrap lg:gap-x-3 lg:gap-y-4 lg:mb-12">
        <template v-for="(item, itemIndex) in newsCategories" :key="itemIndex">
          <RadioButton :id="item" name="category" :value="item">
            {{ item }}
          </RadioButton>
        </template>
      </div>
      <div class="lg:hidden">
        <Swiper
          id="week-carousel"
          :spaceBetween="20"
          :slidesPerView="3"
          :breakpoints="{
            '768': {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            '1280': {
              slidesPerView: 7,
              spaceBetween: 40,
            },
          }"
        >
          <SwiperSlide v-for="item in newsCategories">
            <RadioButton :id="item" name="category" :value="item" />
          </SwiperSlide>
        </Swiper>
      </div>
      <!-- advertising -->
      <div class="mt-12 lg:mt-21">
        <img
          srcset="/assets/images/BG3.png 1x, /assets/images/BG3.png 2x"
          alt="Advertising"
          class="w-full"
        />
      </div>
    </div>
    <div class="hidden lg:block lg:basis-1/4">
      <div class="inline-flex flex-col gap-12 w-full">
        <img
          srcset="/assets/images/BG.png 1x, /assets/images/BG.png 2x"
          alt="Advertising"
          class="w-full"
        />
        <img
          srcset="/assets/images/BG2.png 1x, /assets/images/BG2.png 2x"
          alt="Advertising"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
