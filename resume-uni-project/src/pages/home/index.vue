<template>
	<view class="top-box">
		<view class="logo-img">
			<image style="width: 100%; height: 100%;" src="../../static/home-logo.png" :mode="imageMode"></image>
			<text class="logo-name">{{ infoData.name }}</text>
		</view>
		<view class="self-info">
			<view class="self-info-photo">	
				<image style="width: 100%; height: 100%;" src="../../static/info-photo.png" :mode="imageMode"></image>				
			</view>
			<view class="self-info-job">{{ $t('page.selfInfo.position') }}</view>
			<view class="self-info-education">
				<text>{{ infoData.major }}</text>
				<text>{{ infoData.degree }}</text>
				<text>{{ `${year}${$t('page.selfInfo.workingLife.abbreviate')}` }}</text>
			</view>
		</view>
	</view>
	<scroll-view class="home-scroll-view" :scroll-y="true">
		<WaterfallFlow ref="waterfallFlowRef" :waterfallFlowData="waterfallFlowData" @tapBack="jumpTo"></WaterfallFlow>
	</scroll-view>
	
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WaterfallFlow from '../../components/WaterfallFlow.vue'
import { useGetWaterfallFlowData } from './config'
import type { WaterfallFlowInfo } from '@/interface/waterfallFlowTypes'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import { getMonthDifference } from '@/util/commonUtil'
import { useGetInfoData } from '@/pages/selfInfo/config'
import { useShareApp } from '@/components/commonHooks'

const imageMode = ref<string>('aspectFill')
const waterfallFlowData = useGetWaterfallFlowData()
const infoData = useGetInfoData()

onShareAppMessage(() => {
	return useShareApp()
})

onShareTimeline(() => {
	return useShareApp()
})

const getYear = () => {
	return (getMonthDifference(infoData.value.workStart, new Date().getTime()) / 12).toFixed(1)
}

const year = ref(getYear())

const jumpTo = (info: WaterfallFlowInfo) => {
	if (info.id === "personalProfile") {
		uni.switchTab({
			url: info.path
		})
	} else {
		uni.navigateTo({
			url: info.path
		})
	}
	
}

</script>

<style scoped lang="scss">
.top-box {
	width: 100%;
	.logo-img {
		height: 400rpx;
		position: relative;
		.logo-name {
			position: absolute;
			bottom: 20rpx;
			right: 30rpx;
			color: #ffffff;
			font-size: 54rpx;
			font-weight: 500;
			letter-spacing: 6rpx;
		}
	}
	.self-info {
		height: 160rpx;
		background-color: #809398;
		color: #ffffff;
		position: relative;
		font-size: 40rpx;
		box-sizing: border-box;
		.self-info-photo {
			width: 180rpx;
			height: 180rpx;
			border-radius: 50%;
			position: absolute;
			top: -90rpx;
			left: 30rpx;
			overflow: hidden;
			z-index: 1;
		}
		.self-info-job {
			text-align: right;
			margin-right: 30rpx;
			padding-top: 20rpx;
		}
		.self-info-education {
			width: 100%;
			margin-top: 30rpx;
			padding: 0 30rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
		}
	}
}
.home-scroll-view {
	height: calc(100vh - 560rpx);
	width: 100%;
	.view-content {
		column-count: 2;
		column-gap: 20rpx;
	}
	.card-item {
		border: 1px solid #fef1e2;
		padding: 12rpx;
		break-inside: avoid;
	}
	::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		color: transparent;
	}
}
.classify-box {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 20rpx 25rpx;
}
</style>