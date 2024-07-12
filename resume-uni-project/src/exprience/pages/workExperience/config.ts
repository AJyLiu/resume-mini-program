import { ref } from 'vue'
import type { Ref } from 'vue'
import exprience from './experience.json'
import type { TimeLineVo, ExperienceVo } from '@/interface/experience'

// ps常量
export const PS_TEXT = '个人希望稳定的平台发展，不愿频繁变更工作。不过经过这几次的工作变更，让自己经历了不同领域、项目和不同团队的工作经验，能够快速快速学习和快速融入新的工作环境。'

export const getWorkData = (): ExperienceVo[] => {
	return exprience
}

// 处理工作经历列表数据，按倒序排列
const handleExprienceData = (): TimeLineVo[] => {
	return (getWorkData() as TimeLineVo[]).map(item => {
		if (item.id === '5') {
			item.isShow = true
		} else {
			item.isShow = false
		}
		return item
	})
}

// 获取工作经历列表
export const useGetExprienceData = (): Ref<TimeLineVo[]> => {
	const list = handleExprienceData()
	return ref((list || []).sort((a, b) => {
		if (a.startTime > b.startTime) {
			return -1
		}
		return 1
	}))
}