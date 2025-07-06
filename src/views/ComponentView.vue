<template>
  <h1 class="text-3xl">Reusable components</h1>

  <div>
    <h2 class="text-2xl mb-4">Buttons</h2>
    <ButtonComponent :onClick="() => handleClick('test')">Button</ButtonComponent>
    <ButtonComponent :onClick="() => handleClick('dark-test')" :has-dark-background="true">Button</ButtonComponent>
  </div>
  <div>
    <h2 class="text-2xl mb-4">Chips</h2>
    <ChipComponent :text="Audience.OPEN">Open</ChipComponent>
    <ChipComponent :text="Audience.OPEN" :has-dark-background="true">Closed</ChipComponent>
    <ChipComponent :text="Audience.CLOSED">Open</ChipComponent>
  </div>
  

</template>

<script setup lang="ts">
import ButtonComponent from '@/components/common/ButtonComponent.vue';
import ChipComponent from '@/components/common/ChipComponent.vue';
import { Audience } from '@/models/common/ChipProps';



const handleClick = (message: string) => {
  alert(message)
}
</script>