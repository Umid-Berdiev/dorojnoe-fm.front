<script lang="ts" setup>
  const data1 = ref([
    {
      label: "Адрес",
      value: "109004, Россия, Москва, ул. Станиславского, д. 21, стр.3",
    },
    {
      label: "Телефон",
      value: "+7 (495) 620-46-64",
    },
    {
      label: "факс",
      value: "+7 (495) 627-11-56",
    },
  ]);

  const data2 = ref([
    {
      label: "Телефон",
      value: "+7 (495) 620-46-64",
    },
    {
      label: "e-mail",
      value: "dorjnoe-fm@mail.ru",
    },
    {
      label: "WhatsApp",
      value: "https://wa.me/79645274568",
    },
    {
      label: "Telegram",
      value: "https://teleg.run/EMG_reklamanaradio",
    },
    {
      label: "VIBER",
      value: "https://viber.click/79645274568",
    },
  ]);

  const data4 = ref([
    {
      label: "Александра Хорошавина",
      value: "+7 (495) 799-97-97",
    },
  ]);

  const data5 = ref([
    {
      label: "Телефон",
      value: "+7 (495) 799-97-97",
    },
  ]);
</script>

<template>
  <TheMobileBreadcrumb />
  <TheBreadcrumb :path="['Радиостанция', 'Контакты']" />
  <div class="relative">
    <PrimaryHeading underlined>Контакты</PrimaryHeading>
    <IconLogo class="hidden lg:inline-block absolute right-0" />
  </div>
  <div class="mt-6">
    <SecondaryHeading>Офис в Москве</SecondaryHeading>

    <NuxtList2 :data="data1" />
  </div>
  <div class="mt-12">
    <SecondaryHeading>Рекламная служба</SecondaryHeading>

    <NuxtList2 :data="data2" />
  </div>
  <div class="mt-12">
    <SecondaryHeading>Программная служба</SecondaryHeading>

    <NuxtList2 :data="data1" class="bg-white p-8 rounded-4xl" />
  </div>
  <div class="mt-12">
    <SecondaryHeading>Менеджер по региональному развитию сети</SecondaryHeading>

    <NuxtList2 :data="data4" />

    <hr class="text-gray-200" />
  </div>
  <div class="mt-12">
    <SecondaryHeading>Программа по заявкам «Добрый вечер»</SecondaryHeading>

    <NuxtList2 :data="data5" />

    <hr class="text-gray-200" />
  </div>
</template>
