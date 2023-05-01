<template>
  <div class="cvb-contacts">
    <div class="cvb-contacts__title"
         :class="titleClass"
         v-if="title">
      {{ title }}
    </div>
    <template v-for="item in modelValue">
      <cvb-icon :icon="item.type"/>
      <span>
        {{ item.value }}
      </span>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { CvbIcon } from "@/components/CvbIcon";
// Basics
const props = defineProps<{
  modelValue: { type: string; value: string }[];
  title?: string;
  titleClass?: string | string[];
}>();
const emit = defineEmits([]);
</script>
