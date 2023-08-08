<script lang="ts" setup>
  import IconLogo from "@/components/icons/iconLogo.vue";
  import IconStar from "@/components/icons/iconStar.vue";
  import IconVote from "@/components/icons/iconVote.vue";
  import IconArrowDown from "@/components/icons/iconArrowDown.vue";
</script>

<template>
  <aside
    class="fixed top-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white"
  >
    <div class="h-full pl-6 pr-3 pt-1 overflow-y-auto">
      <div class="logo mb-4 max-w-[160px] max-h-[138px] mx-auto">
        <NuxtLink to="/">
          <IconLogo />
        </NuxtLink>
      </div>
      <div class="radio-channel mb-6 cursor-pointer">
        <div class="dropdown flex gap-2 items-center">
          <div class="drop-icon mr-2">
            <IconStar />
          </div>
          <div class="channel-name">
            <span>Москва</span>
            <span>/</span>
            <span>96,0 FM</span>
          </div>
          <div class="icon">
            <IconArrowDown />
          </div>
        </div>
      </div>
      <div class="radio-player">
        <RadioPlayer />
      </div>
      <div class="vote mb-3.5">
        <button type="button">
          <IconVote class="w-full" />
        </button>
      </div>
      <NavLink />
    </div>
  </aside>
</template>

<style lang="scss">
//
</style>
