<script setup lang="ts">
  import { fetchBroadcastPrograms } from "@/utils/api/broadcastPrograms";
  import { categories } from "@/utils/mockdata/broadcastPrograms";
  import { ArrowRightIcon } from "@heroicons/vue/20/solid";

  const selectedCategoryID = ref<number | null>(null);
  const { data: broadcastPrograms } = await fetchBroadcastPrograms();
</script>

<template>
  <TheMobileBreadcrumb />
  <TheBreadcrumb :path="['Программы эфира']" />
  <PrimaryHeading underlined>Программы эфира</PrimaryHeading>
  <section>
    <!-- mobile version -->
    <div class="lg:hidden">
      <RadioButtonSlider
        :data="categories"
        v-model="selectedCategoryID"
        as-label="name"
        as-value="id"
      />
    </div>
    <!-- desktop version -->
    <div class="hidden lg:flex lg:flex-wrap lg:gap-x-3 lg:gap-y-4">
      <RadioButton
        v-model="selectedCategoryID"
        class="bg-white"
        :id="0"
        name="category"
        :value="null"
      >
        Все
      </RadioButton>
      <template v-for="(item, itemIndex) in categories" :key="itemIndex">
        <RadioButton
          v-model="selectedCategoryID"
          class="bg-white"
          :id="item.id"
          name="category"
          :value="item.id"
        >
          {{ item.name }}
        </RadioButton>
      </template>
    </div>
  </section>
  <section class="mt-16">
    <div class="flex flex-col">
      <div class="relative">
        <img
          srcset="/assets/images/mock-images/broadcast-programs1.png"
          alt="broadcast program cover"
        />
        <div
          class="absolute bottom-0 left-0 lg:w-[360px] lg:h-[122px] lg:flex-shrink-0 rounded-se-[80px] rounded-es-[20px] bg-[#A42A26]"
        >
          <div class="relative w-full h-full">
            <div class="absolute -top-[30px] left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M30 30H0V0C0 16.5685 13.4315 30 30 30Z"
                  fill="#A42A26"
                />
              </svg>
            </div>
            <div class="absolute bottom-0 -right-[30px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M30 30H0V0C0 16.5685 13.4315 30 30 30Z"
                  fill="#A42A26"
                />
              </svg>
            </div>
            <div class="flex h-full p-6 gap-4">
              <div class="flex-none self-end">
                <img
                  src="/assets/images/mock-images/Frame_311.png"
                  alt="cup of coffee"
                />
              </div>
              <div class="flex flex-col">
                <h3
                  class="text-white font-montserrat text-xl font-bold uppercase"
                >
                  Посиделки на Дорожном радио
                </h3>
                <p class="font-inter text-sm text-white opacity-75 mt-auto">
                  10:00-11:00 (Сб)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-[760px] mt-6">
        <p class="text-[#162826] font-inter text-[15px] leading-6">
          Каждую субботу в 10:00 в эфире «Дорожного радио» Никита Леонов будет
          встречаться со звёздами отечественной эстрады, кино, спорта и другими
          знаменитостями, чтобы узнать у них последние новости и поговорить по
          душам.
        </p>
      </div>

      <div class="flex justify-between mt-10 items-start">
        <SecondaryHeading>Выпуски</SecondaryHeading>
        <button class="inline-flex items-center gap-2">
          <span class="font-inter text-sm font-medium text-[#8C9997]"
            >Все выпуски</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M0.400391 10.3999H17.8348L15.3176 12.9171L15.8832 13.4827L19.366 9.99989L15.8832 6.51709L15.3176 7.08269L17.8348 9.59989H0.400391V10.3999Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div>
        <NuxtList3>
          <NuxtList3Item>
            <template #left>
              <div class="inline-flex flex-col gap-1">
                <SecondaryHeading style="font-size: 14px; margin-bottom: 0">
                  Гоша Куценко в программе «Посиделки на Дорожном радио»
                </SecondaryHeading>
                <p class="font-inter">18.05.23</p>
              </div>
            </template>
          </NuxtList3Item>
          <NuxtList3Item>
            <template #left>
              <div class="inline-flex flex-col gap-1">
                <SecondaryHeading style="font-size: 14px; margin-bottom: 0">
                  Юрий Грымов у нас в гостях
                </SecondaryHeading>
                <p class="font-inter">10.05.23</p>
              </div>
            </template>
          </NuxtList3Item>
          <NuxtList3Item>
            <template #left>
              <div class="inline-flex flex-col gap-1">
                <SecondaryHeading style="font-size: 14px; margin-bottom: 0">
                  Лиза Арзамасова рассказала секрет продуктива
                </SecondaryHeading>
                <p class="font-inter">03.05.23</p>
              </div>
            </template>
          </NuxtList3Item>
        </NuxtList3>
      </div>
    </div>
  </section>
</template>
