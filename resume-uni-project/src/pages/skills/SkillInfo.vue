<template>
	<view class="skill-item" @tap="showDetail">
		<view class="skill-item-title">
			<text class="skill">{{ skillInfo.name }}</text>
			<text class="status">{{ skillStatusFormat(skillInfo.status as SkillStatus) }}</text>
		</view>
		<progress :percent="skillInfo.percent" stroke-width="12" duration="10" border-radius="6" active />
		<uni-transition mode-class="fade" :show="isShowDetail">
			<view class="skill-detail">
				<text>{{ skillInfo.detail }}</text>
			</view>
		</uni-transition>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { SkillInfoVo } from '@/interface/skillInfo'
import { skillStatusFormat } from '../../components/commonHooks'
import { onShow } from '@dcloudio/uni-app'

const props = defineProps<{
	skillInfo: SkillInfoVo
}>()

const isShowDetail = ref<boolean>(false)
const showDetail = () => {
	isShowDetail.value = !isShowDetail.value
}

const defaultShow = () => {
	if ('Vue2/3' === props.skillInfo.name) {
		showDetail()
	}
}

onShow(() => {
	defaultShow()
})
</script>

<style scoped lang="scss">
.skill-item {
	background-color: #ffffff;
	border-radius: 12rpx;
	padding: 12rpx 20rpx 20rpx 20rpx;
	margin-bottom: 20rpx;
	.skill-item-title {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 20rpx;
		border-bottom: 1px solid #c8c7cc;
		padding-bottom: 12rpx;
		.skill {
			font-size: 34rpx;
		}
		.status {
			font-size: 26rpx;
			color: sandybrown;
		}
	}
	.skill-detail {
		font-size: 28rpx;
		margin-top: 12rpx;
		color: $uni-text-color-grey;
	}
}
</style>