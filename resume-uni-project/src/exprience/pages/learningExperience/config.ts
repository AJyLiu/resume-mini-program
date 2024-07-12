import { ref } from 'vue'
import type { Ref } from 'vue'
import type { LearningInfo, KillLearningVo } from '@/interface/learningExperience'
import learninInfo from './learningInfo.json'
import killLearningInfo from './killLearningInfo.json'

export const useGetLearningInfo = (): Ref<LearningInfo> => {
	return ref<LearningInfo>(learninInfo)
}

export const useGetStepOption = (): Ref<KillLearningVo[]> => {
	return ref<KillLearningVo[]>(killLearningInfo)
}