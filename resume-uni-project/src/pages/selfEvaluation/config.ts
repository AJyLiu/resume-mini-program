import { ref } from 'vue'
import type { Ref } from 'vue'
import data from './data.json'

export const useGetEvaluationData = (key: 'personalAdvantagesList' | 'selfEvaluationList'): Ref<string[]> => {
	return ref<string[]>((data as { personalAdvantagesList: string[]; selfEvaluationList: string[] })[key])
}