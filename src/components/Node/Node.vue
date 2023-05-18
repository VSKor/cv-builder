<template>
  <component :is="nodeDefs.component || 'div'"
             v-bind="handledAttributes"
             class="node"
             :key="nodeDefs"
             :data-node="nodeDefs.uid">
    <template v-for="childDefs in nodeDefs.childes"
              :key="childDefs.uid">
      <node :node-defs="childDefs"
            :context="prepareContext()"></node>
    </template>
  </component>
</template>

<script lang="ts" setup>
// Basics
import type { NodeAttributes, NodeDefs } from "@/components/Node/types";
import { useAppStore } from "@/stores";
import { toRefByPath } from "@/components/Node/utils";

const props = defineProps<{
  nodeDefs: NodeDefs;
  context?: any
}>();
// Model
const cv = useAppStore().cv;

const prepareContext = () => {
  return {};
};

const handleAttributes = () => {
  const attributes = props.nodeDefs.attributes || {};
  return (Object.keys(attributes) as (keyof NodeAttributes)[]).reduce((attrs, attr) => {
    let attributeValue = attributes[attr];
    let handledAttribute = attr;

    if (attr === "model") {
      attributeValue = toRefByPath(cv, attributeValue);
      return {
        ...attrs,
        modelValue: attributeValue.value,
        "onUpdate:modelValue": ($event: any) => {
          attributeValue.value = $event;
        }
      };
    }

    return { ...attrs, [handledAttribute]: attributeValue };
  }, {});
};
const handledAttributes = handleAttributes()

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
import { CvbContacts, CvbContactsItem } from "@/components/CvbContacts";
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
    CvbContactsItem,
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