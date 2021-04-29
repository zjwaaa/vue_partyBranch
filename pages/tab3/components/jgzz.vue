<template>
	<view class="jgzz">
		<view class="jgzz_top">
			<view>互联网党支部于<text class="sty_red">{{ jgzzData.date }}</text>更名成立，现有正式党员<text class="numstyle">{{ jgzzData.zsdyNum }}</text>人，预备党员<text class="numstyle">{{ jgzzData.ybdyNum }}</text>人</view>
			<view class="jgzz_top_ava">
				<view class="part">
					<img src="/static/ava.png" alt="">
					<view class="detail">
						<text>正式党员（人）</text>
						<text class="num">{{ jgzzData.zsdyNum }}</text>
					</view>
				</view>
				<view class="part ava2">
					<img src="/static/ava2.png" alt="">
					<view class="detail">
						<text>预备党员（人）</text>
						<text class="num">{{ jgzzData.ybdyNum }}</text>
					</view>
				</view>
			</view>
			<view class="ms">
				<view class="ms_lef">
					<text>支部书记<text class="numstyle">{{ jgzzData.zbsjNum }}</text>（人）</text>
					<text>支部平均年龄<text class="numstyle">{{jgzzData.pjnl }}</text>岁</text>
				</view>
				<text>支委<text class="numstyle">{{ jgzzData.zwNum }}</text>（人）</text>
			</view>
		</view>
		<view class="jgzz_bottom">
			<img src="/static/jg01.png" alt="">
			<img src="/static/jg02.png" alt="">
		</view>
	</view>
</template>

<script>
	
import configData from "@/mixins/configData.js"
	
export default {
	data(){
		return {
			
		}
	},
	mixins: [ configData ],
	computed: {
		jgzzData(){
			const { jgzz = {} } = this.total.zbgz;
			return jgzz
		}
	}
}	
	
</script>

<style lang="scss" scoped>
.jgzz{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	letter-spacing: 5rpx;
	.numstyle{
		font-weight: bold;
	}
	&_top{
		background: #FFFFFF;
		padding: 35rpx;
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 1rpx #ccc;
		line-height: 50rpx;
		.sty_red{
			color: #C00000;
		}
		&_ava{
			display: flex;
			margin: 30rpx 0;
			.part{
				display: flex;
				align-items: center;
				> img{
					width: 80rpx;
					height: 80rpx;
					margin-right: 10rpx;
				}		
				.detail{
					font-size: 28rpx;
					display: flex;
					flex-direction: column;
					.num{
						color: #C00000;
						font-weight: bold;
						font-size: 40rpx;
					}
				}
			}
			.ava2{
				justify-content: flex-end;
			}
		}
		.ms{
			display: flex;
			&_lef{
				display: flex;
				flex-direction: column;
				> text:first-child{
					margin-bottom: 20rpx;
				}
			}
		}
	}
	&_bottom{
		background: #FFFFFF;
		padding: 35rpx;
		border-radius: 15rpx;
		box-shadow: 0rpx 0rpx 1rpx #ccc;
		line-height: 50rpx;	
		margin-top: 35rpx;
		> img{
			width: 100%;
			height: 250rpx;
		}
	}
}
</style>
