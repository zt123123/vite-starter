<template>
  <img src="/assets/logo.png" />
  <h2>{{ count }}->{{ double }}</h2>
  <Button :title="msg" @handleClick="count++">
    double
    <template #hello="slotProps"> gggg--{{ slotProps.item }} </template>
  </Button>
  <h1 ref="head" class="h1">{{ msg }}</h1>
  <!-- <Hello :msg="msg" /> -->
  <Button ref="btn" :title="msg" @handleClick="reverseMsg">
    <template #hello="{ item }"> {{ item }} </template>
  </Button>
</template>

<script setup>
import { computed, onMounted, ref, watch, watchEffect } from "vue";
// import Hello from "./Hello.jsx";
import Button from "./Button.vue";
import logo from "/assets/logo.png";

console.log("logo:", logo);

const head = ref(null);
const msg = ref("hello");
const count = ref(1);
const double = computed(() => {
  return count.value * 2;
});
const btn = ref(null);

onMounted(() => {
  // console.log(head.value);
  // console.log("expose:", btn.value.title);
});

const reverseMsg = (param) => {
  // console.log("param:", param);
  msg.value = msg.value.split("").reverse().join("");
};

watch(msg, () => {
  // console.log("kk");
});
watchEffect(() => {
  // console.log("lll");
});
</script>

<style lang="less">
@color: orange;
body {
  margin: 0;
}
.h1 {
  color: @color;
}
</style>
