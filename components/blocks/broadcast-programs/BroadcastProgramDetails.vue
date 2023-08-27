<script setup lang="ts">
  withDefaults(
    defineProps<{
      data: any;
    }>(),
    {
      data: {},
    }
  );
</script>

<template>
  <div class="broadcast-program-detail-wrapper">
    <div class="relative">
      <img
        :srcset="data.previewImage"
        alt="broadcast program cover"
        class="preview-img"
      />
      <div
        class="absolute bottom-0 left-0 w-full lg:w-[360px] lg:flex-shrink-0 rounded-se-[40px] lg:rounded-se-[80px] rounded-es-[20px] bg-[#A42A26]"
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
              <path d="M30 30H0V0C0 16.5685 13.4315 30 30 30Z" fill="#A42A26" />
            </svg>
          </div>
          <div class="hidden lg:block absolute bottom-0 -right-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path d="M30 30H0V0C0 16.5685 13.4315 30 30 30Z" fill="#A42A26" />
            </svg>
          </div>
          <div class="flex w-full h-full px-4 py-6 lg:p-6 gap-3 lg:gap-4">
            <div class="flex-none self-end">
              <img
                src="/assets/images/mock-images/Frame_311.png"
                alt="cup of coffee"
                class="w-6 h-6 lg:w-8 lg:h-8"
              />
            </div>
            <div class="flex flex-col">
              <h3
                class="text-white font-roboto-condensed lg:font-montserrat text-lg lg:text-xl font-bold uppercase whitespace-break-spaces"
              >
                {{ data.name }}
              </h3>
              <div
                class="font-inter text-sm text-white opacity-75 mt-1 lg:mt-3"
              >
                <p>{{ data.dateTime }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full max-w-[760px] mt-6">
      <p class="text-[#162826] font-inter text-[15px] leading-6">
        {{ data.details }}
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
</template>

<style scoped lang="scss">
  .broadcast-program-detail-wrapper {
    img.preview-img {
      @apply h-[232px] lg:h-full rounded-[20px] object-cover;
    }
  }
</style>
