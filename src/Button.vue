<template>
  <button :class="[`${$style.btn}`, `${classes.red}`]" @click="handleClick">
    <slot v-if="$slots.default">
      {{ title }}
    </slot>
    <slot name="hello" :item="title"> </slot>
  </button>
</template>

<script setup>
import { isRef, ref } from "vue";
import classes from "./btn.module.css";
const {title} = defineProps(["title"]);
// console.log(title);
const item = ref(title);
// console.log(isRef(item));
// console.log(item);
defineExpose({
  title,
});

const emit = defineEmits();
const handleClick = () => emit("handleClick", "world");
</script>

<style module>
.btn {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px;
}
</style>
