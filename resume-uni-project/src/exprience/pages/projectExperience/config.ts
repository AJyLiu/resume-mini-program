import { ref } from 'vue'
import type { Ref } from 'vue'
import type { OptionsType } from '@/interface/types'
import type { ProjectVo } from '@/interface/projectExprience'
import type { ExperienceVo } from '@/interface/experience'
import { getWorkData } from '../workExperience/config' 
import projectData from './project.json' 

const getProjectData = (): ProjectVo[] => {
	return projectData as ProjectVo[]
}

export const useGetProjectData = (): Ref<ProjectVo[]> => {
	return ref<ProjectVo[]>(getProjectData())
}

// 获取头部查询列表数据
export const useGetOptions = (): Ref<OptionsType[]> => {
	return ref<OptionsType[]>(
		getWorkData().map((item: ExperienceVo) => {
			return {
				text: item.title,
				value: item.id
			}
		}).reverse()
	)
}

export const useGetProjectDetail = (id: string): ProjectVo => {
	const result = ref<ProjectVo>({} as ProjectVo)
	if (id) {
		result.value = getProjectData().filter(item => item.id === id)?.[0] || {}
	}
	return result.value
}