<template>
	<uni-card @click="jumpTo">
		<template v-slot:title>
			<view class="card-title" @click="jumpTo">
				<view>
					<view class="title">
						<image v-if="projectData.isSecret" class="tag" src="../../../static/secret.png" mode="widthFix"></image>
						{{ projectData.title }}
					</view>
					<view v-if="projectData.subTitle" class="sub-title">{{ projectData.subTitle }}</view>
				</view>
				<uni-icons type="right" size="14" color="#909399"></uni-icons>
			</view>
		</template>
		<view class="card-content">
			<view class="content-item-one ellipsis-item">
				<text class="title">项目周期:</text>
				<text class="detail">{{ projectData.developmentCycle }}</text>
			</view>
			<view class="content-item-one ellipsis-item">
				<text class="title">项目描述:</text>
				<text class="detail">{{ projectData.decription }}</text>
			</view>
			<view class="content-item">
				<text class="title">项目职责:</text>
				<ContentItem :item-data="projectData.duty" :is-esllipsis="true"></ContentItem>
			</view>
		</view>
	</uni-card>
</template>

<script setup lang="ts">
import type { ProjectVo } from '@/interface/projectExprience'
import ContentItem from './ContentItem.vue'

const props = defineProps<{
	projectData: ProjectVo
}>()

const jumpTo = () =>{
	uni.navigateTo({
		url: `/exprience/pages/projectExperience/detail?id=${props.projectData.id}`,
	})
}
</script>

<style scoped lang="scss">
.card-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ebeef5;
	padding: 14rpx 0;
	position: relative;
	.title {
		display: flex;
		align-items: center;
		font-size: 15px;
		.tag {
			width: 40rpx;
			margin-right: 6rpx;
		}
	}
	.sub-title {
		font-size: 12px;
		color: $uni-text-color-grey;
		margin-top: 12rpx;
	}
}
.card-content {
	.content-item-one,
	.content-item {
		margin-bottom: 8rpx;
		.title {
			margin-right: 20rpx;
			color: $uni-text-color;
		}
		.detail {
			color: $uni-text-color-grey;
		}
	}
}
.ellipsis-item {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	-o-text-overflow: ellipsis;
}
</style>