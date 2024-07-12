export type AnyObj = {
	[key: string]: any
}

export type SkillStatus = 'proficiency' | 'skilled' | 'familiarize' | 'understand'

export type ShareVo = {
	title: string;
	path: String;
	imageUrl?: String;
}