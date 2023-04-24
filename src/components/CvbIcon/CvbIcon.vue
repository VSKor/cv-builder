<template>
  <q-icon v-bind="$attrs"
          :class="['cvb-icon', `cvb-${icon}`]"/>
</template>

<script lang="ts" setup>
import type { IconsId } from "@/icon-font/icons";

defineProps<{ icon: IconsId | string; }>();
</script>

<style lang="scss">
.cvb-icon {
  vertical-align: baseline;
}
</style>