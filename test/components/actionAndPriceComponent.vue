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
			<button class="bg-[#F4F5F9] rounded-[10px] h-[50px] flex-1 text-add-button" @click="_addOrderDeal">{{deal.isDeal === true ? 'Добавлено':'Добавить в сделки'}}</button>
			<button :class="deal.wish === true ? 'bg-[#2D3B87]':'bg-[#F4F5F9]'" class=" rounded-[10px] w-[50px]" @click="_addWishDeal">
				<img class="w-5 h-5 mx-auto " :src="deal.wish === true ? '/icons/unwish.png' : '/icons/favourite.png'" alt="Нравится">
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
const _addOrderDeal = () => {
  state.addOrderDeal(props.deal);
}

</script>