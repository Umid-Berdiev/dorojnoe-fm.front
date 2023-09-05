<script lang="ts" setup>
  const route = useRoute();
  const paramsID = route.params.id;
  const isLoading = ref(false);

  const item = ref({
    id: 1,
    name: "2 океана",
    songs: [
      {
        name: "Не смотри вниз",
        mainImage: "/assets/images/mock-images/singer1_1.png",
      },
      {
        name: "Аэропорты",
        mainImage: "/assets/images/mock-images/singer1_2.png",
      },
      {
        name: "Я и ты",
        mainImage: "/assets/images/mock-images/singer1.png",
      },
    ],
    mainImage: "/assets/images/mock-images/singer1_xl.png",
    singers: "Виктория Талышинская и Владимир Курто",
  });

  const singers = ref([
    {
      id: 1,
      name: "2 океана",
      songs: 3,
      mainImage: "/assets/images/mock-images/singer1.png",
    },
    {
      id: 2,
      name: "Adriano Celentano",
      songs: 7,
      mainImage: "/assets/images/mock-images/singer2.png",
    },
    {
      id: 3,
      name: "Akon",
      songs: 1,
      mainImage: "/assets/images/mock-images/singer3.png",
    },
    {
      id: 4,
      name: "112",
      songs: 1,
      mainImage: "/assets/images/mock-images/singer4.png",
    },
    {
      id: 5,
      name: "a-ha",
      songs: 1,
      mainImage: "/assets/images/mock-images/singer5.png",
    },
    {
      id: 6,
      name: "ABBA",
      songs: 12,
      mainImage: "/assets/images/mock-images/singer6.png",
    },
    {
      id: 7,
      name: "A-Sen",
      songs: 1,
      mainImage: "/assets/images/mock-images/singer7.png",
    },
    {
      id: 8,
      name: "AC/DC",
      songs: 1,
      mainImage: "/assets/images/mock-images/singer8.png",
    },
    {
      id: 9,
      name: "Afric Simone",
      songs: 2,
      mainImage: "/assets/images/mock-images/singer9.png",
    },
    // {
    //   id: 10,
    //   name: "Anna Asti",
    //   songs: 1,
    //   mainImage: "/assets/images/mock-images/singer10.png",
    // },
  ]);

  watchEffect(() => {
    if (paramsID) {
      //
    }
  });
</script>

<template>
  <div class="default-container">
    <TheMobileBreadcrumb>Артисты</TheMobileBreadcrumb>
    <TheBreadcrumb :path="['Артисты', item.name]" />
    <div class="">
      <div class="relative">
        <img
          :srcset="item.mainImage"
          alt="singer cover image"
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
                <path
                  d="M30 30H0V0C0 16.5685 13.4315 30 30 30Z"
                  fill="#A42A26"
                />
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
                <path
                  d="M30 30H0V0C0 16.5685 13.4315 30 30 30Z"
                  fill="#A42A26"
                />
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
                  {{ item.name }}
                </h3>
                <div
                  class="font-inter text-sm text-white opacity-75 mt-1 lg:mt-3 max-w-[191px] lg:max-w-none"
                >
                  <p>{{ item.singers }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecondaryHeading class="mt-12"> Песни исполнителя </SecondaryHeading>
      <div class="">
        <NuxtList3>
          <template v-for="song in item.songs">
            <NuxtList3Item>
              <template #left>
                <img
                  :srcset="song.mainImage"
                  alt="song's cover image"
                  class="w-12 lg:w-18 rounded-xl"
                />
                <div class="ml-2 lg:ml-4 text-sm lg:text-base uppercase">
                  <p class="font-roboto-condensed font-bold text-black">
                    {{ song.name }}
                  </p>
                  <p class="font-inter lg:font-montserrat">
                    {{ item.name }}
                  </p>
                </div>
              </template>
              <template #right>
                <div
                  class="flex lg:flex-row-reverse gap-2 lg:gap-4 items-center"
                >
                  <PrimaryButtonWhite
                    class="py-2 px-3 lg:py-2.5 lg:px-4 rounded-43xl text-sm lg:text-base text-black"
                  >
                    Заказать
                  </PrimaryButtonWhite>
                  <NuxtLink to="/">
                    <ShareIcon class="w-4 h-4 lg:w-6 lg:h-6" />
                  </NuxtLink>
                </div>
              </template>
            </NuxtList3Item>
          </template>
        </NuxtList3>
      </div>
    </div>
    <div class="mt-16 lg:mt-20">
      <SecondaryHeading class="mb-6">Другие исполнители</SecondaryHeading>
      <div class="flex flex-wrap gap-2 lg:gap-4">
        <template v-for="(singer, singerIndex) in singers">
          <div
            class="inline-flex gap-3 p-2 lg:p-3 rounded-full bg-white w-[164px] lg:w-[272px] items-center cursor-pointer"
            :class="{
              'lg:ml-12': singerIndex % 2 !== 0 && singerIndex % 3 === 0,
            }"
            @click="$router.push(`/singers/${singer.id}`)"
          >
            <img
              :srcset="singer.mainImage"
              alt="singer's image"
              class="rounded-full w-14 h-14 lg:w-20 lg:h-20"
            />
            <div>
              <p
                class="text-[#8C9997] font-inter text-[8px] lg:text-xs uppercase"
              >
                {{ singer.songs }} {{ singer.songs === 1 ? "песня" : "песни" }}
              </p>
              <p
                class="font-roboto-condensed text-base lg:text-[18px] font-bold"
              >
                {{ singer.name }}
              </p>
            </div>
          </div>
        </template>
      </div>
      <PrimaryButtonRed class="mt-12 lg:mt-16" :loading="isLoading">
        Больше исполнителей
      </PrimaryButtonRed>
    </div>
    <NewsCard />
  </div>
</template>

<style lang="scss" scoped>
  img.preview-img {
    @apply h-[232px] lg:h-full rounded-3xl object-cover;
  }
</style>
