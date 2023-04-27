<template>
  <div>cv builder</div>

  <c-v-template></c-v-template>

  <layout :layout="cvLayout"></layout>
</template>

<script lang="ts" setup>
import { CVTemplate } from "@/components/CVTemplate";
import { Layout } from "@/components/Layout";
import { ref } from "vue";
import type { NodeModel } from "@/components/Node/types";

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
              class: ["photo", "row"],
              childes: []
            },
          ]
        },
        {
          class: ["right", "column"],
          childes: [
            {
              component: "EditBlock",
              class: ["name", "row"],
              modelRef: "contacts[0]"
            },
            {
              class: ["title", "row"],
              childes: []
            },
            {
              class: ["description", "row"],
              childes: []
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
              class: ["contacts", "row"],
              childes: []
            },
            {
              class: ["skills", "row"],
              childes: []
            },
            {
              class: ["languages", "row"],
              childes: []
            },
          ]
        },
        {
          class: ["right", "column"],
          childes: [
            {
              class: ["work-experience", "row"],
              childes: []
            },
          ]
        },
      ]
    },
  ]
});

console.log(111, cvLayout);

</script>
