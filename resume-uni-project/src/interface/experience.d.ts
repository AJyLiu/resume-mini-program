export interface ExperienceVo {
	id: string;
	title: string;
	position: string;
	startTime: string;
	endTime: string;
	content: string | string[];
}

export interface TimeLineVo extends ExperienceVo {
	isShow: boolean;
}