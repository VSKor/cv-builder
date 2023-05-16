<template>
  <q-card class="cvb-configurable-panel">
    <q-card-section>
      <div v-for="className in classes"
           class="cvb-configurable__panel"
           :data-panel-for="className">
        <q-expansion-item expand-separator
                          :label="className">
          <template v-for="attr in (attributes || ctrl.allowedAttrs)">
            <div>
              <div class="cvb-configurable__color"
                   v-if="isColorInput(attr)">
                <color-input :label="attr"
                             v-model="getStyles(className)[attr]"
                             @update:modelValue="updateStyles(className, attr)"/>
              </div>
              <div class="cvb-configurable__field"
                   v-else>
                <q-input :label="attr"
                         filled
                         v-model="getStyles(className)[attr]"
                         @update:modelValue="updateStyles(className, attr)"></q-input>
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

const props = withDefaults(defineProps<{
  ctrl: CvbConfigCtrl;
  classes?: string[];
  attributes?: string[];
}>(), {
  classes: []
});
// Methods
const getStyles = (className: string) => {
  return props.ctrl.styles.get(className);
};
const isColorInput = (attr: string) => {
  return attr === 'color' || attr === 'bg';
};

const updateStyles = (className: keyof typeof props.ctrl['styles'], attr: string) => {
  props.ctrl.setClassAttr(String(className), attr, props.ctrl.styles.get(String(className))![attr])
};
</script>

<style lang="scss">
.cvb-configurable-panel {
  min-width: 320px;

  .q-expansion-item {
    .q-item__label {
      font-size: 18px;
      text-transform: capitalize;
    }
  }
}
</style>