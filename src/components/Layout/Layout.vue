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