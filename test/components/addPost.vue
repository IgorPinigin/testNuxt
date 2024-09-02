<template>
  <div class=" flex flex-col h-fit p-4 w-1/2 absolute left-1/2 top-1/2 -translate-x-1/2 rounded-lg custom-table-shadow -translate-y-1/2 bg-white/45">
		Введи заголовок поста
		<input type="text" class="mb-4 outline-none pl-2 py-2 rounded-lg" v-model="title">
		Введи текст поста
		<input type="text" class="mb-4 outline-none pl-2 py-2 rounded-lg" v-model="text">
		<button class="w-ful h-fit py-2 bg-white/50 rounded-lg hover:shadow-xl" @click="store.addPost(title, text)">Добавить пост</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePostsStore } from '~/stores/posts';

const store = usePostsStore();
const title = ref('');
const text = ref('');


</script>
