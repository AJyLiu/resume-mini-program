<template>
	<view class="learning-info">
		<view class="learning-item">
			<text class="item-label">入学时间</text>
			<text>{{ learningInfo.enrollmentTime }}</text>
		</view>
		<view class="learning-item">
			<text class="item-label">毕业时间</text>
			<text>{{ learningInfo.graduationTime }}</text>
		</view>
		<view class="learning-item">
			<text class="item-label">学历类别</text>
			<text>{{ learningInfo.educationalCategory }}</text>
		</view>
		<view class="learning-item">
			<text class="item-label">学制</text>
			<text>{{ learningInfo.educationalSystem }}</text>
		</view>
		<view class="learning-item">
			<text class="item-label">所学专业</text>
			<text>{{ learningInfo.majorStudied }}</text>
		</view>
	</view>
</template>

<script setup lang="ts">
import type { LearningInfo } from '@/interface/learningExperience'
const props = defineProps<{
	learningInfo: LearningInfo
}>()
</script>

<style scoped lang="scss">
.learning-info {
	font-size: 28rpx;
	margin: 12rpx 20rpx;
	.learning-item {
		display: flex;
		margin: 10rpx 12rpx;
		margin-top: 20rpx;
		padding: 0 20rpx;
		.item-label {
			color: $uni-text-color-grey;
			width: 120rpx;
			text-align: right;
			margin-right: 20rpx;
		}
	}
}
</style>