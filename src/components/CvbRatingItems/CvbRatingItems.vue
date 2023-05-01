<template>
  <div class="cvb-rating-items">
    <div class="cvb-rating-items__title"
         :class="titleClass"
         v-if="title">
      {{ title }}
    </div>
    <template v-for="item in modelValue">
      <score :max="10"
             v-model="item.level"/>
      <div :class="[`rating-${item.name}`]">
        {{ item.name }}: {{ item.level }}
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
// Basics
import { Score } from "@/components/Score";

const props = withDefaults(defineProps<{
  modelValue: { name: string; level: number }[];
  max?: number;
  title?: string;
  titleClass?: string | string[];
}>(), {
  max: 10
});
const emit = defineEmits([]);
// Model
// States
// Methods
// Computed
// Watchers
// Hooks
</script>

<style lang="scss">

</style>