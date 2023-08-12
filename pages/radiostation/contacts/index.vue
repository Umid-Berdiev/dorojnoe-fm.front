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

  const cities = ref<any>([
    {
      name: "Москва",
      lnglat: [37.395744, 55.644466],
    },
    {
      name: "Санкт-Петербург",
      lnglat: [30.308611, 59.9375],
    },
  ]);
  const selectedCity = ref({
    name: "Москва",
    lnglat: [37.395744, 55.644466],
  });
</script>

<template>
  <TheMobileBreadcrumb>Радиостанция</TheMobileBreadcrumb>
  <TheBreadcrumb :path="['Радиостанция', 'Контакты']" />
  <div class="relative">
    <PrimaryHeading underlined>Контакты</PrimaryHeading>
    <IconLogo class="hidden lg:inline-block absolute right-0" />
  </div>
  <div class="mt-6">
    <SecondaryHeading class="max-w-[15rem] lg:max-w-none">
      Офис в Москве
    </SecondaryHeading>

    <NuxtList2 :data="data1" />
  </div>
  <div class="mt-12">
    <SecondaryHeading class="max-w-[15rem] lg:max-w-none">
      Рекламная служба
    </SecondaryHeading>

    <NuxtList2 :data="data2" />
  </div>
  <div class="mt-12">
    <SecondaryHeading class="max-w-[15rem] lg:max-w-none">
      Программная служба
    </SecondaryHeading>

    <NuxtList2
      :data="data1"
      class="bg-white px-4 py-3 rounded-2xl lg:px-8 lg:py-6 lg:rounded-4xl"
    />
  </div>
  <div class="mt-12">
    <SecondaryHeading class="max-w-[15rem] lg:max-w-none">
      Менеджер по региональному развитию сети
    </SecondaryHeading>

    <NuxtList2 :data="data4" />

    <hr class="text-gray-200" />
  </div>
  <div class="mt-12">
    <SecondaryHeading class="max-w-[15rem] lg:max-w-none">
      Программа по заявкам «Добрый вечер»
    </SecondaryHeading>

    <NuxtList2 :data="data5" />

    <hr class="text-gray-200" />
  </div>
  <div class="relative my-16 lg:my-28 h-[412px] lg:h-[542px]">
    <div class="flex flex-row gap-3">
      <template v-for="city in cities">
        <RadioButton
          :id="city.name"
          name="city"
          :value="city.name"
          :checked="selectedCity?.name === city.name"
          @input="selectedCity = city"
        >
          {{ city.name }}
        </RadioButton>
      </template>
    </div>
    <TheMap :current-lnglat="selectedCity?.lnglat" />
  </div>
</template>
