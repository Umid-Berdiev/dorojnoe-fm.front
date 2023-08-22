<template>
  <div
    class="font-inter lg:text-base ${props.className} inline-flex flex-col items-end gap-1 text-left font-normal text-black"
    style="props.style"
  >
    <div class="flex w-full flex-col items-start gap-1">
      <div class="py-2.5 px-4">
        <RouterLink to="/radiostation/playlist" class="flex items-center gap-4">
          <div class="w-6 text-center">
            <RadioIcon class="" />
          </div>
          <p class="flex-grow">Радиостанция</p>
        </RouterLink>
      </div>
      <div class="py-2.5 px-4">
        <RouterLink to="/news" class="flex items-center gap-4">
          <div class="w-6 text-center">
            <NewsIcon class="" />
          </div>
          <p class="flex-grow">Новости</p>
        </RouterLink>
      </div>
      <div class="py-2.5 px-4">
        <RouterLink to="/programs" class="flex items-center gap-4">
          <div class="w-6 text-center">
            <ProgramsIcon class="" />
          </div>
          <p class="flex-grow">Программы</p>
        </RouterLink>
      </div>
      <div class="py-2.5 px-4">
        <RouterLink to="/" class="flex items-center gap-4">
          <div class="w-6 text-center">
            <GiftIcon class="" />
          </div>
          <p class="flex-grow">Акции и события</p>
        </RouterLink>
      </div>
      <div class="py-2.5 px-4">
        <RouterLink to="/media" class="flex items-center gap-4">
          <div class="w-6 text-center">
            <ImageIcon class="" />
          </div>
          <p class="flex-grow">Фото и видео</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
