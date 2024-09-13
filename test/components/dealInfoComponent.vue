<template>
  <div class="flex-1 flex flex-col gap-3">
    <div class="mt-5 text-card-grey">{{ deal.type }}</div>
    <div class="text-title-m">{{ deal.name }}</div>
    <div class="bg-[#F4F5F9] w-fit px-2 rounded-[5px] text-card-m py-[5px] flex gap-1">
      <img src="/icons/geo.png" class="w-[15px]" alt="Местоположение">
      {{ deal.city }}</div>
    <div class="flex gap-1 text-card-m-blue">
      <div class="text-card-grey">Продавец</div>
      {{ deal.seller }}
    </div>
    <div class="bg-[#F4F5F9] w-fit p-2 rounded-[10px] text-card-m">
      <div class="mb-[6px] text-card-grey">Вид товара </div>
      {{ deal.category }}
    </div>
    <div class="text-desc-blue">{{ deal.description }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Deal } from '~/models/deal';
const props = defineProps<{
  deal: Deal;
}>();
</script>