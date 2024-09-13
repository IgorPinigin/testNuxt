<template>
  <div class="flex gap-3 h-fit items-center text-l-font p-3 bg-[#F4F5F9] border rounded-[10px] border-[#E0E3EE] ">
    <div class="hover:text-[#2D3B87] cursor-pointer" @click="state.changeSortType('all')">
      Все типы
    </div>
    <div class="hover:text-[#2D3B87] cursor-pointer" @click="state.changeSortType('Разовое предложение')">
      Прямые продажи
    </div>
    <div class="hover:text-[#2D3B87] cursor-pointer" @click="state.changeSortType('Аукцион')">
      Аукцион
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/stores/deals';

const state = usePostsStore();
</script>