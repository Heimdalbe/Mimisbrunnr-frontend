<template>
  <span class="chip" :class="classObject">
    {{ props.text }}
  </span>
</template>

<script setup lang="ts">
import type ChipProps from '@/models/common/ChipProps'
import { Audience } from '@/models/common/ChipProps';
import { computed } from 'vue';

const props = defineProps<ChipProps>()

const classObject = computed(() => ({
  'open': props.text == Audience.OPEN,
  'closed': props.text == Audience.CLOSED,
  'bg-dark': props.hasDarkBackground
}))
</script>