import { ref } from 'vue'
import type { Ref } from 'vue'
import type { WordCloudDataType, SkillInfoItemType } from '../../interface/skillInfo'
import skillList from './skill.json'

const createRandomColor = () => {
	const colorArr = []
	for (let i = 0; i < 10; i++) {
		colorArr.push(
			`rgb(${
				[
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160)
				]
				.join(',')
			})`
		)
	}
    return colorArr
}

const defaultColor = ['#1890FF','#91CB74','#FAC858','#EE6666','#73C0DE','#3CA272','#FC8452','#9A60B4','#ea7ccc']

// 词云图配置
export const useGetWordCloudOpt = (isRandomColor: boolean = false) => {
	return ref({
		color: isRandomColor ? createRandomColor() : defaultColor, 
		padding: null,
		enableScroll: false,
		extra: {
			word: {
				type: 'normal',
				autoColors: false
			}
		}
	})
}

// 词云图数据
export const useGetWordCloudData = (): Ref<WordCloudDataType[]> => {
	return ref<WordCloudDataType[]>(skillList as WordCloudDataType[])
}

// 技能列表数据
export const useGetSkillList = (): Ref<SkillInfoItemType[]> => {
	return ref<SkillInfoItemType[]>(skillList.filter(item => item.category === 'skill') as SkillInfoItemType[])
}