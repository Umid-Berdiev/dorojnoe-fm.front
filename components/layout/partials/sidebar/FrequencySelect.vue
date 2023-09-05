<script setup lang="ts">
  import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
  } from "@headlessui/vue";
  import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
  } from "@heroicons/vue/20/solid";

  const frequencies = [
    {
      id: 1,
      name: "Москва",
      wave: "96.0 FM",
      cover: "/assets/images/favorite.png",
    },
    {
      id: 2,
      name: "Санкт-Петербург",
      wave: "101.5 FM",
      cover: "/assets/images/favorite.png",
    },
    {
      id: 3,
      name: "Казань",
      wave: "107.3 FM",
      cover: "/assets/images/favorite.png",
    },
    {
      id: 4,
      name: "Москва",
      wave: "96.0 FM",
      cover: "/assets/images/favorite.png",
    },
    {
      id: 5,
      name: "Москва",
      wave: "96.0 FM",
      cover: "/assets/images/favorite.png",
    },
    {
      id: 6,
      name: "Москва",
      wave: "96.0 FM",
      cover: "/assets/images/favorite.png",
    },
    {
      id: 7,
      name: "Москва",
      wave: "96.0 FM",
      cover: "/assets/images/favorite.png",
    },
    {
      id: 8,
      name: "Москва",
      wave: "96.0 FM",
      cover: "/assets/images/favorite.png",
    },
    {
      id: 9,
      name: "Москва",
      wave: "96.0 FM",
      cover: "/assets/images/favorite.png",
    },
    {
      id: 10,
      name: "Москва",
      wave: "96.0 FM",
      cover: "/assets/images/favorite.png",
    },
  ];

  const selected = ref(frequencies[3]);
</script>

<template>
  <Listbox as="div" v-model="selected" v-slot="{ open }">
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full cursor-pointer bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 focus:outline-none sm:text-sm sm:leading-6"
      >
        <span class="flex items-center">
          <img
            :src="selected.cover"
            alt=""
            class="h-5 w-5 flex-shrink-0 rounded-full"
          />
          <span class="ml-3 block truncate font-inter text-base font-bold">
            {{ selected.name }}
          </span>
          <span class="ml-3 block truncate font-inter text-base">
            / {{ selected.wave }}
          </span>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
        >
          <ChevronUpIcon v-if="open" class="h-5 w-5" aria-hidden="true" />
          <ChevronDownIcon v-else="open" class="h-5 w-5" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="person in frequencies"
            :key="person.id"
            :value="person"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <img
                  :src="person.cover"
                  alt=""
                  class="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                  >{{ person.name }}</span
                >
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
