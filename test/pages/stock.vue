<template>
	<div class="w-full h-fit ">
		<div class="w-full mt-4 " v-for="deal in state.currentDeals">
			<dealComponent :deal=deal></dealComponent>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/stores/deals';
import dealComponent from '~/components/dealComponent.vue';

const state = usePostsStore();



</script>