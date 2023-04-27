<template>
  <div>
    <node :model-value="layout"></node>
  </div>
</template>

<script lang="ts" setup>
import { Node, type NodeModel } from "@/components/Node";

defineProps<{
  layout: NodeModel;
}>()

</script>

<style lang="scss">
.cv {
  width: 210mm;
  min-height: 297mm;
  background-color: lightgrey;
}

.node {
  &:hover {
    background-color: rgba(37, 13, 13, 0.1);
  }
}
</style>