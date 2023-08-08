<script setup lang="ts">
import IconBurgerMobile from "./icons/iconBurgerMobile.vue";
import IconLogoMobile from "./icons/iconLogoMobile.vue";
import IconStarMobile from "./icons/iconStarMobile.vue";

const open_burger = ref(false);

const emit = defineEmits<{
  (e: "toggleRadio"): void;
}>();

// functions
function toggleBurger() {
  open_burger.value = !open_burger.value;
}
function toggleRadio() {
  emit("toggleRadio");
}
</script>
<template>
  <header
    class="fixed top-0 left-0 right-0 z-10 bg-white block w-full border md:hidden p-3"
  >
    <div class="flex justify-between items-center">
      <div class="left flex items-center gap-5">
        <NuxtLink to="/">
          <IconLogoMobile />
        </NuxtLink>
        <div class="radio-channel flex items-center gap-2" @click="toggleRadio">
          <div class="channel-icon">
            <IconStarMobile />
          </div>
          <p
            class="py-1 text-black font-bold font-inter text-base leading-normal"
          >
            Москва
          </p>
        </div>
      </div>
      <button type="button" @click="toggleBurger">
        <IconBurgerMobile />
      </button>
    </div>

    <MobileMenu
      @toggle-burger="toggleBurger"
      :class="{ 'burger-open': !open_burger }"
    />
  </header>
</template>

<style scoped lang="scss">
.burger-open {
  margin-left: -100%; /* Sidebar ochilganda kengaytirish */
}
</style>
