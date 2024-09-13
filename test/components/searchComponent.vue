<template>
	<div class="border rounded-[10px] border-[#E0E3EE] p-1 flex items-center">
		<div>
			<input class=" min-h-9 pl-5 pr-2 min-w-[200px]" v-model="filter" @input="_filterDeals" type="text">
		</div>
		<div class="p-[10px] bg-[#2D3B87] rounded-[10px] cursor-pointer" @click="_filterDeals">
			<img class="w-5 h-5" src="/icons/search.png" alt="Поиск">
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePostsStore } from '~/stores/deals';

const state = usePostsStore();
const filter = ref('');

const _filterDeals = () =>{
	state.filterDeals(filter.value);
	state.jopa;
}
</script>