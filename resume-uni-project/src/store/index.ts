// store.ts
import { createLogger, createStore, Store } from 'vuex'
import type { StoreOptions }  from 'vuex'
import type { InjectionKey } from 'vue'
 
// 定义state的接口
export interface Status {
  isOnDutyStatus: boolean;
}
 
// 定义InjectionKey
export const key: InjectionKey<Store<Status>> = Symbol()
 
// 创建store配置
const store: StoreOptions<Status> = {
  state: {
    isOnDutyStatus: false,
  },
  mutations: {},
  actions: {},
  plugins: [createLogger()]
};
 
// 创建并导出store实例
export default createStore(store);