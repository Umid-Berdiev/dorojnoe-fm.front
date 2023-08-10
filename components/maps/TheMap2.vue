<script setup lang="ts">
  import { MapboxComponentOptions } from "nuxt-mapbox";

  const props = withDefaults(
    defineProps<{
      currentLnglat: number[];
    }>(),
    {
      currentLnglat: () => [37.395744, 55.644466],
    }
  );

  const mapRef = useMapboxRef("mapbox");
  const mapboxInstance = ref();
  const mapboxOptions = ref<MapboxComponentOptions>({
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    zoom: 5, // starting zoom
    center: props.currentLnglat,
    minZoom: 4,
  });

  watchEffect(() => {
    if (mapRef.value) {
      mapRef.value.setStyle(mapboxOptions.style);
      mapRef.value.setZoom(mapboxOptions.zoom);
      mapRef.value.setCenter(mapboxOptions.center);
      mapRef.value.setMinZoom(mapboxOptions.minZoom);
    }
  });

  watch(props, (newVal) => {
    if (newVal.currentLnglat && mapboxInstance.value) {
      // mapboxOptions.value.center = props.currentLnglat;
      console.log(mapboxInstance.value);

      mapboxInstance.value.flyTo({
        center: newVal.currentLnglat,
        speed: 1, // default: 1.2
      });
    }
  });
</script>

<template>
  <div id="mapbox" ref="mapbox"></div>
</template>

<style lang="scss">
  #mapbox {
    // bottom: 0;
    // top: auto;
    // height: 100%;
    // max-height: 480px;
    // border-radius: 32px;
    @apply bottom-0 top-auto h-full max-h-[336px] lg:max-h-[480px] rounded-4xl;
  }
</style>
