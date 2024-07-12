<template>
	<view class="self-select">
		<uni-data-select v-model="searchValue" :localdata="selectOptions" @change="handleChange"></uni-data-select>
	</view>
	<scroll-view class="view-scroll" :scroll-y="true" :show-scrollbar="false">
		<ProjectCard v-for="item in projectCardList" :key="item.id" :project-data="item"></ProjectCard>
	</scroll-view>
</template>	
<script setup lang="ts">
import { ref } from 'vue'
import type { ProjectVo } from '@/interface/projectExprience'
import ProjectCard from './ProJectCard.vue'
import { useGetProjectData, useGetOptions } from './config'
import { useShareApp } from '@/components/commonHooks'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'

const searchValue = ref<string>('')
const selectOptions = useGetOptions()
const projectList = useGetProjectData()
const projectCardList = ref<ProjectVo[]>()

const queryProject = () => {
	return searchValue.value ? projectList.value.filter(item => item.workExperienceId === searchValue.value) : projectList.value
}

const handleChange = () => {
	projectCardList.value = queryProject()
}

handleChange()

onShareAppMessage(() => {
	return useShareApp()
})

onShareTimeline(() => {
	return useShareApp()
})
</script>

<style scoped lang="scss">
.self-select {
	margin: 0 12rpx;
	padding: 18rpx;
	box-sizing: border-box;
	border-bottom: 1px solid #efefef;
	:deep(.uni-select),
	:deep(.uni-select__input-box) {
		height: 36px !important;
	}
}
.view-scroll {
	max-height: calc(100vh - 100rpx);
	::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
		color: transparent;
	}
}
</style>