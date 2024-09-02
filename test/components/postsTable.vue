<template>
  <div class="relativ">
    <div class="mx-auto w-full h-full" :class="addPostShow ? 'blur':''" @click="addPostShow = false">
      <div v-if="store.load === 'loading'" class="mx-auto w-5/6 h-[calc(100vh-120px)] custom-table-shadow overflow-hidden bg-white/5 rounded-xl flex items-center">
        <div class="mx-auto text-white"> Данные загружаются, пожалуйста подождите...</div>
      </div>
      <div v-if="store.load === 'loaded'" class="mx-auto w-5/6 h-[calc(100vh-120px)] overflow-y-auto custom-table-shadow overflow-hidden bg-white/5 rounded-xl ">
        <table class="">
          <thead class=" text-left sticky top-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-light">
            <tr>
              <th class=" px-3 py-2 w-[3%] flex">ID <div class="ml-1 cursor-pointer" @click="store.sortUpdate">{{store.sort ? 'убыв' : 'возр'}}</div></th>
              <th class=" px-4 py-2 w-[17%]">Title</th>
              <th class=" px-4 py-2 w-[80%]">Content</th>
            </tr>
          </thead>
          <tbody class="bg-white/30 text-sm align-top text-gray-800">
            <tr class=" hover:bg-blue-500/30 border-b-2 last:border-0 border-blue-500" :class="index % 2 === 0 ? 'bg-white/20':''" v-for="post, index in store.currentPosts" :key="index">
              <td class="py-2 px-3">{{ post['id'] }}</td>
              <td class="px-4 py-2">{{ post['title'] }}</td>
              <td class="px-4 py-2">{{ post['content'] }}</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <div class="mt-3 mx-auto w-5/6">
        <button class="py-2 px-6 hover:bg-white/50 hover:shadow-xl bg-white/20 rounded-lg text-white mr-2" @click="store.previousPage" :disabled="store.currentPage === 1">Назад</button>
        <button class="py-2 px-6 hover:bg-white/50 hover:shadow-xl bg-white/20 rounded-lg text-white mr-2" @click="store.nextPage" :disabled="store.currentPage === store.totalPages">Вперед</button>
        <button class="py-2 px-6 hover:bg-white/50 hover:shadow-xl bg-white/20 rounded-lg text-white mr-2" @click.stop="_addPost">Добавить пост</button>
      </div>
      
    </div>
    <div v-if="addPostShow">
      <addPost/>
    </div>
    
  </div>  
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { usePostsStore } from '~/stores/posts';
  import addPost from '~/components/addPost.vue';

  const store = usePostsStore();
  const addPostShow = ref(false);

  
  
  onMounted(()=>store.fetchPosts());
  
  const _addPost = () =>{
    addPostShow.value = true;
  }
  </script>