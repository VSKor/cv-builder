<template>
  <div class="cvb-configurable"
       :class="{ highlight }">
    <div class="cvb-configurable__panels"
         @mouseover="handleMouseOver"
         @mouseout="handleMouseOut">
      <q-icon name="settings"></q-icon>
      <q-menu anchor="center left">
        <cvb-configurable-panel :ctrl="ctrl"
                                :classes="classes"
                                :attributes="attributes"
                                @mouseover="handleMouseOver"
                                @mouseout="handleMouseOut"></cvb-configurable-panel>
      </q-menu>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import type { CvbConfigCtrl } from "./CvbConfigCtrl";
import CvbConfigurablePanel from "@/components/CvbConfigurable/CvbConfigurablePanel.vue";
import { ref } from "vue";

const props = defineProps<{
  ctrl: CvbConfigCtrl;
  classes?: string[];
  attributes?: string[];
}>();

const highlight = ref(false);

const handleMouseOver = () => {
  highlight.value = true
};

const handleMouseOut = () => {
  highlight.value = false
};
</script>

<style lang="scss">
.cvb-configurable {
  position: relative;

  &.highlight {
    .cvb-configurable__panels + * {
      outline: 1px solid red;
    }
  }

  &__panels {
    display: inline-flex;
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