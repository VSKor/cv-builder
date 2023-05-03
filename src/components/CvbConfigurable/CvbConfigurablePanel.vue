<template>
  <q-card class="cvb-configurable-panel">
    <q-card-section>
      <div v-for="(styles, className) in ctrl.styles.value"
           class="cvb-configurable__panel"
           :data-panel-for="className">

        <q-expansion-item expand-separator
                          :label="className">
          <template v-for="attr in ctrl.allowedAttrs">
            <div>
              <div class="cvb-configurable__color"
                   v-if="isColorInput(attr)">
                <color-input :label="attr"
                             v-model="getStyles(className)[attr]"/>
              </div>
              <div class="cvb-configurable__field"
                   v-else>
                <q-input :label="attr"
                         filled
                         v-model="getStyles(className)[attr]"></q-input>
              </div>
            </div>
          </template>
        </q-expansion-item>
      </div>
    </q-card-section>
  </q-card>
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
  return ctrl.styles.value[className];
}
const isColorInput = (attr: string) => {
  return attr === 'color' || attr === 'bg';
};
</script>

<style lang="scss">
.q-expansion-item {
  .q-item__label {
    font-size: 18px;
    text-transform: capitalize;
  }
}
</style>