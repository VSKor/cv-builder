<template>
  <div class="cvb-contacts-item">
      <cvb-icon :icon="modelValue.type"/>
      <span>
        {{ modelValue.value }}
      </span>
  </div>
</template>

<script lang="ts" setup>
import { CvbIcon } from "@/components/CvbIcon";
// Basics
const props = defineProps<{
  modelValue: { type: string; value: string };
}>();
</script>
