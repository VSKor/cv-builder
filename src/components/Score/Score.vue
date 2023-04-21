<template>
  <div class="score"
       :style="`
  --score-active-point-color: ${activeColor};
  --score-point-color: ${color};
  --score-point-size: ${styleSize};
  `">
    <div v-for="point in max"
         :data-point="point"
         :key="point"
         class="point"
         :class="{active: point <= modelValue, current: modelValue === point }"
         @mouseup="handleMouseUp(point)">
      {{ point }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const { size } = withDefaults(defineProps<{
  modelValue?: number;
  max?: number;
  // Styling
  color?: string;
  activeColor?: string;
  size?: string | number;
}>(), {
  max: 10,
  color: '#d3d3d3',
  activeColor: '#2c2c2c',
  size: 13
});

const $emit = defineEmits(['update:modelValue']);

const styleSize = computed(() => typeof size === "number" ? `${size}px` : size);

const handleMouseUp = (point: number) => {
  $emit('update:modelValue', point);
}
</script>

<style lang="scss">
.score {
  display: flex;
  justify-content: stretch;

  &:hover {
    .point.active ~ .point:after {
      background-color: var(--score-active-point-color);
    }

    .point:hover ~ .point:after {
      background-color: var(--score-point-color);
    }
  }

  .point {
    display: flex;
    justify-content: center;
    cursor: pointer;
    font-size: 0;
    height: var(--score-point-size);
    flex: 1 1 auto;

    &:after {
      display: block;
      content: '';
      width: var(--score-point-size);
      height: var(--score-point-size);
      background-color: var(--score-point-color);
      border-radius: 50%;
    }

    &.active {
      &:after {
        background-color: var(--score-active-point-color);
      }
    }

    &.current {
      transform: scale(1.2);
    }
  }
}
</style>
