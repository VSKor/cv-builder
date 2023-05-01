<template>
  <div>
    <node :model-value="ctrl.model"></node>
  </div>
</template>

<script lang="ts" setup>
import { Node, type NodeModel } from "@/components/Node";
import { LayoutCtrl } from "@/components/Layout/LayoutCtrl";

const {layout} = defineProps<{
  layout: NodeModel;
}>()

const ctrl = new LayoutCtrl(layout);

</script>

<style lang="scss">
.cv {
  width: 210mm;
  min-height: 297mm;
  background-color: lightgrey;
}

//.node {
//  &:hover {
//    background-color: rgba(37, 13, 13, 0.1);
//  }
//}
</style>