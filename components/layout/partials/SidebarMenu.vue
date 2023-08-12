<template>
  <div
    class="font-inter ${props.className} inline-flex h-[216px] w-[214px] flex-col items-end gap-1 text-left font-normal text-black"
    style="props.style"
  >
    <div class="flex w-full flex-col items-start gap-1 [max-width:214px]">
      <div class="h-10 w-[204px] pb-2.5 pl-3.5 pr-[51px] pt-2">
        <div class="flex h-full w-full items-end justify-between gap-[18px]">
          <RadioIcon class="h-[22px] w-[22px]" />
          <p class="h-[17px] w-[99px] flex-grow text-sm">Радиостанция</p>
        </div>
      </div>
      <div class="h-10 w-[204px] pb-2 pl-[15px] pr-[91px] pt-3">
        <div class="flex h-full w-full flex-col justify-between gap-[0]">
          <div class="flex w-full items-center justify-between gap-[19px]">
            <NewsIcon />
            <p class="h-[17px] w-[59px] flex-grow text-sm">Новости</p>
          </div>
        </div>
      </div>
      <div
        class="flex h-10 w-[200px] items-center justify-between gap-5 rounded-lg bg-white py-3 pl-4 pr-16"
      >
        <ProgramsIcon class="h-[13px] w-[18px]" />
        <p class="h-[17px] w-[81%] flex-grow text-sm [max-width:82px]">
          Программы
        </p>
      </div>
    </div>
    <div class="flex w-full flex-col items-start gap-1 [max-width:214px]">
      <div
        class="flex h-10 w-[204px] items-center justify-between gap-[18px] rounded-lg bg-white py-[9px] pl-3.5 pr-8"
      >
        <GiftIcon class="h-[22px] w-[22px]" />
        <p class="h-[17px] w-[80.39%] flex-grow text-sm [max-width:118px]">
          Акции и события
        </p>
      </div>
      <div class="h-10 w-[204px] pb-[7px] pl-[13px] pr-[58px] pt-[9px]">
        <div class="flex h-full w-full items-center justify-between gap-[17px]">
          <ImageIcon class="h-6 w-6" />
          <p class="h-[17px] w-[92px] flex-grow text-sm">Фото и видео</p>
        </div>
      </div>
    </div>
  </div>
</template>
