<template>
  <div class="cvb-configurable">
    <div class="cvb-configurable__panels">
      <q-icon name="settings"></q-icon>
      <q-menu anchor="center left">
        <cvb-configurable-panel :ctrl="ctrl"
                                :classes="classes"></cvb-configurable-panel>
      </q-menu>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { CvbConfigCtrl } from "./CvbConfigCtrl";
import CvbConfigurablePanel from "@/components/CvbConfigurable/CvbConfigurablePanel.vue";

const { ctrl } = defineProps<{
  ctrl: CvbConfigCtrl;
  classes?: string[];
}>();
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