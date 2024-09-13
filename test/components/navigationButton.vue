<template>
	<div>
		<div class="flex flex-col items-center title-s-font py-2 w-[86px] rounded-[10px] hover:bg-[#F4F5F9] cursor-pointer">
			<div class=" h-5 w-5">
				<img :src="imageSrc" alt="Text as image" />
			</div>
			<div>
				{{ caption }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  imageSrc: string;
  caption: string;
}>();
</script>