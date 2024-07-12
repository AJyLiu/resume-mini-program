<template>
	<view v-for="(item, index) in props.list" :key="index" class="common-list">
		{{ item }}
	</view>
</template>

<script setup lang="ts">
const props = defineProps<{
	list: string[],
}>() 
</script>

<style scoped lang="scss">
.common-list {
	position: relative;
	padding-left: 25rpx;
	margin: 10rpx 0;
}
.common-list:before {
	content: '';
	width: 8rpx;
	height: 8rpx;
	background-color: $uni-text-color-grey;
	border-radius: 50%;
	position: absolute;
	top: 15rpx;
	left: 8rpx;
}
</style>