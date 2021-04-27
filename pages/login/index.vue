<template>
	<view>
			<button 
				open-type="getPhoneNumber" 
				@getphonenumber="getphonenumber" 
				class="weui-btn">
					<icon class="wx-logo"></icon>
					<text>微信用户一键登录</text>
				</button>
	</view>
</template>

<script>
	
export default {
	methods: {
		getphonenumber(e){
			console.log(e)
		}
	}
}	
	
</script>

<style>
</style>
