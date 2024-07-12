import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { OptionsType } from '../interface/types'
import type { WaterfallFlowInfo } from '@/interface/waterfallFlowTypes'
import type { AnyObj, SkillStatus } from '@/commonTypes'
import shareImg from '@/static/share-img.png'

const COLOR = ['#E8D3C0', '#D89C7A', '#D6C38B', '#CFC3A9', '#849B91', '#E1CCB1', '#D4BAAD', '#B0B1B6', '#979771', '#91AD9E']

// 获取语言下拉数据hook
export const useLangOptions = (): Ref<OptionsType[]> => {
	const { t } = useI18n()
	return ref([{
		value: 'zh-Hans',
		text: computed(() => t('page.language.zh'))
	},
	{
		value: 'en',
		text: computed(() => t('page.language.en'))
	}])
}

const handleColumnGroup = (column: number) => {
	const groups: Array<Array<any>> = []
	// 列分组
	for (let i = 0; i < column; i++) {
		groups.push([])
	}
	return groups
}

// 处理数据分组
const handleGroup = (data: WaterfallFlowInfo[], num: number) => {
	if (num < 1 ) {
		return
	}
	const groups: Array<Array<WaterfallFlowInfo>> = handleColumnGroup(num)

	// 数据分组
	for (let i = 0; i < data.length; i++) {
		const index = i % num
		groups[index].push(data[i])
	}
	return groups
} 

// 获取瀑布流数据hook
export const useGetWaterfallFlow = (flowList: WaterfallFlowInfo[], column: number) => {
	const list = handleGroup(flowList, column)
	const result = ref<AnyObj>({})
	list?.forEach((item, index) => {
		result.value[`content_${index + 1}`] =  item
	})
	return result
}

// 按顺序随机循环取色号
export const useGetLoopColor = (num: number, colunm: number): string[][] => {
	const result = ref<string[][]>([])
	if (num < 1) {
		return result.value
	}
	
	const colorLen = COLOR.length
	// 生成一个COLOR长度内的随机数
	const index = Math.floor(Math.random() * (colorLen - 1))
	const colorArr: string[] = []
	// 获取颜色下标
	const getIndex = (index: number, i: number): number => {
		if (index + i >= colorLen) {
			return (index + i) % colorLen
		}
		return index + i
	}
	
	// 获取颜色数组
	for (let i = 0; i < num; i++) {
		const colorIndex = getIndex(index, i)
		colorArr.push(COLOR[colorIndex])
	}
	
	result.value = handleColumnGroup(colunm)
	
	// 颜色数据分组
	for (let i = 0; i < colorArr.length; i++) {
		const index = i % colunm
		result.value[index].push(colorArr[i])
	}
	return result.value
}


export const skillStatusFormat = (val: SkillStatus) => {
	const STATUS = {
		proficiency: '精通',
		skilled: '熟练',
		familiarize: '熟悉',
		understand: '了解'
	}
	return STATUS[val]
}

// 分享内容配置
export const useShareApp = () => {
	return {
		title: '刘俊遥的简历',
		path: '/pages/index/index',
		imageUrl: shareImg
	}
}