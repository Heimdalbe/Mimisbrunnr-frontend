<template>
  <div class="max-w-64 aspect-[3/4] bg-[url(https://picsum.photos/300/400)] flex flex-col rounded-lg">
    <div class="card-event-type rounded-full aspect-square w-11 bg-black border-white border-[1px] mt-2 ml-auto mr-2">
      <p class="text-white font-bold text-xl text-center">S</p>
    </div>
    <div class="grow"></div>
    <div class="card-title bg-black/[0.8] backdrop-blur-sm grid grid-cols-4 items-center py-6 text-white rounded-b-lg">
      <div class="flex flex-col text-center">
        <p class="text-3xl font-bold">{{props.startDate.getUTCDate()}}</p>
        <p class="font-bold">{{ month }}</p>
      </div>
    <div class="pl-4 col-span-3 flex flex-col border-l-2 border-green-400">
        <h2 class="text-md font-bold mb-1">{{props.title}}</h2>
        <p class="text-xs text-green-400">{{hours}}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '@/models/Category';

interface Event {
  title: string,
  startDate: Date,
  endDate: Date,
  category: Category
}

const props = defineProps<Event>()
const month = props.startDate.toLocaleString('default', {month: 'long'}).slice(0,3);

const hours = `${props.startDate.toLocaleString('default', {timeStyle: 'short', hour12: false})} - ${props.endDate.toLocaleString('default', {timeStyle: 'short', hour12: false})}`

</script>
  