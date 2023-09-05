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

  watch(props, (newVal) => {
    if (newVal.currentLnglat && mapboxInstance.value) {
      mapboxInstance.value.setLayoutProperty("country-label", "text-field", [
        "get",
        "name_ru",
      ]);
      mapboxInstance.value.flyTo({
        center: newVal.currentLnglat,
        speed: 1, // default: 1.2
      });
    }
  });

  function setLocale(event: MouseEvent) {
    const language = "ru";
    // Use setLayoutProperty to set the value of a layout property in a style layer.
    // The three arguments are the id of the layer, the name of the layout property,
    // and the new property value.
    mapboxInstance.value.mapInstance.setLayoutProperty(
      "country-label",
      "text-field",
      ["get", `name_${language}`]
    );
  }
</script>

<template>
  <MapboxMap
    map-id="mapbox"
    ref="mapbox"
    :options="mapboxOptions"
    @load="(mapInstance) => (mapboxInstance = mapInstance)"
  >
    <MapboxDefaultMarker marker-id="marker1" :lnglat="currentLnglat" />
  </MapboxMap>
</template>

<style lang="scss">
  #mapbox {
    @apply bottom-0 top-auto h-full max-h-[336px] lg:max-h-[480px] rounded-4xl;
  }
</style>
