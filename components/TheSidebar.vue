<script lang="ts" setup>
import IconLogo from 'assets/icons/iconLogo.vue';

//
</script>

<template>
  <button
    class="bg-hamburger w-1/5 h-screen bg-no-repeat bg-center m-[14px] ml-5 absolute top-0 peer text-4xl"
    id="aside"
    type="button"
  >
    ≡
  </button>
  <aside
    class="grid fixed w-1/5 top-0 bg-[#fff] w-[233px] h-full -left-[233px] peer-focus:left-0 ease-out delay-150 duration-300 rounded-r-[25px] rounded-bl-[25px]"
    id="aside"
  >
    <div class="logo">
      <IconLogo />
    </div>
  </aside>
</template>

<style scoped lang="scss">
//
</style>
