<template>
	<view class="swiper-box">
		<Swiper></Swiper>
	</view>
	<view class="school-box">
		<view class="title-box">
			<image style="width: 100rpx; height: 100rpx;" src="../../../static/school-logo.jpg" mode="aspectFit"></image>
			<view class="title">
				<text class="main-title">攀枝花学院</text>
				<text class="sub-title">综合类 公办 本科</text>
			</view>
		</view>
		<view class="school-desc">
			攀枝花学院（Panzhihua University）是教育部布点在川西南、滇西北的一所以工为主的综合性普通本科院校，是硕士学位授予单位，学校坐落于四川省攀枝花市。
		</view>
	</view>
	<view class="learning-collapse">
		<uni-collapse v-model="accordionValue" accordion>
			<uni-collapse-item title="教育经历" >
				<view class="content">
					<LearningInfo :learning-info="learningInfo"></LearningInfo>
				</view>
			</uni-collapse-item>
			<uni-collapse-item class="self-collapse-item" title="学习历程">
				<scroll-view class="skill-view" :scroll-y="true">
					<uni-steps direction="column" :options="stepOptions" :active="stepActive" :active-icon="activeIcon"></uni-steps>
				</scroll-view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Swiper from '@/components/Swiper.vue'
import LearningInfo from './LearningInfo.vue'
import { useGetLearningInfo, useGetStepOption } from './config'
import { useShareApp } from '@/components/commonHooks'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

const learningInfo = useGetLearningInfo()
const stepOptions = useGetStepOption()
const accordionValue = ref<string>('0')
const stepActive = ref<number>(stepOptions.value.length - 1)
const activeIcon = ref<string>('flag')

onShareAppMessage(() => {
	return useShareApp()
})

onShareTimeline(() => {
	return useShareApp()
})
</script>

<style scoped lang="scss">
.swiper-box {
	height: 300rpx;
}
.school-box {
	margin: 12rpx 20rpx;
	padding-bottom: 12rpx;
	border-bottom: 1px solid #ebeef5;
	color: $uni-text-color-grey;
	.title-box {
		display: flex;
		align-items: center;
		.title {
			display: flex;
			flex-direction: column;
			font-size: 36rpx;
			margin-left: 30rpx;
			flex: 1;
			border-bottom: 1px solid #f6f6f6;
			padding-bottom: 8rpx;
			.main-title {
				color: $uni-text-color;
			}
			.sub-title {
				font-size: 28rpx;
			}
		}
	}
	.school-desc {
		text-indent: 2em;
		margin-top: 12rpx;
		text-align: justify;
		font-size: 28rpx;
	}
}
.learning-collapse {
	margin: 0 12rpx;
	.content {
		padding: 20rpx 0;
	}
}
.skill-view {
	height: calc(100vh - 800rpx);
	padding: 0 20rpx;
	font-size: 30rpx;
}
</style>