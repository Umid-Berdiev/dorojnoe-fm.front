<script setup lang="ts">
  const isLoading = ref(false);
  const promotionCategories = ref([
    { value: "promotions", name: "Конкурсы и акции" },
    { value: "events", name: "События" },
    { value: "live", name: "Идут сейчас" },
  ]);
  const selectedCategory = ref(null);
  const selectedDate = ref("Апрель 2023");
</script>

<template>
  <section class="default-container">
    <TheMobileBreadcrumb />
    <TheBreadcrumb :path="['Акции и события']" />
    <div>
      <div class="flex gap-12">
        <PrimaryHeading underlined>Акции</PrimaryHeading>
        <h1 class="font-roboto-condensed text-[24px] uppercase">Правила</h1>
      </div>
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
            <template v-for="cat in promotionCategories">
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

        <CustomSelect
          v-model="selectedDate"
          class="lg:ml-auto"
          placeholder="Выберите дату"
        >
          <CustomSelectOption value="Апрель 2023"
            >Апрель 2023</CustomSelectOption
          >
        </CustomSelect>
      </div>
      <PromotionCard />
    </div>
  </section>
  <section class="mt-16 lg:mt-20">
    <CommentForm />
  </section>
  <section class="pt-12 lg:pt-28 px-3 lg:px-8">
    <PrimaryHeading underlined>Победители</PrimaryHeading>
    <NuxtList3>
      <template v-for="number in 10">
        <NuxtList3Item>
          <template #left>
            <img
              srcset="/assets/images/mock-images/winners-list-default-cover.png"
              alt="winners list default cover"
              class="w-12 lg:w-18"
            />
            <p
              class="font-roboto-condensed text-sm lg:text-base font-bold uppercase text-black ml-2 lg:ml-4"
            >
              Фамилия Имя Отчество
            </p>
          </template>
          <template #right>
            <p
              class="text-firebrick font-montserrat text-lg font-bold uppercase"
            >
              #{{ number }}
            </p>
          </template>
        </NuxtList3Item>
      </template>
    </NuxtList3>
    <PrimaryButtonRed class="mt-10 lg:mt-16" :loading="isLoading">
      Показать еще
    </PrimaryButtonRed>
  </section>
</template>
