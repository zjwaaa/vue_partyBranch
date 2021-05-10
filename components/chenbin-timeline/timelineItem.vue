<template>
	<view class="timelineItem">
		<view class="timeItem">
			<view class="line">
				<view class="out" :style="{background: color == '' ? '' : color}">
					<!-- <view class="inner" :style="{background: color == '' ? '' : color}"></view> -->
				</view>
			</view>
			<view class="leftTime">
				<img src="/static/date.png" alt="">
				<text>{{leftTime}}</text>
			</view>
			<view class="rightContent">
				<slot></slot>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			leftTime:{
				type:String,
				default:''
			},
			color:{
				type:String,
				default:''
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.timelineItem {
		.timeItem {
			display: flex;
			.leftTime {
				width: 170rpx;
				// padding: 0 10rpx;
				font-size:22rpx;
				font-family:PingFangSC-Medium,PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				// margin-right: 10rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: flex;
				> img{
					width: 25rpx;
					height: 24rpx;
					margin: 0 5rpx 0 14rpx;
				}
				> text{
					margin-top: -12rpx;
				}
			}
			.line {
				width: 1rpx;
				// background:rgba(204,204,204,1);
				border-left: 2rpx dashed #BA1616;
				position: relative;
				.out {
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					justify-content: center;
					align-items: center;
					width: 18rpx;
					height: 18rpx;
					background : #BA1616;
					border-radius: 50%;
					// .inner {
					// 	width: 18rpx;
					// 	height: 18rpx;
					// 	background : rgba(236,104,23,1);
					// 	border-radius: 50%;
					// }
				}
			}
			.rightContent {
				flex: 1;
				padding: 0 10rpx 40rpx 0;
				// margin-left: 25rpx;
				min-height: 50rpx;
			}
		}
	}
</style>
