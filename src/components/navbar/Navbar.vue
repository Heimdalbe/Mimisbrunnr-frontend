<template>
  <nav class="flex items-center justify-between flex-wrap bg-stone-950 md:px-10 sm:px-6 py-6">
    <div class="">
      <RouterLink to="/"><img src="@/assets/HeimdalBanner_pos.png" alt="Heimdal Logo" class="h-24 object-contain" />
      </RouterLink>
    </div>
    <div class="flex items-center">
      <div class="relative group">
        <button class="hover:text-white mr-4">About</button>
        <div
          class="absolute opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 bg-zinc-950 w-48 transition-opacity duration-300 ease-in-out">
          <!-- TODO: general styling, links uitvullen -->
          <RouterLink to="/" class="block px-4 py-2 hover:bg-zinc-900">Over Ons</RouterLink>
          <RouterLink to="/" class="block px-4 py-2 hover:bg-zinc-900">Clublied</RouterLink>
          <RouterLink to="/" class="block px-4 py-2 hover:bg-zinc-900">Foto's</RouterLink>
          <RouterLink to="/" class="block px-4 py-2 hover:bg-zinc-900">Boekje</RouterLink>
          <RouterLink to="/" class="block px-4 py-2 hover:bg-zinc-900">Statuten</RouterLink>
          <RouterLink to="/" class="block px-4 py-2 hover:bg-zinc-900">Werkgroepen</RouterLink>
        </div>
      </div>
      <RouterLink to="/" class="hover:text-white mr-4">Albums</RouterLink>
      <RouterLink to="/" class="hover:text-white mr-4">Praesidium</RouterLink>
      <RouterLink to="/" class="hover:text-white mr-4">Evenementen</RouterLink>

      <RouterLink to="/" class="text-white px-2 py-1 bg-green-600 rounded-full">Contact Us</RouterLink>

      <RouterLink to="/" class="hover:text-white mr-4"><svg></svg></RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>
