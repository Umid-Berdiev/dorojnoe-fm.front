<script lang="ts" setup>
  const currentStep = useLocalStorage("order-song-step", "OrderSong");
</script>

<template>
  <div class="">
    <PrimaryHeading underlined class="mt-8 lg:mt-9">
      Записать обращение
    </PrimaryHeading>
    <div class="text-base leading-6 max-w-[673px]">
      <p>Запишите или загрузите сообщение</p>
    </div>
    <VoiceRecorder />
    <div class="note">
      <SecondaryHeading style="margin-bottom: 0">
        Для удобства вы можете воспользоваться готовым шаблоном:
      </SecondaryHeading>
      <ol class="list-decimal pl-4">
        <li>
          Начните приветствие со слов «Здравствуйте/Добрый день/Добрый вечер
          Дорожное радио!»
        </li>
        <li>
          Передайте ваш привет или поздравление «Хочу поздравить с днем рождения
          ... /Хочу пожелать ... /Передаю привет ...»
        </li>
        <li>
          Назовите песню, которую вы хотите услышать «Поставьте, пожалуйста,
          песню/ Хочу заказать песню для...»
        </li>
        <li>Закончите свою заявку словами «Спасибо, Дорожное радио!»</li>
      </ol>
      <div>
        <p>
          Редакция оставляет за собой право отклонить заявку по техническим
          параметрам (невнятная речь, посторонний шум, присутствие музыки в
          записи и т.д.), а также если она содержит рекламу коммерческих товаров
          и услуг, нецензурные слова и сленговые выражения. А также если заявка
          посвящена известным публичным лицам или политическим деятелям.
        </p>
      </div>
    </div>

    <PrimaryButtonRed class="mt-8 lg:mt-12" @click="currentStep = 'WhenToPlay'">
      Далее
    </PrimaryButtonRed>
  </div>
</template>

<style lang="scss" scoped>
  .note {
    @apply inline-flex py-6 px-4 lg:p-8 flex-col items-start gap-6 border border-gainsboro-200 rounded-3xl mt-8 lg:mt-6;

    li,
    p {
      @apply text-base leading-5;
    }
  }
</style>
