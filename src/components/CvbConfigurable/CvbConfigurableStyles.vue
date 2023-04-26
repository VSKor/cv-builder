<template>
  <div class="cvb-configurable-styles"
       v-html="computedStyles"></div>
</template>

<script lang="ts" setup>
import type { CvbConfigCtrl } from "./CvbConfigCtrl";
import { computed } from "vue";
import type { Styles } from "./types";

const props = defineProps<{
  ctrl: CvbConfigCtrl;
}>();

const getStyles = (className: string) => {
  return (Object.keys(props.ctrl.classes.value[className]) as (keyof Styles)[]).map((attr) => {
    return `${attr}: ${props.ctrl.classes.value[className][attr]};`
  }).join('');
}

const computedStyles = computed(() => {
  const styles = Object.keys(props.ctrl.classes.value).reduce((styles, className) => {
    return styles + `.${className}{ ${getStyles(className)} }`;
  }, '');

  return `<style>${styles}</style>`;
});
</script>
