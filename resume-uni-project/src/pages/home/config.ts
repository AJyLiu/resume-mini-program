import { ref } from 'vue'
import type { Ref } from 'vue'
import type { WaterfallFlowPropType } from '../../interface/waterfallFlowTypes'

export const useGetWaterfallFlowData = (): Ref<WaterfallFlowPropType> => {
	return ref({
		flowList: [
			// {
			// 	id: 'personalProfile',
			// 	text: '个人简介',
			// 	path: '/pages/selfInfo/index',
			// 	textContent: {
			// 		text: 'Personal Profile',
			// 		height: '220rpx',
			// 		icon: 'person'
			// 	}
			// },
			{
				id: 'workExperience',
				text: '工作经历',
				path: '/exprience/pages/workExperience/index',
				textContent: {
					text: 'Working',
					height: '230rpx',
					icon: 'calendar'
				}
			},
			{
				id: 'projectExperience',
				text: '项目经历',
				path: '/exprience/pages/projectExperience/index',
				textContent: {
					text: 'Project',
					height: '220rpx',
					icon: 'compose'
				}
			},
			{
				id: 'skills',
				text: '专业技能',
				path: '/pages/skills/index',
				textContent: {
					text: 'Skills',
					height: '220rpx',
					icon: 'flag'
				}
			},
			{
				id: 'educational',
				text: '学习经历',
				path: '/exprience/pages/learningExperience/index',
				textContent: {
					text: 'Learning',
					height: '210rpx',
					icon: 'map'
				}
			},
			{
				id: 'selfEvaluation',
				text: '自我评价',
				path: '/pages/selfEvaluation/index',
				textContent: {
					text: 'Self Evaluation',
					height: '200rpx',
					icon: 'star'
				}
			}
		],
		column: 2,
		columnSpace: 2,
	})
}