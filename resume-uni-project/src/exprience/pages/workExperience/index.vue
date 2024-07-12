<template>
	<TimeLine :timeLineList="timeLineList"></TimeLine>
	<view class="describe">
		<text class="ps-text">Ps:</text>
		<text>{{ PS_TEXT }}</text>
	</view>
</template>

<script setup lang="ts">
import TimeLine from '@/components/TimeLine.vue'
import { useGetExprienceData, PS_TEXT } from './config'
import { useShareApp } from '@/components/commonHooks'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

const timeLineList = useGetExprienceData()

onShareAppMessage(() => {
	return useShareApp()
})

onShareTimeline(() => {
	return useShareApp()
})
</script>

<style scoped lang="scss">
.describe {
	padding: 0 80rpx;
	margin-top: 30rpx;
	color: $uni-text-color-grey;
	font-size: 24rpx;
	.ps-text {
		margin-right: 10rpx;
		font-size: 32rpx;
	}
}
</style>