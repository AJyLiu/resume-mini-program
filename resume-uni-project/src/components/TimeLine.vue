<template>
	<view class="timeLine-box">
		<view v-for="(item, index) in timeLineList" :key="item.id" class="timeLine-item">
			<view class="timeLine-dot timeLine-dot-active">
				<view class="timeLine-dot-solid"></view>
			</view>
			<view v-if="index !== timeLineList.length - 1" class="timeLine-line timeLine-line-active"></view>
			<view class="timeLine-main">
				<view class="title-box" @tap="showContent(item)">
					<view class="title-text">
						<view class="title">{{ item.title }}</view>
						<view class="time">{{ `${item.startTime}~${item.endTime}` }}</view>
					</view>
					<uni-icons class="self-transition" :type="item.isShow ? 'up' : 'down'" size="14"></uni-icons>
				</view>
				<view v-if="item.isShow" class="content">
					<text v-if="typeof item.content === 'string'">{{ item.content }}</text>
					<view v-else>
						<view v-for="(item, index) in item.content" :key="index" class="conten-item">
							{{ item }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import type { TimeLineVo } from '@/interface/experience'

const props = defineProps<{
	timeLineList: TimeLineVo[]
}>() 

const showContent = (item: { isShow: boolean; }) => {
	item.isShow = !item.isShow
}
</script>

<style scoped lang="scss">
.timeLine-box {
	padding: 30rpx 30rpx 0 30rpx;
	.timeLine-item {
		position: relative;
		padding-bottom: 30rpx;
		.timeLine-dot {
			left: -2rpx;
			width: 30rpx;
			height: 30rpx;
			position: absolute;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid #e4e7ed;
			box-sizing: border-box;
			z-index: 1;
			.timeLine-dot-solid {
				width: 13rpx;
				height: 13rpx;
				background-color: #e4e7ed;
				border-radius: 50%;
			}
		}
		.timeLine-dot-active {
			border: 2px solid $uni-color-primary;
			.timeLine-dot-solid {
				background-color: $uni-color-primary;
			}
		}
		.timeLine-line {
			position: absolute;
			left: 11rpx;
			height: calc(100% - 50rpx);
			border-left: 2px dotted #e4e7ed;
			margin-top: 39rpx;
		}
		.timeLine-line-active {
			border-left: 2px dotted $uni-color-primary;
		}
		.timeLine-main {
			position: relative;
			padding-left: 56rpx;
			top: -6rpx;
			.title-box {
				margin-bottom: 20rpx;
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid $uni-border-color;
				padding-bottom: 8rpx;
				.title {
					color: #000000;
					font-size: 32rpx;
					margin-bottom: 8rpx;
				}
				.time {
					color: $uni-text-color-grey;
					font-size: 28rpx;
				}
			}
			.content {
				color: $uni-text-color-grey;
				font-size: 28rpx;
				.conten-item {
					margin: 8rpx 0 0 20rpx;
					position: relative;
				}
				.conten-item:before {
					content: '';
					width: 8rpx;
					height: 8rpx;
					background-color: $uni-text-color-grey;
					border-radius: 50%;
					position: absolute;
					top: 15rpx;
					left: -18rpx;
				}
			}
		}
	}
	.timeLine-item:last-child {
		padding-bottom: 0rpx;
	}
}
</style>