<template>
  <div class="cvb-configurable-styles"
       v-html="styles"></div>
</template>

<script lang="ts" setup>
import type { CvbConfigCtrl } from "./CvbConfigCtrl";
import { ref } from "vue";
import { EVENTS } from "./constants";

const props = defineProps<{
  ctrl: CvbConfigCtrl;
}>();

props.ctrl.emitter.on(EVENTS.UPDATE_STYLES, () => {
  styles.value = computeStyles();
})

const resolveStyle = (attr: string, value: string) => {
  if (attr === 'width') {
    return `flex-basis: ${value}; width: ${value}; min-width: ${value};`;
  }
  if (attr === 'bg') {
    return `background-color: ${value};`;
  }

  return `${attr}: ${value};`;
}
const getStyles = function (this: CvbConfigCtrl, className: keyof typeof this["styles"]) {
  const classAttributes = props.ctrl.styles.get(className as string);
  if (classAttributes) {
    return (Object.keys(classAttributes) as (keyof typeof classAttributes)[]).map((attr) => {
      const attrValue = classAttributes[attr];
      if (!attrValue) {
        return '';
      }
      return resolveStyle(attr, attrValue);
    }).join('');
  }

  return '';
}

const computeStyles = (() => {
  const styles = [...props.ctrl.styles.keys()].reduce((styles, className) => {
    return styles + `.${className}{ ${getStyles.call(props.ctrl, className)} }`;
  }, '');

  return `<style>${styles}</style>`;
});
const styles = ref(computeStyles());
</script>
