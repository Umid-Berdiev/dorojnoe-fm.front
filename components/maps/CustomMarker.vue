<script setup lang="ts">
  import { MarkerOptions } from "mapbox-gl";
  // import { defineMapboxMarker } from '#imports';

  const props = defineProps<{
    markerId: string;
    options: MarkerOptions & { lnglat: [number, number] };
  }>();
  const markerRef = ref<HTMLElement | null>(null);

  const marker = defineMapboxMarker(
    props.markerId,
    props.options,
    markerRef,
    (_marker) => {
      _marker.setLngLat([110, 6]);
    }
  );
</script>

<template>
  <div>
    <div
      ref="markerRef"
      class="marker"
      style="
        backgroundimage: url(https://placekitten.com/g/40/40/);
        width: 40px;
        height: 40px;
        backgroundsize: 100%;
      "
    />
  </div>
</template>

<style>
  .marker {
    display: block;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 0;
  }
</style>
