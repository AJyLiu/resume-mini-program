<template>
  <view class="skill-content">
    <qiunDataCharts
		type="word"
		:opts="wordCloudOpts"
		:chartData="chartData"
		:background="wordCloudBackground"
		:height="wordCloudHeight">
	</qiunDataCharts>
	<scroll-view :scroll-y="true" class="skill-list" :show-scrollbar="false">
		<SkillInfo v-for="item in skillInfoList" :key="item.name" :skillInfo="item" class="skill-info"></SkillInfo>
	</scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGetWordCloudData, useGetWordCloudOpt, useGetSkillList } from './config'
import qiunDataCharts from '@/uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.vue'
import SkillInfo from './SkillInfo.vue'
import { useShareApp } from '@/components/commonHooks'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

const wordCloudHeight = ref<number>(uni.upx2px(400))
const wordCloudBackground = ref<string>('#f2f2e6')
const wordCloudOpts = useGetWordCloudOpt(true)
const chartData = ref({
	series: useGetWordCloudData()
})
const skillInfoList = useGetSkillList()

onShareAppMessage(() => {
	return useShareApp()
})

onShareTimeline(() => {
	return useShareApp()
})
</script>

<style scoped lang="scss">
.skill-content {
	.skill-list {
		background-color: #ededed;
		padding: 20rpx 20rpx;
		height: calc(100vh - 400rpx);
		box-sizing: border-box;
		::-webkit-scrollbar {
			display: none;
			width: 0;
			height: 0;
			color: transparent;
		}
	}
}
</style>
