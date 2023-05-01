<template>
  <div>cv builder</div>
  <c-v-template></c-v-template>

  <cvb-configurable-panel :ctrl="configurableCtrl"/>
  <div>
    <cvb-configurable-styles :ctrl="configurableCtrl"/>
    <layout :layout="cvLayout"></layout>
  </div>
</template>

<script lang="ts" setup>
import { CVTemplate } from "@/components/CVTemplate";
import { Layout } from "@/components/Layout";
import { ref } from "vue";
import type { NodeModel } from "@/components/Node/types";
import CvbConfigurableStyles from "@/components/CvbConfigurable/CvbConfigurableStyles.vue";
import { CvbConfigCtrl } from "@/components/CvbConfigurable";
import CvbConfigurablePanel from "@/components/CvbConfigurable/CvbConfigurablePanel.vue";

const configurableCtrl = new CvbConfigCtrl({
  classes: {
    "cv": {
      padding: "15px",
      bg: "rgb(249, 249, 249)"
    },
    "left": {
      width: "40%",
      padding: "0 15px 0 0"
    }
  }
});



const cvLayout = ref<NodeModel>({
  class: ['cv', 'column'],
  childes: [
    {
      class: ["header", "row"],
      childes: [
        {
          class: ["left", "column"],
          childes: [
            {
              component: "ImageInput",
              class: ["photo"],
              modelRef: "photoSrc"
            },
          ]
        },
        {
          class: ["right", "column"],
          childes: [
            {
              component: "CvbEditable",
              class: ["name"],
              modelRef: "fullName",
            },
            {
              component: "CvbEditable",
              class: ["title"],
              modelRef: "position",
            },
            {
              component: "CvbEditable",
              class: ["description"],
              modelRef: "shortDesc",
            },
          ]
        },
      ]
    },
    {
      class: ["body", "row"],
      childes: [
        {
          class: ["left", "column"],
          childes: [
            {
              component: "CvbContacts",
              class: ["contacts"],
              modelRef: "contacts",
            },
            {
              component: "CvbRatingItems",
              class: ["skills"],
              attributes: {
                title: "skills"
              },
              modelRef: "skills"
            },
            {
              component: "CvbRatingItems",
              class: ["languages"],
              attributes: {
                title: "languages"
              },
              modelRef: "languages"
            },
          ]
        },
        {
          class: ["right", "column"],
          childes: [
            {
              component: "CvbWorkExperience",
              class: ["work-experience"],
              modelRef: 'workExperience'
            },
          ]
        },
      ]
    },
  ]
});

console.log(111, cvLayout);

</script>
