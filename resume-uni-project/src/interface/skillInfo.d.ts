import type { SkillStatus } from '@/commonTypes'

export type SkillInfoVo = {
	name: string;
	status: SkillStatus | string | null;
	percent: number | string;
	textSize: number,
	detail: string;
	data: string | null;
	category: string;
}

export type WordCloudDataType = Pick<SkillInfoVo, 'name' | 'textSize' | 'data' | 'category'>

export type SkillInfoItemType = Omit<SkillInfoVo, 'textSize' | 'data'>