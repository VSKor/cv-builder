<template>
  <div class="cvb-configurable-panel">
    <div v-for="(styles, className) in ctrl.classes.value"
         class="cvb-configurable__panel"
         :data-panel-for="className">
      <div class="cvb-configurable__panel__title">{{ className }}</div>
      <template v-for="attr in ctrl.allowedAttrs">
        <div class="cvb-configurable__color"
             v-if="isColorInput(attr)">
          <span>{{ attr }}</span>
          <color-input v-model="getStyles(className)[attr]"/>
        </div>
        <div class="cvb-configurable__field"
             v-else>
          <span>{{ attr }}</span>
          <q-input v-model="getStyles(className)[attr]"></q-input>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Basics
import ColorInput from "@/components/ColorInput/ColorInput.vue";
import type { Styles } from "./types";
import { CvbConfigCtrl } from "./CvbConfigCtrl";
import { QInput } from "quasar";

const { ctrl } = defineProps<{
  ctrl: CvbConfigCtrl;
  classes?: string[];
}>();
// Methods
const getStyles = (className: string) => {
  return ctrl.classes.value[className];
}
const isColorInput = (attr: string) => {
  return attr === 'color';
};
</script>
