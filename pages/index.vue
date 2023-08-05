<script lang="ts" setup>
  import PrimaryHeading from "@/components/headings/PrimaryHeading.vue";
  import CustomSelect from "@/components/forms/CustomSelect.vue";
  import VDatePicker from "@/components/forms/VDatePicker.vue";
  import VTimePicker from "@/components/forms/VTimePicker.vue";
  import SearchInput from "@/components/forms/SearchInput.vue";
  import Playlist from "@/components/lists/Playlist/Playlist.vue";

  const options = ref([
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: true },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
  ]);
  const selectedOption = ref(1);
  const selectedTime = ref("08:00");
</script>

<template>
  <TheBreadcrumb />
  <PrimaryHeading>Плейлист</PrimaryHeading>
  <div class="flex mb-6 gap-3">
    <CustomSelect
      :options="options"
      v-model="selectedOption"
      as-value="id"
      as-label="name"
    />
    <VDatePicker />
    <VTimePicker v-model="selectedTime" />
    <SearchInput class="ml-auto" />
  </div>
  <hr />
  <Playlist />
</template>

<style scoped lang="scss">
  //
</style>
