<template>
	<view class="jgzz">
		<view class="jgzz_top">
			<view>互联网党支部于<text class="sty_red">2019年7月2日</text>更名成立，现有正式党员13人，预备党员1人</view>
			<view class="jgzz_top_ava">
				<view class="part">
					<img src="/static/ava.png" alt="">
					<view class="detail">
						<text>正式党员（人）</text>
						<text class="num">13</text>
					</view>
				</view>
				<view class="part">
					<img src="/static/ava.png" alt="">
					<view class="detail">
						<text>预备党员（人）</text>
						<text class="num">1</text>
					</view>
				</view>
			</view>
			<view class="ms">
				<view class="ms_lef">
					<text>支部书记1（人）</text>
					<text>支部平均年龄34.7岁</text>
				</view>
				<text>支委4（人）</text>
			</view>
		</view>
	</view>
</template>

<script>
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
}
</style>
