<template>
  <div class="ct">{{ msg }}</div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("hello test!!!");
</script>

<style>
.ct {
  height: 100vh;
  background-color: antiquewhite;
}
</style>
