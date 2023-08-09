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

  const mapboxInstance = ref();
  const mapboxOptions = ref<MapboxComponentOptions>({
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    zoom: 5, // starting zoom
    center: props.currentLnglat,
    minZoom: 4,
  });

  watchEffect(() => {
    if (props.currentLnglat && mapboxInstance.value) {
      // mapboxOptions.value.center = props.currentLnglat;
      console.log(mapboxInstance.value);

      mapboxInstance.value.flyTo({
        center: props.currentLnglat,
        speed: 3,
      });
    }
  });
</script>

<template>
  <MapboxMap
    map-id="mapbox"
    ref="mapbox"
    style="
      bottom: 0;
      top: auto;
      height: 100%;
      max-height: 480px;
      border-radius: 32px;
    "
    :options="mapboxOptions"
    @load="(mapInstance) => (mapboxInstance = mapInstance)"
  >
    <MapboxDefaultMarker marker-id="marker1" :lnglat="currentLnglat" />
  </MapboxMap>
</template>

<style lang="scss">
  // .mapboxgl-default-map-size {
  //   position: static !important;
  // }
</style>
