<template>
  <h1 class="text-3xl">Reusable components</h1>

  <div>
    <h2 class="text-2xl">Buttons</h2>
    <ButtonComponent :onClick="() => handleClick('test')">Button</ButtonComponent>
    <ButtonComponent :onClick="() => handleClick('dark-test')" :has-dark-background="true">Button</ButtonComponent>
  </div>
  <div>
    <h2 class="text-2xl">Chips</h2>
  </div>
  

</template>

<script setup lang="ts">
import ButtonComponent from '@/components/common/ButtonComponent.vue';



const handleClick = (message: string) => {
  alert(message)
}
</script>