<template>
	<div class="w-64 h-64 overflow-hidden rounded-[10px] m-5">
		<img :src=path alt="Картинка" class="w-full h-full object-cover">
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  path: string;
}>();

</script>