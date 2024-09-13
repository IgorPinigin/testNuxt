<template>
	<div class="mx-auto w-full md:max-w-7xl">
		<headerComponent/>
		<typesAndSearch/>
		<div class="mt-10 mx-4">
      <NuxtPage>
			</NuxtPage>
    </div>
	</div>
</template>

<script setup lang="ts">
import headerComponent from '~/components/headerComponent.vue';
import typesAndSearch from '~/components/typesAndSearch.vue';
</script>