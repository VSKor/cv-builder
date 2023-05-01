<template>
  <template v-if="modelValue.childes">
    <div class="node"
         :class="nodeClasses"
         :data-node="modelValue.id">
      <template v-for="nodeDefs in modelValue.childes">
        <node :model-value="nodeDefs"></node>
      </template>
      <div class="node__add"
           v-if="editable">
        <div>
          <q-btn icon="add"
                 fab></q-btn>
          <q-menu>
            <q-card>
              <q-list>
                <q-item v-for="(getter, name) in componentMap"
                        clickable
                        @click="() => handleAdd(name)" v-close-popup>
                  {{ name }}
                </q-item>
              </q-list>
            </q-card>
          </q-menu>
        </div>
      </div>
    </div>
  </template>

  <template v-else>
    <component :is="modelValue.component"
               v-bind="modelValue.attributes"
               class="node"
               :class="modelValue.class"
               v-model="model"
               :data-node="modelValue.id"></component>
  </template>
</template>

<script lang="ts" setup>
// Basics
import type { NodeDefs, NodeModel, MultiNodeDefs } from "@/components/Node/types";
import { computed, reactive, ref, toRef } from "vue";
import { useAppStore } from "@/stores";
import { getByPath } from "@/components/Node/utils";

const appStore = useAppStore();

const props = defineProps<{
  modelValue: NodeDefs | MultiNodeDefs;
  editable?: boolean;
}>();
const emit = defineEmits([]);
// Model
const cv = useAppStore().cv;

if (props.modelValue.modelRef) {
  console.log(1, props.modelValue.modelRef);
  console.log(123, getByPath(cv, props.modelValue.modelRef, true));
}
const model = props.modelValue.modelRef ? toRef(...getByPath(cv, props.modelValue.modelRef, true)) : ref(null);
// Computed
const isNodeDefs = computed(() => !Array.isArray(props.modelValue));
// States
const nodeClasses = isNodeDefs.value ? props.modelValue.class : [];
// Methods
const getBlock = (type: 'row' | 'column') => {
  return {
    class: [type],
    childes: []
  };
}
const getEditBlock = () => {
  return {
    component: 'EditBlock',
    class: ["text"]
  };
}

// type: 'row' | 'column' | 'text'
const componentMap = {
  row: getBlock.bind(void 0, 'row'),
  column: getBlock.bind(void 0, 'column'),
  text: getEditBlock
}

const handleAdd = (type: string) => {
  props.modelValue.childes.push(componentMap[type]())
}
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

export default {
  components: {
    ColorInput,
    Score,
    EditBlock,
    CvbEditable,
    CvbRatingItems,
    ImageInput,
    CvbContacts,
    CvbWorkExperience
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