<template>
  <div
    class="font-inter lg:text-base ${props.className} inline-flex flex-col items-end gap-1 text-left font-normal text-black"
    style="props.style"
  >
    <div class="flex w-full flex-col items-start gap-1">
      <div class="py-2.5 px-4">
        <div class="flex items-center gap-4">
          <div class="w-6 text-center">
            <RadioIcon class="" />
          </div>
          <p class="flex-grow">Радиостанция</p>
        </div>
      </div>
      <div class="py-2.5 px-4">
        <div class="flex items-center gap-4">
          <div class="w-6 text-center">
            <NewsIcon class="" />
          </div>
          <p class="flex-grow">Новости</p>
        </div>
      </div>
      <div class="py-2.5 px-4">
        <div class="flex items-center gap-4">
          <div class="w-6 text-center">
            <ProgramsIcon class="" />
          </div>
          <p class="flex-grow">Программы</p>
        </div>
      </div>
      <div class="py-2.5 px-4">
        <div class="flex items-center gap-4">
          <div class="w-6 text-center">
            <GiftIcon class="" />
          </div>
          <p class="flex-grow">Акции и события</p>
        </div>
      </div>
      <div class="py-2.5 px-4">
        <div class="flex items-center gap-4">
          <div class="w-6 text-center">
            <ImageIcon class="" />
          </div>
          <p class="flex-grow">Фото и видео</p>
        </div>
      </div>
    </div>
  </div>
</template>
