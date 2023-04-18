<template>
  <div class="cv-template">
    <div class="header">
      <div class="left">
        <div class="photo">Photo</div>
      </div>
      <div class="column-2">
        <div class="name">{{ cv.fullName }}</div>
        <div class="title">{{ cv.position }}</div>
        <div class="description">{{ cv.shortDesc }}</div>
      </div>
    </div>
    <div class="body">
      <div class="left">
        <div class="contacts">
          <template v-for="contact in cv.contacts"
                    :key="contact.type">
            <div :class="['contact', `contact-${contact.type}`]">
              {{ contact.value }}
            </div>
          </template>
        </div>

        <div class="skills">
          <template v-for="skill in cv.skills">
            <div :class="['skill', `skill-${skill.name}`]">
              {{ skill.name }}: {{ skill.level }}
            </div>
          </template>
        </div>

        <div class="languages">
          <template v-for="language in cv.languages">
            <div :class="['language', `language-${language.name}`]">
              {{ language.name }}: {{ language.level }}
            </div>
          </template>
        </div>
      </div>
      <div class="column-2">
        <div class="work-experience-list">
          <template v-for="workExperience in cv.workExperience">
            <div class="work-experience">
              <div class="job-title">{{ workExperience.position }}</div>
              <div class="company">{{ workExperience.organisation.name }}</div>
              <div class="date">{{ workExperience.timeFrame }}</div>
              <div class="location">{{ workExperience.organisation.location }}</div>
              <div class="description">{{ workExperience.desc }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAppStore } from "@/stores";
import type { CV } from "@/types";

const cv = ref<CV>(useAppStore().cv);
</script>

<style lang="scss">
$A4width: 210mm;
$borderPadding: 15px;
$bgColor: rgb(249, 249, 249);

.cv-template {
  background-color: $bgColor;
  // A4 width
  width: $A4width;
  padding: $borderPadding;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    gap: $borderPadding;
  }

  .left {
    flex: 0 0 30%
  }
}
</style>