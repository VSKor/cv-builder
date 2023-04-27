<template>
  <div class="cv-template">
    <cvb-configurable-styles :ctrl="configurableCtrl"/>
    <div class="header">
      <div class="left">
        <div class="photo">
          <image-input v-model="cv.photoSrc"
                       stretch="auto"/>
        </div>
      </div>
      <div class="column-2">
        <h1 class="name">{{ cv.fullName }}</h1>
        <div class="title cv-subtitle">{{ cv.position }}</div>
        <cvb-editable class="description" v-model="cv.shortDesc"/>
      </div>
    </div>
    <div class="body">
      <div class="left">
        <div class="contacts">
          <template v-for="contact in cv.contacts"
                    :key="contact.type">
            <div :class="['contact', `contact-${contact.type}`]">
              <cvb-icon :icon="resolveContactTypeIcon(contact.type)"/>
              <span>{{ contact.value }}</span>
            </div>
          </template>
        </div>

        <div class="skills">
          <cvb-configurable :ctrl="configurableCtrl" :classes="['name']">
            <div class="cv-title">Skills</div>
          </cvb-configurable>
          <template v-for="skill in cv.skills">
            <div :class="['skill', `skill-${skill.name}`]">
              {{ skill.name }}: {{ skill.level }}
            </div>
          </template>
        </div>

        <div class="languages">
          <div class="cv-title">Languages</div>
          <template v-for="language in cv.languages">
            <score :max="10"
                   v-model="language.level"/>
            <div :class="['language', `language-${language.name}`]">
              {{ language.name }}: {{ language.level }}
            </div>
          </template>
        </div>
      </div>
      <div class="column-2">
        <div class="work-experience-list">
          <div class="cv-title">
            Work experience
          </div>
          <template v-for="workExperience in cv.workExperience">
            <div class="work-experience">
              <div class="job-title cv-subtitle">{{ workExperience.position }}</div>
              <div class="company">{{ workExperience.organisation.name }}</div>
              <div class="date">{{ workExperience.timeFrame }}</div>
              <div class="location">{{ workExperience.organisation.location }}</div>
              <cvb-editable class="description" v-model="workExperience.desc"/>
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
import { ImageInput } from "@/components/ImageInput";
import { Score } from "@/components/Score";
import { CvbIcon } from "@/components/CvbIcon";
import { CvbEditable } from "@/components/CvbEditable";
import CvbConfigurable from "@/components/CvbConfigurable/CvbConfigurable.vue";
import { CvbConfigCtrl } from "@/components/CvbConfigurable";
import CvbConfigurableStyles from "@/components/CvbConfigurable/CvbConfigurableStyles.vue";

const cv = ref<CV>(useAppStore().cv);

const configurableCtrl = new CvbConfigCtrl();
configurableCtrl.addClass('cv-title');
configurableCtrl.setClassAttr('cv-title', 'color', 'lime');

const resolveContactTypeIcon = (type: string) => {
  switch (type) {
    case 'email':
      return 'mail';
    case 'linkedin':
      return 'linkedin';
    case 'telegram':
      return 'telegram';
    case 'location':
      return 'location';
  }
};
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

  .photo .image-input {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  .cv-title {
    margin-bottom: 15px;
  }
  .work-experience-list {}
  .work-experience {
    padding: 0 0 15px 0;
  }
}
</style>