<template>
  <div class="cvb-contacts">
    <div class="cvb-contacts__title"
         :class="titleClass"
         v-if="title">
      {{ title }}
    </div>
    <cvb-contacts-item v-for="item in modelValue"
                       :model-value="item">
    </cvb-contacts-item>
  </div>
</template>

<script lang="ts" setup>
import CvbContactsItem from "./CvbContactsItem.vue";
// Basics
const props = defineProps<{
  modelValue: { type: string; value: string }[];
  title?: string;
  titleClass?: string | string[];
}>();
const emit = defineEmits([]);
</script>
