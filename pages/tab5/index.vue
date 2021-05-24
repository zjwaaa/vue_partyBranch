<template>
	<view class="content_tab5">
		<view class="text-area">
			<open-data class="avatar-img"  type="userAvatarUrl"></open-data>
			<open-data class="mine-user_info-text" default-text="柠檬用户" type="userNickName"></open-data>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
.content_tab5{
	padding: 20rpx;
	.text-area{
		display: flex;
		align-items: center;
		padding: 20rpx;
		border-bottom: 2rpx solid #ececec;
		.avatar-img{
			width: 150rpx;
			height: 150rpx;
			margin-right: 20rpx;
		}
		.mine-user_info-text{
			font-size: 34rpx;
			font-weight: bold;
			letter-spacing: 5rpx;
		}
	}
}
</style>
