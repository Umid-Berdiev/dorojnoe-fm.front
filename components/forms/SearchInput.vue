<template>
  <div class="relative">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.41666 7.66663C2.41666 4.76713 4.76716 2.41663 7.66666 2.41663C10.5662 2.41663 12.9167 4.76713 12.9167 7.66663C12.9167 10.5661 10.5662 12.9166 7.66666 12.9166C4.76716 12.9166 2.41666 10.5661 2.41666 7.66663ZM7.66666 0.916626C3.93873 0.916626 0.916656 3.9387 0.916656 7.66663C0.916656 11.3945 3.93873 14.4166 7.66666 14.4166C9.26041 14.4166 10.7252 13.8643 11.8799 12.9406L15.803 16.8636C16.0959 17.1565 16.5708 17.1565 16.8637 16.8636C17.1565 16.5707 17.1565 16.0959 16.8637 15.803L12.9406 11.8799C13.8643 10.7251 14.4167 9.26039 14.4167 7.66663C14.4167 3.9387 11.3946 0.916626 7.66666 0.916626Z"
          fill="#A7A7A7"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      class="text-base block w-full p-2.5 pl-10 text-gray-900 rounded-3xl bg-white focus:ring-blue-500 focus:border-blue-500"
      placeholder="Поиск"
      required
    />
  </div>
</template>

<style scoped lang="scss">
  #default-search {
    color: var(--main-grey, #a7a7a7);
  }
</style>
