<template>
	<view class="self-evalutaion">
		<uni-collapse v-model="active">
			<uni-collapse-item title="个人优势">
				<view class="content">
					<CommonList :list="personalAdvantagesList"></CommonList>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="自我评价">
				<view class="content">
					<CommonList :list="selfEvaluationList"></CommonList>
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommonList from '@/components/CommonList.vue'
import { useGetEvaluationData } from './config'
import { useShareApp } from '@/components/commonHooks'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

const active = ref<string[]>(['0', '1'])
const personalAdvantagesList = useGetEvaluationData('personalAdvantagesList')
const selfEvaluationList = useGetEvaluationData('selfEvaluationList')


onShareAppMessage(() => {
	return useShareApp()
})

onShareTimeline(() => {
	return useShareApp()
})
</script>

<style scoped lang="scss">
.self-evalutaion {
	padding: 12rpx;
	.content {
		padding: 2rpx 20rpx;
		font-size: 26rpx;
		color: $uni-text-color-grey;
	}
}
</style>