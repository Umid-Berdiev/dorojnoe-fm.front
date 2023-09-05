<template>
  <div class="bottom-player">
    <PauseIcon />
    <div class="">
      <p class="singer-fullname">Владимир Пресняков</p>
      <p class="song-title">Синяя птица</p>
    </div>
    <LinkIcon class="ml-auto" />
  </div>
</template>

<style lang="scss" scoped>
  .bottom-player {
    box-shadow: 4px 4px 16px -4px rgba(0, 0, 0, 0.24);
    @apply flex lg:hidden gap-2 items-center rounded-lg bg-white p-2 mt-auto;

    .singer-fullname {
      color: #9d9d9d;
      font-size: 10px;
    }

    .song-title {
      font-size: 16px;
      font-weight: 900;
    }
  }
</style>
