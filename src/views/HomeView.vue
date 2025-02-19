<script setup lang="ts">
import EventCard from '@/components/events/EventCard.vue';
import { Category } from '@/models/Category';

const events = [
  {
    title: 'Comfy Secret Santa',
    startDate: new Date(2024, 11, 18, 21, 0, 0),
    endDate: new Date(2024, 11, 18, 23, 0, 0),
    category: Category.Culture
  },
  {
    title: 'Heimdal Weekend',
    startDate: new Date(2024, 1, 14, 18, 0, 0),
    endDate: new Date(2024, 1, 16, 18, 0, 0),
    category: Category.Culture
  },
  {
    title: 'Heimdal Weekend',
    startDate: new Date(2024, 1, 14, 18, 0, 0),
    endDate: new Date(2024, 1, 16, 18, 0, 0),
    category: Category.Culture
  },
  {
    title: 'Heimdal Weekend',
    startDate: new Date(2024, 1, 14, 18, 0, 0),
    endDate: new Date(2024, 1, 16, 18, 0, 0),
    category: Category.Culture
  }

]

</script>

<template>
  <main>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <template v-for="event in events" :key="event.title">
        <EventCard :title="event.title" :start-date="event.startDate" :end-date="event.endDate"
          :category="event.category" class="mx-auto my-4" />
      </template>
    </div>
  </main>
</template>
