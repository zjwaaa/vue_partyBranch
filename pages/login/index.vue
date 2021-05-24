<template>
	<view>
			<button @click="wxgetUserInfo">
					<icon class="wx-logo"></icon>
					<text>微信用户一键登录</text>
				</button>
	</view>
</template>

<script>
	
export default {
	methods: {
		wxgetUserInfo(e){
			uni.getUserProfile({
				desc:'登录',
				success(res){
					console.log(res)
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
			})
		}
	}
}	
	
</script>

<style>
</style>
