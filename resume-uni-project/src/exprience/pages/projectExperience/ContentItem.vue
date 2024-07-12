<template>
	<view v-if="typeof itemData === 'string'" :class="{ 'ellipsis-item': isEsllipsis }">
		{{ itemData }}
	</view>
	<view v-else>
		<view v-for="(item, index) in itemList" :key="index" class="duty" :class="{ 'ellipsis-item': isEsllipsis }">
			{{ handleText(item, index) }}
		</view>
	</view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{
	itemData: string | string[];
	isEsllipsis?: boolean
}>(), {
	itemData: '',
	isEsllipsis: false
})

const itemList = computed(() => {
	if (props.isEsllipsis && typeof props.itemData !== 'string') {
		return props.itemData.length > 4 ? props.itemData.slice(0, 4) : props.itemData
	}
	return props.itemData
})

const handleText = (val: string, index: number) => {
	if (props.isEsllipsis && props.itemData.length > 4 && index === 3) {
		return `${val}...`
	}
	return val
}
</script>

<style scoped lang="scss">
.duty {
	position: relative;
	padding-left: 25rpx;
	margin: 10rpx 0;
	color: $uni-text-color-grey;
}
.duty:before {
	content: '';
	width: 8rpx;
	height: 8rpx;
	background-color: $uni-text-color-grey;
	border-radius: 50%;
	position: absolute;
	top: 15rpx;
	left: 8rpx;
}
.ellipsis-item {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	-o-text-overflow: ellipsis;
}
</style>