import { ref } from 'vue'
import type { Ref } from 'vue'
import type { SelfInfoVo } from '@/interface/selfInfo'
import infoData from './data.json'

export const useGetInfoData = (): Ref<SelfInfoVo> => {
	return ref<SelfInfoVo>(infoData)
}