<script setup lang="ts">
  const promotion = ref({
    id: 1,
    mainImage: "/assets/images/mock-images/promotions-card-1.png",
    category: "Конкурс",
    dateTime: "c 17 по 21 апреля 2023",
    title: "«Дорожное радио» приглашает на юбилейное шоу Филиппа Киркорова",
  });
</script>

<template>
  <div class="default-container">
    <TheMobileBreadcrumb>Акции и события</TheMobileBreadcrumb>
    <TheBreadcrumb :path="['Акции и события', promotion.title]" />
    <div class="flex flex-row lg:gap-10">
      <div class="lg:basis-3/4">
        <PrimaryButtonWhite
          class="py-1.5 px-2.5 rounded-43xl text-sm leading-[18px]"
        >
          {{ promotion.dateTime }}
        </PrimaryButtonWhite>
        <PrimaryHeading class="mt-4">{{ promotion.title }}</PrimaryHeading>
        <img
          :srcset="promotion.mainImage"
          alt="Promotion cover image"
          class="w-full"
        />
        <div class="mt-8 lg:mt-12 font-inter text-[15px] leading-6">
          <p>
            30 апреля в Государственном Кремлевском Дворце состоится юбилейное
            шоу Филиппа Киркорова «55. Золотые хиты»! Объехав десятки городов
            России и зарубежья с абсолютными аншлагами, юбилейный тур Короля
            российской эстрады возвращается в столицу! Грандиозное шоу «55.
            Золотые хиты» уже вошло в историю российского и мирового
            шоу-бизнеса, установив мировой рекорд по количеству смены
            сценических образов Артиста. Уникальная сценография, десятки
            феерических образов, а — главное! — десятки хитов и шлягеров,
            благодаря которым Филипп Киркоров вот уже более 30 лет по праву
            считается Королем российской эстрады! Хотите стать гостем вечера,
            увидеть незабываемое шоу и услышать хиты Филиппа Киркорова? Тогда
            участвуйте в розыгрыше пригласительных с 17 по 21 апреля в
            программах «С утра пораньше» и «Вечернее направление», звоните к нам
            в эфир по телефону 8 (495) 620 37 70 и отвечайте на вопросы
            ведущего. Первому, кто дозвонится в студию и даст правильный ответ
            на вопрос, мы подарим пригласительные на шоу на 2 персоны! Выиграть
            пригласительные смогут 10 слушателей «Дорожного радио».
          </p>
          <br />
          <p class="font-semibold">Желаем удачи!</p>
        </div>
        <hr class="mt-12 mb-6 border-gainsboro-200" />
        <PrimaryButtonWhite
          class="py-1.5 px-2.5 rounded-43xl text-sm leading-[18px]"
        >
          Правила и положения (PDF)
        </PrimaryButtonWhite>
      </div>
      <div class="hidden lg:block lg:basis-1/4"></div>
    </div>
  </div>
  <section class="mt-16 lg:mt-20">
    <CommentForm />
  </section>
</template>

<style scoped>
  /*  */
</style>
