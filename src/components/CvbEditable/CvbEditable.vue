<template>
  <div class="cvb-editable"
       :class="{ editable, empty }">
    <q-editor
          class="cvb-editable__editor"
          v-model="content"
          :placeholder="placeholder"
          @update:modelValue="handleUpdate"
          @focus="handleFocus"
          @keyup.esc="handleEscape"
          ref="editorContentEl"
          :definitions="WYSIWYG_DEFS"
          :toolbar="GET_WYSIWYG_TOOLBAR()"
          :fonts="WYSIWYG_FONTS"
    ></q-editor>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { GET_WYSIWYG_TOOLBAR, WYSIWYG_FONTS } from "./constants";

const props = withDefaults(defineProps<{
  modelValue: string;
  placeholder?: string;
}>(), {
  placeholder: 'Type here...'
});

const $emit = defineEmits(['update:modelValue']);

const editable = ref(false);
const content = ref(props.modelValue);
const editorContentEl = ref();

const empty = computed(() => !content.value);

const handleUpdate = (value: string) => {
  $emit('update:modelValue', value);
}

const handleFocus = () => {
  editable.value = true;
}

const handleEscape = () => {
  editable.value = false;
  editorContentEl.value.getContentEl().blur();
}

const WYSIWYG_DEFS = {
  exit: {
    tip: 'Close editor (Esc)',
    icon: 'close',
    label: 'Close',
    handler: handleEscape
  }
}

watch(() => props.modelValue, (newValue) => {
  content.value = newValue;
});
</script>

<style lang="scss">
.cvb-editable {

  b {
    font-weight: bold;
  }

  i {
    font-style: italic;
  }

  .q-editor {
    border: none;
    background-color: initial;

    .q-editor__toolbars-container {
      transition: max-height 0.27s ease-in-out;
      overflow: hidden;
      max-height: 0;
      background-color: white;
    }

    .q-editor__content {
      transition: padding 0.27s ease-in-out;
      padding: 0;
      min-height: 0 !important;
    }
  }

  &.editable .q-editor {
    .q-editor__toolbars-container {
      max-height: 150px;
    }

    .q-editor__content {
      background-color: #fff;
      padding: 15px 0;
    }
  }
}
</style>