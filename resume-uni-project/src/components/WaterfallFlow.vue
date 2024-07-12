<template>
	<view class="flow-content">
		<view 
			v-for="(col, index) in waterfallFlowData.column" 
			:key="col"
			:style="{ '--content-width': `${contentWidth}%` }"
			class="content-box"
		>
			<view v-for="(item, i) in contentObj[`content_${index + 1}`]" :key="item.id" class="content-item" @tap="handleTap(item)">
				<view v-if="item.title" class="content-item-title">{{ item.title }}</view>
				<image v-if="item.imgSrc" :src="item.imgSrc" mode="widthFix" class="content-item-img"></image>
				<view
					v-else
					class="content-item-img content-item-textContent"
					:style="{ 'background-color': backgroundColor(item, index, i), height: item.textContent?.height  }">
					<view class="text-box title-content">
						<view>
							<text class="first-text first-text-title">{{ handleStrView(item.text, 'start') }}</text>
							<text>{{ handleStrView(item.text, 'end') }}</text>
						</view>
						<view>
							<uni-icons :type="item.textContent.icon" size="34" :color="item.textContent?.textColor || '#ffffff'"></uni-icons>
						</view>
					</view>
					<view class="text-box underline-text" :style="{ '--color': backgroundColor(item, index, i) }">
						<text class="first-text">{{ handleStrView(item.textContent.text, 'start') }}</text>
						<text>{{ handleStrView(item.textContent.text, 'end') }}</text>
					</view>
				</view>
			</view>	
		</view>
	</view>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { WaterfallFlowPropType, WaterfallFlowInfo } from '@/interface/waterfallFlowTypes'
import { useGetLoopColor, useGetWaterfallFlow } from './commonHooks'
import { onHide } from '@dcloudio/uni-app'

const props = defineProps<{
	waterfallFlowData: WaterfallFlowPropType
}>() 

const emits = defineEmits(['tapBack'])

const colorArr = ref<string[][]>([])

const contentObj = useGetWaterfallFlow(props.waterfallFlowData.flowList, props.waterfallFlowData.column)

// 计算卡片宽度
const contentWidth = computed((): number => {
	return Number((100 / props.waterfallFlowData.column - props.waterfallFlowData.columnSpace).toFixed(5))
})

const backgroundColor = computed(() => {
	return (item: WaterfallFlowInfo, index: number, i: number ) => {
		return item.textContent?.backgroundColor || colorArr.value?.[index]?.[i] || '#CFC3A9'
	}
})

const handleTap = (item: WaterfallFlowInfo) => {
	emits('tapBack', item)
}

const handleStrView = (value: string, type: 'start' | 'end') => {
	if ('start' === type) {
		return value[0]
	}
	if ('end' === type) {
		return value.substring(1)
	}
}

const getColorArr = () => {
	colorArr.value = useGetLoopColor(props.waterfallFlowData.flowList.length, props.waterfallFlowData.column)
}

getColorArr()

onHide(() => {
	// 重新获取颜色
	getColorArr()
})

</script>

<style scoped lang="scss">
$border-radius: 20rpx;
$self-color: var(--color);
.flow-content {
	display: flex;
	justify-content: space-between;
	padding: 40rpx 20rpx 0 20rpx;
	border-radius: $border-radius;
	.content-box {
		width: var(--content-width);
		.content-item {
			width: 100%;
			margin-bottom: 20rpx;
			border-radius: $border-radius;
			box-shadow: 0rpx 0rpx 10rpx #585858;
			.content-item-title {
				padding: 12rpx;
				font-weight: 500;
			}
			.content-item-img {
				border-radius: $border-radius;
				width: 100%;
			}
			.content-item-textContent {
				display: flex;
				flex-direction: column;
				font-size: 60rpx;
				font-weight: 700;
				padding: 0 40rpx;
				box-sizing: border-box;
				justify-content: center;
				color: #ffffff;
				.text-box {
					font-size: 32rpx;
				}
				.first-text {
					font-size: 38rpx;
				}
				.first-text-title {
					margin-right: 8rpx;
				}
				.title-content {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.underline-text {
					position: relative;
				}
				.underline-text::after {
					content: '';
					position: absolute;
					bottom: -1rpx;
					left: 0;
					width: 100%;
					height: 1rpx;
					background: linear-gradient(to right, #ffffff, $self-color); /* 渐变色 */
				}
				.underline-text::before {
					content: '';
					position: absolute;
					bottom: -3rpx;
					left: 0;
					width: 14rpx;
					height: 4rpx;
					background-color: $self-color;
					animation: dotanimation 6s linear infinite;
					z-index: 1;
				}
			}
		}
	}
}
@keyframes dotanimation {
	from {
		left: 0;
	}
	to {
		left: 100%;
	}
}
</style>