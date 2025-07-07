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
  
  <div>
    <h2 class="text-2xl mb-4">Text</h2>

    <h1>Dit is een titel</h1>
    <h2>Tussentitel 2</h2>
    <h3>Tussentitel 3</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maxime, rem consequatur, dicta pariatur ipsam aliquid ullam doloremque a illo officiis vero harum magni eos deleniti at architecto nobis. Odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem mollitia nisi laborum. Quisquam aliquam possimus distinctio quaerat molestias necessitatibus. Vero facere cum nesciunt minus natus deleniti ipsum. Necessitatibus, dolorum?</p>
    <p class="informative">informatieve tekst Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laudantium reprehenderit autem quod fuga, dignissimos veritatis, expedita maxime recusandae quasi voluptas id! Voluptate facere quaerat, numquam assumenda ex quam possimus!</p>
    <p class="footnote">footnote</p>
  </div>

  <div>
    <h2>Links</h2>
    <a href="">Lees meer...</a>
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