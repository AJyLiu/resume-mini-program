import type { InfoType } from '../../interface/types'

const getInfoList = (): InfoType[] => {
	return [{
		id: 0,
		text: '一个学习软件工程的90後'
	},
	{
		id: 1,
		text: '一个待过小型创业公司，潜力型创业公司，小公司和大型外包公司的作死型前端选手'
	},
	{
		id: 5,
		text: '一个羽毛球爱好者，尽管有点儿菜'
	},
	{
		id: 2,
		text: '偶尔逛逛github的白嫖党'
	},
	{
		id: 3,
		text: '喜欢钓鱼的空军佬'
	},
	{
		id: 4,
		text: '爱好摄影的摄影菜鸟'
	},
	{
		id: 6,
		text: '爱倒腾的手残党'
	}]
}

export {
	getInfoList
}