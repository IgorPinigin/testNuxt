<template>
  <div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { usePostsStore } from '~/stores/deals';

const router = useRouter();


const state = usePostsStore();

onMounted(async() => {
  await state.fetchDeals();
  router.push('/stock');
});
</script>