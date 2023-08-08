<script setup lang="ts">
import IconCamera from "assets/icons/iconCamera.vue";
import IconCloseMobile from "./icons/iconCloseMobile.vue";
import IconLikeMobile from "./icons/iconLikeMobile.vue";

const like = ref(false);
const activeMenu = ref<string | null>(null);
const menu_list = ref([
  {
    id: 0,
    key: "radio-channel",
    text: "Радиостанция",
    icon: "IconRadioMobile",
    to: "/", // NuxtLink manzili
    submenuList: [
      { key: "submenu1-item1", text: "Подменю 1 - Элемент 1", to: "/" }, // NuxtLink manzili
      { key: "submenu1-item2", text: "Подменю 1 - Элемент 2", to: "/" }, // NuxtLink manzili
    ],
  },
  {
    id: 1,
    key: "news",
    text: "Новости",
    icon: "IconNewsMobile",
    to: "#", // NuxtLink manzili
  },
  {
    id: 2,
    key: "events",
    text: "Акции и события",
    icon: "IconEventsMobile",
    to: "/", // NuxtLink manzili
    submenuList: [
      { key: "submenu2-item1", text: "Подменю 2 - Элемент 1", to: "/" }, // NuxtLink manzili
      { key: "submenu2-item2", text: "Подменю 2 - Элемент 2", to: "/" }, // NuxtLink manzili
    ],
  },
]);

const emit = defineEmits<{
  (e: "toggleBurger"): void;
}>();


// functions
function toggleLike() {
  like.value = !like.value;
}
function closeBurger() {
  emit("toggleBurger");
  activeMenu.value = null;
}

function toggleMenu(menuName: string | null) {
  if (activeMenu.value === menuName) {
    activeMenu.value = null;
  } else {
    activeMenu.value = menuName;
  }
}
</script>
<template>
  <nav
    class="w-full border fixed top-0 bottom-0 left-0 right-0 z-10 px-3 py-6 bg-white transition-all duration-500 overflow-x-hidden"
  >
    <div class="navbar-head flex justify-between items-center mb-8">
      <p
        class="text-black font-bold font-condensed text-16 uppercase leading-[16px]"
      >
        Меню
      </p>
      <button type="button" @click="closeBurger">
        <IconCloseMobile />
      </button>
    </div>
    <div class="vote relative overflow-hidden rounded-lg mb-6">
      <img src="@/public/vote.png" class="w-full" alt="vote.png" />
      <button
        type="button"
        class="p-1.5 border rounded-md bg-white text-black font-normal font-inter text-10 absolute top-1/4 right-[10%]"
      >
        Голосовать
      </button>
    </div>
    <div class="song flex items-center justify-between">
      <div class="artist">
        <p class="mb-0.5 text-gray-600 font-inter text-xs font-normal">Алиса</p>
        <h3
          class="max-w-[200px] overflow-hidden text-black truncate text-ellipsis font-bold font-inter text-base tracking-tighter"
        >
          Всё в наших руках (live 2022)
        </h3>
      </div>
      <button type="button" class="like" @click="toggleLike">
        <template v-if="like">
          <IconLikeMobile />
        </template>
        <template v-else>
          <IconLikeMobile />
        </template>
      </button>
    </div>
    <ul class="menu-list">
      <li
        @click="toggleMenu(menu.key)"
        class="cursor-pointer relative"
        v-for="menu in menu_list"
        :key="menu.key"
      >
        <a
          :to="menu.to"
          class="inline-flex gap-5 max-w-[210px] w-full px-4 py-3 hover:text-blue-500 rounded-md bg-white"
          :class="{
            'border border-black shadow-md mb-3.5':
              activeMenu === menu.key && menu.submenuList?.length,
          }"
        >
          <IconCamera />
          <span>
            {{ menu.text }}
          </span>
        </a>
        <!-- Sub-menu -->
        <template v-if="menu.submenuList">
          <ul
            :class="[
              'ml-10 w-[200px] border-t-[1px] border-black sub-menu space-y-1 transition-transform duration-300',
              {
                'translate-x-0': activeMenu === menu.key,
                '-translate-x-[200%] h-0': activeMenu !== menu.key,
              },
              { block: activeMenu === menu.key },
            ]"
          >
            <li
              v-for="submenu in menu.submenuList"
              :key="submenu.key"
              class="p-2.5"
            >
              <NuxtLink :to="submenu.to" class="hover:text-blue-500">
                {{ submenu.text }}
              </NuxtLink>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
//
</style>
