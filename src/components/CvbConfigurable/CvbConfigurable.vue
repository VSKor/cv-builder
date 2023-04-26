<template>
  <div class="cvb-configurable">
    <div class="cvb-configurable__panels">
      <q-icon name="settings"></q-icon>
      <q-menu anchor="center left">
        <div v-for="(styles, className) in ctrl.classes.value"
             class="cvb-configurable__panel"
             :data-panel-for="className">
          <div class="cvb-configurable__panel__title">{{ className }}</div>
          <div class="cvb-configurable__color"
               v-if="availableAttrs.includes('color')">
            <span>Color</span>
            <color-input v-model="getStyles(className).color"/>
          </div>
        </div>
      </q-menu>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { CvbConfigCtrl } from "./CvbConfigCtrl";
import type { Styles } from "./types";
import ColorInput from "@/components/ColorInput/ColorInput.vue";
import CvbIcon from "@/components/CvbIcon/CvbIcon.vue";

const { ctrl } = withDefaults(defineProps<{
  availableAttrs?: (keyof Styles)[];
  ctrl: CvbConfigCtrl;
  classes?: string[];
}>(), {
  availableAttrs: ['color']
});


const getStyles = (className: string) => {
  return ctrl.classes.value[className];
}
</script>

<style lang="scss">
.cvb-configurable {
  position: relative;

  &__panels {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0.2;

    .q-icon {
      cursor: pointer;
    }
  }

  &:hover {
    .cvb-configurable__panels {
      opacity: 1;
    }
  }
}
</style>