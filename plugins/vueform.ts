export default defineNuxtPlugin((nuxtApp) => {
  // here we are defining a lazy loaded component
  // that will be imported on demand
  nuxtApp.vueApp.component(
    // eslint-disable-next-line vue/multi-word-component-names
    "Multiselect",
    defineAsyncComponent({
      loader: () => import("@vueform/multiselect").then((mod) => mod.default),
      delay: 0,
      suspensible: false,
    })
  );

  nuxtApp.vueApp.component(
    // eslint-disable-next-line vue/multi-word-component-names
    "Slider",
    defineAsyncComponent({
      loader: () => import("@vueform/slider").then((mod) => mod.default),
      delay: 0,
      suspensible: false,
    })
  );
});
