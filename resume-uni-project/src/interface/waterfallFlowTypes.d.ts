export type WaterfallFlowTextContentType = {
	text: string;
	height?: string | number;
	backgroundColor?: string;
	textColor?: string;
	icon?: string;
}

export type WaterfallFlowInfo = {
	id: string;
	text: string;
	path: string;
	imgSrc?: string;
	title?: string;
	textContent?: WaterfallFlowTextContentType;
}

export type WaterfallFlowPropType = {
	flowList: WaterfallFlowInfo[];
	column: number;
	columnSpace: number;
}