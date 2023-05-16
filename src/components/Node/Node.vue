<template>
  <component :is="modelValue.component || 'div'"
             v-bind="modelValue.attributes"
             class="node"
             :class="modelValue.class"
             v-model="model"
             :key="modelValue.id"
             :data-node="modelValue.id">
    <template v-for="nodeDefs in modelValue.childes"
              :key="nodeDefs.id">
      <node :model-value="nodeDefs"></node>
    </template>
  </component>
</template>

<script lang="ts" setup>
// Basics
import type { NodeDefs } from "@/components/Node/types";
import { ref } from "vue";
import { useAppStore } from "@/stores";
import { toRefByPath } from "@/components/Node/utils";

const props = defineProps<{
  modelValue: NodeDefs;
  editable?: boolean;
}>();
// Model
const cv = useAppStore().cv;
const model = props.modelValue.modelRef ? toRefByPath(cv, props.modelValue.modelRef) : ref(null);
// Computed
// States
// Methods
// Watchers
// Hooks
</script>

<script lang="ts">
import { ColorInput } from "@/components/ColorInput";
import { Score } from "@/components/Score";
import { EditBlock } from "@/components/EditBlock";
import { CvbEditable } from "@/components/CvbEditable";
import { CvbRatingItems } from "@/components/CvbRatingItems";
import { ImageInput } from "@/components/ImageInput";
import { CvbContacts } from "@/components/CvbContacts";
import { CvbWorkExperience } from "@/components/CvbWorkExperience";
import { CvbConfigurable } from "@/components/CvbConfigurable";

export default {
  components: {
    ColorInput,
    Score,
    EditBlock,
    CvbEditable,
    CvbRatingItems,
    ImageInput,
    CvbContacts,
    CvbWorkExperience,
    CvbConfigurable
  }
}
</script>

<style lang="scss">
.node {
  &.column {
    display: flex;
    flex-direction: column;
    flex-wrap: initial;
  }

  &.row {
    display: flex;
    flex-direction: row;
    flex-wrap: initial;
  }

  .node__add {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>