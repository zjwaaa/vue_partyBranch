<script>
const urlencode = (data, isPrefix = true) => {
	let prefix = isPrefix ? '?' : ''
	let _result = []
	for (let key in data) {
		let value = data[key]
		// 去掉为空的参数
		if (['', undefined, null].includes(value)) {
			continue
		}
		if (value.constructor === Array) {
			value.forEach(_value => {
				_result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value))
			})
		} else {
			_result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
		}
	}
	return _result.length ? prefix + _result.join('&') : ''
}	
export default {
	onLaunch(options) {
		try {
			
			// #ifdef MP-ALIPAY
			// 支付宝小程序 扫普通二维码 是在onLaunch中获取的 
			if (options.query != undefined) {
				const {
					qrCode
				} = options.query;
				const q = decodeURIComponent(qrCode);
				this.$store.commit("setAlipayqrCode", q);
			}
			// #endif
			
			// 获取信息设备信息
			const res = uni.getSystemInfoSync();
			// 判断当前环境是否为 iphoneX
			if(res.model.includes("iPhone X") || res.model.includes("iPhoneX")) {
				res.iPhoneXBottomHeightRpx = 72;
				res.iPhoneXBottomHeightPx = uni.upx2px(72);
			}else{
				res.iPhoneXBottomHeightRpx = 0;
				res.iPhoneXBottomHeightPx  = 0;
			}
			res.customNavBarHeight = (res.statusBarHeight + 44) * 2; // 计算自定义导航的高度 rpx
			this.$store.commit('setSystemInfo', res);

			// 检查网络状态
			uni.onNetworkStatusChange(res => {
				// 获取到最后的一个路由和参数
				// const pages = getCurrentPages();
				// const page = pages[pages.length - 1];
				// const options = page.options;
				// const route = encodeURIComponent(page.route + urlencode(options));
				const { isConnected, networkType } = res;
				if (!isConnected && networkType === 'none') {
					uni.navigateTo({
						url: `/pages/network/index`
					});
					return;
				}
			});

			// -- 更新版本 start
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(res => {
				// 请求完新版本信息的回调
				if (res.hasUpdate) {
					updateManager.onUpdateReady(() => {
						uni.showModal({
							title: '更新提示',
							content: '新版本已经准备好，是否重启应用？',
							showCancel: false,
							confirmColor: '#f9c700',
							success(ures) {
								if (ures.confirm) {
									// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
									updateManager.applyUpdate();
								}
							}
						});
					});
				}
			});
			updateManager.onUpdateFailed(() => {
				uni.showModal({
					title: '已经有新版本了哟~',
					content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
				});
			});
			// --- 更新版本 end
		} catch (e) {
			throw new Error(e);
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: $uni-bg-color;
	letter-spacing: 3rpx;
}
.content {
	display: flex;
	flex: 1;
	flex-direction: column;
	min-height: calc(100vh);
}
[v-cloak] {
	display: none;
}
</style>
