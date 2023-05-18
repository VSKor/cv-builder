<template>
  <div>cv builder</div>
  <c-v-template></c-v-template>

  <cvb-configurable-panel :ctrl="configurableCtrl"
                          :classes="[...configurableCtrl.styles.keys()]"
                          class="config-panel"/>

  <div>
    <cvb-configurable-styles :ctrl="configurableCtrl"/>
    <layout :layout="cvLayout"></layout>
  </div>
</template>

<script lang="ts" setup>
import { CVTemplate } from "@/components/CVTemplate";
import { Layout } from "@/components/Layout";
import { ref } from "vue";
import type { RawNodeDefs } from "@/components/Node";
import { CvbConfigCtrl, CvbConfigurableStyles, CvbConfigurablePanel } from "@/components/CvbConfigurable";

const configurableCtrl = new CvbConfigCtrl({
  styles: {
    "cv": {
      width: "210mm",
      "min-height": "297mm",
      padding: "15px",
      bg: "rgb(249, 249, 249)"
    },
    "left": {
      width: "40%",
      padding: "0 15px 0 0"
    },
    "name": {
      "font-size": "20px",
    },
    "title": {},
    "description": {},
    "photo": {
      "width": "150px",
      "height": "150px",
      "border-radius": "50%",
      "overflow": "hidden",
      "margin": "15px"
    },
    "photo-container": {
      "align-items": "center"
    },
  }
});


const layoutDefs: RawNodeDefs = {
  attributes: {
    class: ['cv', 'column'],
  },
  childes: [
    {
      attributes: {
        class: ["header", "row"],
      },
      childes: [
        {
          attributes: { class: ["left", "column", "photo-container"], },
          childes: [
            {
              component: "CvbConfigurable",
              attributes: {
                ctrl: configurableCtrl,
                class: ["photo-container"],
              },
              childes: [
                {
                  component: "ImageInput",
                  "attributes": {
                    "size": "150px",
                    class: ["photo"],
                    model: "photoSrc"
                  }
                },
              ]
            }
          ]
        },
        {
          attributes: { class: ["right", "column"], },
          childes: [
            {
              component: "CvbConfigurable",
              attributes: {
                ctrl: configurableCtrl,
                classes: ["name"],
                class: ["name-container"],
              },
              childes: [
                {
                  component: "CvbEditable",
                  attributes: {
                    "model": "fullName",
                    class: ["name"],
                  }
                },
              ]
            },
            {
              component: "CvbConfigurable",
              attributes: {
                class: ["name-container"],
                ctrl: configurableCtrl,
                classes: ["title"],
              },
              childes: [
                {
                  component: "CvbEditable",
                  attributes: {
                    class: ["title"],
                    model: "position"
                  }
                },
              ]
            },
            {
              component: "CvbConfigurable",
              attributes: {
                class: ["name-container"],
                ctrl: configurableCtrl,
                classes: ["description"],
              },
              childes: [
                {
                  component: "CvbEditable",
                  attributes: {
                   class: ["description"],
                    model: "shortDesc"
                  }
                },
              ]
            }
          ]
        },
      ]
    },
    {
      attributes: {
        class: ["body", "row"],
      },
      childes: [
        {
          attributes: { class: ["left", "column"], },
          childes: [
            {
              component: "CvbContacts",
              attributes: {
                class: ["contacts"],
                model: "contacts"
              }
            },
            {
              component: "CvbRatingItems",
              attributes: {
                class: ["skills"],
                title: "skills",
                model: "skills",
              },
            },
            {
              component: "CvbRatingItems",
              attributes: {
                class: ["languages"],
                title: "languages",
                model: "languages",
              },
            },
          ]
        },
        {
          attributes: { class: ["right", "column"], },
          childes: [
            {
              component: "CvbWorkExperience",
              attributes: {
                class: ["work-experience"],
                model: "workExperience",
              }
            },
          ]
        },
      ]
    },
  ]
};

const cvLayout = ref(layoutDefs);
</script>

<style lang="scss">
.config-panel {
  width: 500px;
  margin: 15px;
}
</style>