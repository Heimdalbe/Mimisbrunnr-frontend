<template>
  <nav class="flex items-center justify-between flex-wrap bg-stone-950 md:px-10 sm:px-6 py-6">
    <div class="">
      <RouterLink to="/"><img src="@/assets/HeimdalBanner_pos.png" alt="Heimdal Logo" class="h-24 object-contain" />
      </RouterLink>
    </div>
    <div class="flex items-center">
      <div class="relative group">
        <button class="hover:text-white mr-4">About &#11167;
        </button>
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

      <RouterLink to="/" class="text-black px-2 py-1 bg-green-600 hover:bg-green-500 rounded-full">Contact Us
      </RouterLink>
      <RouterLink to="/" class="hover:text-white mr-4 ml-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-9 stroke-green-600 hover:stroke-green-500">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
