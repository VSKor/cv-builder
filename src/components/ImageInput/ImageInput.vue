<template>
  <label :class="['image-input', stretch && `stretch-by-${stretch}`]">
    <div class="image-input__content">
      <img class="image-input__img"
           v-if="imgSrc"
           :src="imgSrc"
           :alt="encodedFile?.name || placeholder"/>
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
import { fileToBase64, EncodeFileResult } from "@/utils";

const { placeholder, toBase64, stretch: stretchProp, } = withDefaults(defineProps<{
  modelValue: string | File;
  toBase64?: boolean;
  placeholder?: string;
  stretch: 'width' | 'height' | 'auto';
}>(), {
  placeholder: 'no image',
});

const stretch = ref();

const encodedFile = ref<EncodeFileResult>(null);

const imgSrc = computed(() => encodedFile.value && `data:image;base64,${encodedFile.value.base64String}`);

const $emit = defineEmits(['update:modelValue'])

const handleFileSelect = async (e: Event & { target: HTMLInputElement & EventTarget }) => {
  const file = e.target.files && e.target.files[0];
  if (file) {
    encodedFile.value = await fileToBase64(file);

    if (stretchProp === 'auto') {
      // Define stretch according image sizes
      const img = document.createElement("img")
      img.onload = () => {
        stretch.value = img.height > img.width ? 'width' : 'height';
      };
      img.src = `data:image;base64,${encodedFile.value.base64String}`;
    }

    $emit('update:modelValue', toBase64 ? encodedFile.value : file);
  } else {
    encodedFile.value = null;
    $emit('update:modelValue', null);
  }
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