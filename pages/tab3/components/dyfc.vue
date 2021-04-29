<template>
	<view class="dyfc">
		<img src="/static/fc01.png" alt="">
		<view class="dyfc_part" v-for="(el, idx) in dyfcData.jlData" :key="idx">
			<view class="dyfc_part_title">
				<img src="/static/fc02.png" alt="">
				<text>{{ el.name }}简历</text>
			</view>
			<view class="dyfc_part_des">
				{{ el.des }}
			</view>
		</view>
	</view>
</template>

<script>
	
import configData from "@/mixins/configData.js"	
	
export default {
	mixins: [ configData ],
	computed: {
		dyfcData(){
			const { dyfc = {} } = this.total.zbgz;
			return dyfc
		}
	}
}	
	
</script>

<style lang="scss" scoped>
.dyfc{
	background: #FFFFFF;
	padding: 35rpx;
	border-radius: 15rpx;
	box-shadow: 0rpx 0rpx 1rpx #ccc;
	line-height: 50rpx;	
	> img{
		width: 100%;
		height: 350rpx;
		margin-bottom: 35rpx;
	}
	&_part{
		margin-bottom: 35rpx;
		&_title{
			display: flex;
			align-items: center;
			> img{
				width: 60rpx;
				height: 60rpx;
			}
			> text{
				margin-left: 10rpx;
				color: #C00000;
				font-weight: bold;
				font-size: 34rpx;
			}
		}
		&_des{
			margin-top: 10rpx;
		}
	}
}
</style>