<template>
	<view class="content_tab5">
		<view class="topCont">
			<open-data class="mine-user_info-text" default-text="支部用户" type="userNickName"></open-data>
			<view class="imgCont">
				<view class="text-area">
					<open-data class="avatar-img"  type="userAvatarUrl"></open-data>
				</view>
			</view>
		</view>
		<view class="bottomCont">
			<view class="part">
				<img src="/static/mineTime.png" alt="" mode="widthFix">
				<text>入党时间：</text>
				<text>{{ time }}</text>
			</view>
			<view class="part">
				<img src="/static/mineXz.png" alt="" mode="widthFix">
				<text>党员性质：</text>
				<text>{{ xz }}</text>
			</view>
			<view class="part">
				<img src="/static/mineScore.png" alt="" mode="widthFix">
				<text>答题分数：</text>
				<text>{{ count || '暂无'  }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: '',
				xz: '',
				count: null
			}
		},
		onTabItemTap(val) {
			this.count = uni.getStorageSync('fs');
		},
		methods: {

		}
	}
</script>

<style lang="scss">
.content_tab5{
	background: #F2EDED;
	height: calc(100vh);
	.topCont{
		width: 100%;
		height: 200rpx;
		position: relative;
		background: #C00000;
		.mine-user_info-text{
			font-size: 44rpx;
			font-weight: bold;
			letter-spacing: 5rpx;
			color: #FFFFFF;
			text-align: center;
			display: block;
			padding-top: 20rpx;
		}
		.imgCont{
			// display: flex;
			// justify-content: center
			position: absolute;
			bottom: -50rpx;
			left: 50%;
			transform: translateX(-50%);
		}
		.text-area{
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			overflow: hidden;
			.avatar-img{
				width: 150rpx;
				height: 150rpx;
				margin-right: 20rpx;
			}
		}
	}
	.bottomCont{
		margin-top: 70rpx;
		.part{
			display: flex;
			align-items: center;
			padding: 25rpx 50rpx;
			background: #FFFFFF;
			letter-spacing: 5rpx;
			&:not(:first-child){
				margin-top: 20rpx;
			}
			img{
				width: 30rpx;
				margin-right: 15rpx;
			}
		}
	}
}
</style>
