<template>
  <div class="curve-block">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style>
  .curve-block {
    /* border-top-right-radius: 200px; */
    border-bottom-left-radius: 20px 20px;
    /* border: 1px solid #000; */

    /* border-top: none; */
    height: auto;
    min-height: 200px;
    width: 400px;
    position: relative;
    border-left: none;
    border-right: none;
    background-color: #a42a26;
  }
  .curve-block:before,
  .curve-block:after {
    content: "";
    display: block;
    position: absolute;
    /* left: -1px; */
  }
  .curve-block:before {
    height: 20px;
    width: 100%;
    /* width: calc(100% + 1px); */
    border-bottom-left-radius: 20px 20px;

    /* border-bottom-right-radius: 20px 20px; */
    /* border-bottom: 1px solid #000; */
    border-left: solid 1px #000;
    /* top: -20px; */
    background-color: #fff;
  }
  /* .curve-block:after {
    height: 20px;
    width: 100%;
    width: calc(100% + 1px);
    border-top-right-radius: 20px 20px;
    border-top: 1px solid #000;
    border-left: solid 1px #000;
  } */
  /* .curve-block:after {
    background-color: #a42a26;
    width: 20px;
    height: calc(100% - 20px);
    border-left: 1px solid #000;
  } */
</style>
