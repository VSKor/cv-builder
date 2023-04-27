<template>
  <template v-if="modelValue.childes">
    <div class="node"
         :class="nodeClasses">
      <template v-for="nodeDefs in modelValue.childes">
        <node :model-value="nodeDefs"></node>
      </template>
      <div class="node__add">
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
               v-model="model"></component>
  </template>
</template>

<script lang="ts" setup>
// Basics
import type { NodeDefs, NodeModel, MultiNodeDefs } from "@/components/Node/types";
import { computed, reactive, ref, toRef } from "vue";
import { useAppStore } from "@/stores";

const appStore = useAppStore();

console.log(123, appStore.cv);

const a = () => appStore.cv.fullName
const props = defineProps<{
  modelValue: NodeDefs | MultiNodeDefs;
}>();
const emit = defineEmits([]);
// Model
const model = props.modelValue.modelRef ? toRef(useAppStore().cv, props.modelValue.modelRef) : ref(null);
// Computed
const isNodeDefs = computed(() => !Array.isArray(props.modelValue));
// States
const nodeClasses = isNodeDefs.value ? props.modelValue.class : [];
// Methods
const resolveModel = (nodeDefs: NodeDefs) => {
  return appStore.cv.fullName;
  if(nodeDefs.modelRef) {
    return ref(useAppStore().cv[nodeDefs.modelRef]);
  }
  return ref('null');
};
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

export default {
  components: {
    ColorInput,
    Score,
    EditBlock
  }
}
</script>

<style lang="scss">
.node {
  display: flex;
  position: relative;

  &.cv {
    //display: block;
    //justify-content: initial;
    //align-items: initial;
  }

  &.column {
    flex-direction: column;
    flex-grow: 1;
  }

  &.row {
    flex-direction: row;
  }

  .node__add {
    justify-self: flex-end;
  }
}
</style>