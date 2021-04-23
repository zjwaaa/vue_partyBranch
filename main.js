import Vue from 'vue'
import App from './App'
import store from "./store/index.js"

Vue.config.productionTip = false

App.mpType = 'app'

// 全局modal框 返回promise 对象
const showModal = ({
	title = '',
	content,
	showCancel = true,
	cancelText = '取消',
	cancelColor = '#000000',
	confirmText = '确定',
	confirmColor = '#f9c700'
}) => {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title,
			content,
			showCancel,
			cancelText,
			cancelColor,
			confirmText,
			confirmColor,
			success: (res) => {
				return resolve(res)
			},
			fail: (err) => {
				return reject(err);
			}
		})
	})
}

// 全局 toast 返回promise 对象 { errMsg: 'showToast:ok' }
const showToast = ({
	title,
	icon = 'none',
	mask = true
}) => {
	return new Promise((resolve, reject) => {
		uni.showToast({
			icon,
			title,
			// #ifdef MP-WEIXIN
			mask,
			// #endif
			success: (res) => {
				return resolve(res)
			},
			fail: (err) => {
				return reject(err);
			}
		})
	})
}

Vue.prototype.$store = store
Vue.prototype.$showModal = showModal
Vue.prototype.$showToast = showToast

const app = new Vue({
	store,
    ...App
})
app.$mount()
