<template>
  <div class="cvb-work-experience">
    <div class="cvb-work-experience__title"
         v-if="title">
      {{ title }}
    </div>
    <template v-for="workExperience in modelValue">
      <div class="cvb-work-experience_item">
        <cvb-editable class="job-title" v-model="workExperience.position"/>
        <cvb-editable class="company" v-model="workExperience.organisation.name"/>
        <div class="date">{{ workExperience.timeFrame }}</div>
        <cvb-editable class="location" v-model="workExperience.organisation.location"/>
        <cvb-editable class="description" v-model="workExperience.desc"/>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
// Basics
import type { WorkExperienceItem } from "@/components/CvbWorkExperience/types";
import { CvbEditable } from "@/components/CvbEditable";

const props = defineProps<{
  modelValue: WorkExperienceItem[];
  title?: string;
}>();
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