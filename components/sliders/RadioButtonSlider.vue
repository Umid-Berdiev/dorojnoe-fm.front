<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      data: any[];
      modelValue: string | number | null;
      asLabel?: string;
      asValue?: string;
    }>(),
    {
      data: [],
      modelValue: null,
      asLabel: "label",
      asValue: "value",
    }
  );

  const emits = defineEmits<{
    "update:modelValue": [payload: string | number | null];
  }>();

  const selectedItem = computed({
    get() {
      return props.modelValue;
    },
    set(val: string | number | null) {
      emits("update:modelValue", val);
    },
  });

  const selectedItemIndex = ref(0);

  watchEffect(() => {
    if (props.data && props.modelValue) {
      const foundIndex = props.data.findIndex((item) => {
        if (typeof item === "object")
          return item[props.asValue] === props.modelValue;
        else item === props.modelValue;
      });
      selectedItemIndex.value = foundIndex;
    }
  });
</script>

<template>
  <Swiper
    :initialSlide="selectedItemIndex"
    class="radio-btn-swiper"
    :slidesPerView="'auto'"
    :centeredSlides="false"
    :spaceBetween="12"
  >
    <SwiperSlide>
      <RadioButton v-model="selectedItem" :value="null" class="bg-white w-auto">
        Все
      </RadioButton>
    </SwiperSlide>
    <SwiperSlide v-for="(item, itemIndex) in data" style="width: auto">
      <RadioButton
        v-model="selectedItem"
        :value="item[asValue] ?? item"
        class="bg-white w-auto"
      >
        {{ item[asLabel] ?? item }}
      </RadioButton>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
  .radio-btn-swiper {
    .swiper-slide {
      width: auto;
    }
  }
</style>
