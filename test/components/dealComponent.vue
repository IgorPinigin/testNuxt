<template>
	<div class="flex rounded-[20px] outline-1 outline outline-[#E0E3EE]">
		<imageBox :path=deal.image></imageBox>
		<dealInfoComponent :deal=deal></dealInfoComponent>
		<actionAndPriceComponent :deal=deal></actionAndPriceComponent>
	</div>
</template>

<script setup lang="ts">
import imageBox from './imageBox.vue';
import actionAndPriceComponent from './actionAndPriceComponent.vue';
import dealInfoComponent from './dealInfoComponent.vue';
import { defineProps } from 'vue';
import type { Deal } from '~/models/deal';
import { usePostsStore } from '~/stores/deals';
const state = usePostsStore();
const props = defineProps<{
  deal: Deal;
}>();
</script>