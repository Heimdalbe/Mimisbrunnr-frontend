<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/navbar/Navbar.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <Navbar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
