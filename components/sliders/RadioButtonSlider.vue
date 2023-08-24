<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      data: any[];
      modelValue: string | number | boolean | null;
    }>(),
    {
      data: [],
      modelValue: null,
    }
  );

  const emits = defineEmits<{
    "update:modelValue": [payload: string | number | boolean | null];
  }>();

  const selectedItem = computed({
    get() {
      return props.modelValue;
    },
    set(val: string | number | boolean | null) {
      emits("update:modelValue", val);
    },
  });

  const selectedItemIndex = ref(0);

  watchEffect(() => {
    if (props.data && props.modelValue) {
      const foundIndex = props.data.findIndex(
        (item) => item === props.modelValue
      );
      selectedItemIndex.value = foundIndex;
    }
  });
</script>

<template>
  <Swiper
    :initialSlide="selectedItemIndex"
    class="radio-btn-swiper"
    :slidesPerView="'auto'"
    :centeredSlides="true"
    :spaceBetween="12"
  >
    <SwiperSlide v-for="(item, itemIndex) in data" style="width: auto">
      <RadioButton v-model="selectedItem" :value="item" class="bg-white w-auto">
        {{ item }}
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
