<template>
  <div class="">
    <div class=" h-10 bg-[#E0E3EE] rounded-b-lg"></div>
    <div class=" mt-5 flex justify-end">
      <div v-for="card, index in cards">
        <nuxt-link :to="card.link">
          <navigationButton
            :image-src=card.imageSrc
            :caption=card.caption
            :class="{'bg-[#F4F5F9] rounded-[10px]': state.page === index}"
            @click="state.setPage(index)"> 
          </navigationButton>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import navigationButton from './navigationButton.vue';
import { ref } from 'vue';
import { usePostsStore } from '~/stores/deals';

const state = usePostsStore();

const cards = ref([{
    link: '/favorites',
    imageSrc: '/icons/favourite.png',
    caption: 'Избранное'
  },
  {
    link: '/stock',
    imageSrc: '/icons/stock.png',
    caption: 'Склад'
  },
  {
    link: '/bag',
    imageSrc: '/icons/bag.png',
    caption: 'Сделки'
  },])

</script>