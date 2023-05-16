<template>
  <div>
    <node :model-value="ctrl.model"></node>
  </div>
</template>

<script lang="ts" setup>
import { Node, type NodeDefs } from "@/components/Node";
import { LayoutCtrl } from "@/components/Layout/LayoutCtrl";

const {layout} = defineProps<{
  layout: NodeDefs;
}>()

const ctrl = new LayoutCtrl(layout);
</script>