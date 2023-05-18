<template>
  <label :class="['image-input', stretch && `stretch-by-${stretch}`]">
    <div class="image-input__content">
      <img class="image-input__img"
           :style="imageStyle"
           v-if="true"
           :src="modelValue"
           :alt="placeholder"/>
      <slot v-else
            name="placeholder">
          <span class="image-input__placeholder">
            {{ placeholder }}
          </span>
      </slot>
    </div>
    <input type="file"
           @input="handleFileSelect">
  </label>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { fileToBase64 } from "@/utils";

const props = withDefaults(defineProps<{
  modelValue: string;
  placeholder?: string;
  stretch?: 'width' | 'height' | 'auto';
  size?: string;
}>(), {
  placeholder: 'no image',
  stretch: 'auto',
  size: '50px'
});

const stretch = ref();

const imageStyle = computed(() => {
  return stretch.value === 'width' ? `width:${props.size};` : `height:${props.size};`
})

const $emit = defineEmits(['update:modelValue'])

const defineStretch = (value: string) => {
  // Define stretch according image sizes
  const img = document.createElement("img")
  img.onload = () => {
    stretch.value = img.height > img.width ? 'width' : 'height';
  };
  img.src = value;
}

const handleFileSelect = async (e: Event & { target: HTMLInputElement & EventTarget }) => {
  const file = e.target.files && e.target.files[0];
  const { name, base64String } = await fileToBase64(file);
  const base64FileSrc = file ? `data:image;filename:${name};base64,${base64String}` : null;
  if (base64FileSrc && props.stretch === 'auto') {
    defineStretch(base64FileSrc)
  }
  $emit('update:modelValue', base64FileSrc);

}

// Initial stretch definition
if (props.modelValue && props.stretch === 'auto') {
  defineStretch(props.modelValue);
}
</script>

<style lang="scss">
.image-input {
  $block: '.image-input';
  cursor: pointer;
  display: block;

  input[type=file] {
    display: none;
  }

  &.stretch-by-width,
  &.stretch-by-height {
    #{$block}__content {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #{$block}__img {
      position: absolute;
    }
  }

  &.stretch-by-width #{$block}__img {
    width: 100%;
    height: auto;
  }

  &.stretch-by-height #{$block}__img {
    width: auto;
    height: 100%;
  }
}
</style>