<template>
  <div :contenteditable="editable"
       v-text="modelValue"
       @blur="handleBlur"></div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  modelValue: string;
  editable?: boolean;
}>(), {
  editable: true
});

const $emit = defineEmits(["update:modelValue"]);

const handleBlur = (e: Event) => {
  $emit("update:modelValue", e.target.innerText);
};
</script>
