import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建 store 
const store = new Vuex.Store({
	state: {
		// to do
		systemInfo: uni.getStorageSync("systemInfo") || "", // 全局系统信息
	},
	mutations: {
		setSystemInfo(state, params) { // 设置全局系统信息 包含设备信息 屏幕信息
			state.systemInfo = { ...params }
			uni.setStorageSync("systemInfo", params)
		}
	},
	actions: {
		// to do
	}
})

export default store
