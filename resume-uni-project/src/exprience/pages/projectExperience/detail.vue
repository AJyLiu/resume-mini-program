<template>
	<view class="detail-item">
		<text class="title">项目名称</text>
		<view class="content">{{ getTitle() }}</view>
		<image v-if="detail.isSecret" class="secret" src="../../../static/secret.png" mode="widthFix"></image>
	</view>
	<view class="detail-item item-flex">
		<view class="flex-column">
			<text class="title">项目周期</text>
			<text class="content">{{ detail.developmentCycle }}</text>
		</view>
		<view class="flex-column">
			<text class="title">开发人数</text>
			<text class="content">{{ detail.engineer }}</text>
		</view>
	</view>
	<view class="detail-item">
		<text class="title">项目描述</text>
		<view class="content">{{ detail.decription }}</view>
	</view>
	<view class="detail-item">
		<text class="title">项目职责</text>
		<view class="content">
			<ContentItem :item-data="detail.duty"></ContentItem>
		</view>
	</view>
	<view class="detail-item">
		<text class="title">项目亮点</text>
		<view class="content">
			<ContentItem :item-data="detail.projectHighlights"></ContentItem>
		</view>
	</view>
	<view class="detail-item">
		<text class="title">取得成就</text>
		<view class="content">	
			<ContentItem :item-data="detail.achieved"></ContentItem>
		</view>
	</view>
	<view class="detail-item">
		<text class="title">技术栈</text>
		<view class="content">
			<SkillTag :skills="detail.skills"></SkillTag>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useGetProjectDetail } from './config';
import type { ProjectVo } from '@/interface/projectExprience'
import ContentItem from './ContentItem.vue'
import SkillTag from './SkillTag.vue'
import { useShareApp } from '@/components/commonHooks'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

const detail = ref<ProjectVo>({} as ProjectVo)

const getTitle = () =>{
	if (detail.value.subTitle) {
		return `${detail.value.title}（${detail.value.subTitle}）`
	}
	return detail.value.title
}

onLoad(query => {
	detail.value = useGetProjectDetail(query!.id)
})

onShareAppMessage(() => {
	return useShareApp()
})

onShareTimeline(() => {
	return useShareApp()
})
</script>

<style scoped lang="scss">
.detail-item {
	padding: 0 20rpx 10rpx 20rpx;
	margin: 20rpx;
	border-bottom: 1px solid $uni-border-color;
	position: relative;
	.content {
		margin-top: 20rpx;
		color: $uni-text-color-grey;
		font-size: 28rpx;
	}
	.secret {
		position: absolute;
		width: 70rpx;
		top: 16rpx;
		right: 40rpx;
	}
}
.detail-item:last-child {
	padding-bottom: 100rpx;
	border-bottom: unset;
}
.item-flex {
	display: flex;
	justify-content: space-between;
}
.flex-column {
	display: flex;
	flex-direction: column;
}
</style>