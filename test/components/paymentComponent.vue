<template>
	<div class="outline outline-1 outline-[#E0E3EE] rounded-[20px] flex flex-col h-[366px] justify-between w-[312px] p-5 ">
		<div>
			<div class="mb-2 text-price-blue">{{ deal.price * deal.quantity  }} ₽</div>
			<div class="flex justify-between text-card-grey mb-[10px]">
				<div>Количество</div>
				<div class="text-card-m-blue">{{ deal.quantity }} шт.</div>
			</div>
			<div class="flex justify-between text-card-grey">
				<div>Стоимость за штуку</div>
				<div class="text-card-m-blue">{{ deal.price }} ₽</div>
			</div>
		</div>
		<div class="flex justify-between gap-3">
			<button 
				:class="deal.isDeal === true ? 'bg-[#69C57F] text-add-button-dis':'bg-[#F4F5F9] text-add-button'" 
				class="rounded-[10px] h-[50px] flex-1 " 
				@click="_payOrderDeal"
				:disabled="!deal.isDeal">
				{{deal.isDeal === true ? 'Оплатить' : 'Оплачено'}}
				
			</button>
			<button 
				:class="deal.wish === true ? 'bg-[#2D3B87]':'bg-[#F4F5F9]'" 
				class=" rounded-[10px] w-[50px]" 
				@click="_addWishDeal"
				:disabled="!deal.isDeal">
				<img class="w-5 h-5 mx-auto " 
					:src="deal.wish === true ? '/icons/unwish.png' : '/icons/favourite.png'" 
					alt="Нравится">
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { Deal } from '~/models/deal';
import { usePostsStore } from '~/stores/deals';

const props = defineProps<{
  deal: Deal;
}>();

const state = usePostsStore();

const _addWishDeal = () => {
  state.addWishDeal(props.deal);
}
const _payOrderDeal = () => {
  state.payOrderDeal(props.deal);
}

</script>