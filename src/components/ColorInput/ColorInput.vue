<template>
  <div class="color-input">
    <div class="color-input__color"
         :style="`background-color: ${color}`"></div>
    <q-menu>
      <q-color v-model="color"
               @update:modelValue="handleUpdate"></q-color>
    </q-menu>
  </div>
</template>

<script lang="ts" setup async>
import { ref } from "vue";

const props = withDefaults(defineProps<{
  modelValue?: string;
}>(), {
  modelValue: '#000'
});

const $emits = defineEmits(['update:modelValue']);

const color = ref(props.modelValue);

const handleUpdate = (newColor: string) => {
  color.value = newColor;
  $emits('update:modelValue', color.value);
}
</script>

<style lang="scss">
.color-input {
  &__color {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>