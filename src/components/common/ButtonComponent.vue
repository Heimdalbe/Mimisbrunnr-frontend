<template>
<button @click="props.onClick" :class="classObject">
  <slot></slot>
</button>
</template>

<script setup lang="ts">
import type ButtonProps from '@/models/common/ButtonProps'
import { computed } from 'vue';

const props = defineProps<ButtonProps>()

const classObject = computed(() => ({
  'bg-dark': props.hasDarkBackground
}))
</script>