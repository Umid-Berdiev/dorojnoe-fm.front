<script setup lang="ts">
  import { PaperClipIcon } from "@heroicons/vue/20/solid";

  async function handleSubmit(event: Event) {
    console.log("handleSubmit func clicked");
  }
</script>

<template>
  <div class="comment-form">
    <PrimaryHeading style="margin-top: 40px; margin-bottom: 40px">
      Пишите нам
    </PrimaryHeading>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>
          <p class="label">ФИО</p>
          <input class="form-input" type="text" placeholder="Ваши ФИО" />
        </label>
      </div>
      <div>
        <label>
          <p class="label">E-mail</p>
          <input class="form-input" type="email" placeholder="Ваши e-mail" />
        </label>
      </div>
      <div>
        <label>
          <p class="label">Номер телефона</p>
          <input
            class="form-input"
            type="text"
            placeholder="+7 900 000-00-00"
          />
        </label>
      </div>
      <div>
        <label class="relative">
          <p class="label">Комментарий</p>
          <textarea
            class="form-textarea"
            placeholder="Ваш комментарий"
            :rows="3"
          ></textarea>
          <PaperClipIcon class="absolute top-[40.5px] right-4 w-5 h-5" />
        </label>
      </div>
      <div>
        <PrimaryButtonWhite
          type="submit"
          class="text-firebrick p-4 border border-firebrick font-bold rounded-xl leading-4 w-full lg:w-48 justify-center hover:bg-firebrick hover:text-white"
        >
          <span>Отправить</span>
        </PrimaryButtonWhite>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
  .comment-form {
    @apply flex flex-col bg-whitesmoke items-center pb-10 lg:pb-16 px-3;

    form {
      @apply flex flex-col p-5 py-8 lg:p-10 gap-6 w-full lg:w-[580px] bg-white rounded-3xl font-inter text-base text-main-grey leading-5;

      .label {
        @apply pl-2.5 lg:pl-4;
      }

      .form-input,
      .form-textarea {
        @apply py-3
          px-4
          rounded-xl
          bg-main-bg-light
          border-[#dadada]
          focus:ring-main-black
          font-inter
          text-base
          text-main-grey
          placeholder:text-main-grey
          leading-5
          mt-2
          w-full;
        // #{!important};
      }
    }
  }
</style>
