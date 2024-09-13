<template>
	<div class="w-full h-fit ">
		<div class="w-full mt-4 " v-for="deal in state.orderDeals">
			<paymentDealComnponent :deal=deal></paymentDealComnponent>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/stores/deals';
import paymentDealComnponent from '~/components/paymentDealComnponent.vue';

const state = usePostsStore();
</script>