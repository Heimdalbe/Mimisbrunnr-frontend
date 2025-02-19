<template>
  <nav class="flex items-center justify-between flex-wrap bg-stone-950 md:px-10 sm:px-6 py-6">
    <div class="">
      <RouterLink to="/"><img src="@/assets/HeimdalBanner_pos.png" alt="Heimdal Logo" class="h-24 object-contain">
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/about" class="hover:text-white mr-4">About</RouterLink>
      <RouterLink to="/" class="hover:text-white mr-4">Albums</RouterLink>
      <RouterLink to="/" class="hover:text-white mr-4">Praesidium</RouterLink>
      <RouterLink to="/" class="hover:text-white mr-4">Evenementen</RouterLink>
    </div>
  </nav>

</template>

<script setup lang="ts">
</script>
