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

const resolveStyle = (attr: string, value: string) => {
  if(attr === 'width') {
    return `flex-basis: ${value}; min-width: ${value};`;
  }
  if(attr === 'bg') {
    return `background-color: ${value}`;
  }

  return `${attr}: ${value};`;
}
const getStyles = (className: string) => {
  return (Object.keys(props.ctrl.classes.value[className]) as (keyof Styles)[]).map((attr) => {
    const attrValue = props.ctrl.classes.value[className][attr];
    if(!attrValue) {
      return '';
    }
    return resolveStyle(attr, attrValue);
  }).join('');
}

const computedStyles = computed(() => {
  const styles = Object.keys(props.ctrl.classes.value).reduce((styles, className) => {
    return styles + `.${className}{ ${getStyles(className)} }`;
  }, '');

  return `<style>${styles}</style>`;
});
</script>
