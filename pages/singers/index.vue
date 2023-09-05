<script setup lang="ts">
  const isLoading = ref(false);
  const categories = ref([
    { value: "rus", name: "РУС" },
    { value: "eng", name: "ENG" },
    { value: "sym", name: "Цифры/символы" },
  ]);
  const selectedCategory = ref(null);
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
    {
      id: 10,
      name: "Anna Asti",
      songs: 1,
      mainImage: "/assets/images/mock-images/singer10.png",
    },
  ]);
</script>

<template>
  <section class="default-container">
    <TheMobileBreadcrumb />
    <TheBreadcrumb :path="['Артисты']" />
    <PrimaryHeading underlined>Артисты</PrimaryHeading>
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="inline-flex">
        <Swiper :slides-per-view="'auto'" :space-between="12">
          <SwiperSlide style="width: auto">
            <RadioButton
              v-model="selectedCategory"
              class="bg-white"
              id="all"
              name="media"
              label="Всё"
              :value="null"
            />
          </SwiperSlide>
          <template v-for="cat in categories">
            <SwiperSlide style="width: auto">
              <RadioButton
                v-model="selectedCategory"
                class="bg-white"
                :id="cat.value"
                :label="cat.name"
                :value="cat.value"
              />
            </SwiperSlide>
          </template>
        </Swiper>
      </div>

      <div v-if="selectedCategory" class="inline-flex lg:hidden">
        <Swiper :slides-per-view="'auto'" :space-between="12">
          <template v-if="selectedCategory === 'eng'">
            <SwiperSlide
              v-for="letter in ENGLISH_ALPHABET"
              :key="letter"
              style="width: auto"
            >
              <button class="bg-white py-2.5 px-4 rounded-43xl">
                {{ letter }}
              </button>
            </SwiperSlide>
          </template>
          <template v-if="selectedCategory === 'rus'">
            <SwiperSlide
              v-for="letter in RUSSIAN_ALPHABET"
              :key="letter"
              style="width: auto"
            >
              <button class="bg-white py-2.5 px-4 rounded-43xl">
                {{ letter }}
              </button>
            </SwiperSlide>
          </template>
          <template v-if="selectedCategory === 'sym'">
            <SwiperSlide
              v-for="letter in SYMBOLS"
              :key="letter"
              style="width: auto"
            >
              <button class="bg-white py-2.5 px-4 rounded-43xl">
                {{ letter }}
              </button>
            </SwiperSlide>
          </template>
        </Swiper>
      </div>

      <!-- search input -->
      <SearchInput class="lg:ml-auto" />
    </div>
    <div
      v-if="selectedCategory"
      class="hidden lg:flex flex-wrap justify-center p-6 gap-3 mt-6 mb-12 border border-gainsboro-200 rounded-3xl"
    >
      <template v-if="selectedCategory === 'eng'">
        <template v-for="letter in ENGLISH_ALPHABET" :key="letter">
          <button class="bg-white py-2.5 px-4 rounded-43xl">
            {{ letter }}
          </button>
        </template>
      </template>
      <template v-if="selectedCategory === 'rus'">
        <template v-for="letter in RUSSIAN_ALPHABET" :key="letter">
          <button class="bg-white py-2.5 px-4 rounded-43xl">
            {{ letter }}
          </button>
        </template>
      </template>
      <template v-if="selectedCategory === 'sym'">
        <template v-for="letter in SYMBOLS" :key="letter">
          <button class="bg-white py-2.5 px-4 rounded-43xl">
            {{ letter }}
          </button>
        </template>
      </template>
    </div>

    <hr v-else class="hidden lg:block mt-6 mb-12 border-gainsboro-200" />

    <div class="mt-12 lg:mt-0">
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
  </section>
</template>
