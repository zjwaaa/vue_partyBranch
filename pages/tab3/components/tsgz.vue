<template>
	<view class="tsgz">
		<navigator class="tsgz_part" v-for="(el, idx) in tsgzData.dataArray" :key="idx" :url="`/pageTab3/detail?el=${encodeURIComponent(JSON.stringify(el))}`">
			<img src="/static/data.png" alt="">
			<view class="tsgz_part_cont">
				<text class="tsgz_part_cont_title">{{ el.title }}</text>
				<text class="tsgz_part_cont_date">{{ el.date }}</text>
			</view>
		</navigator>
	</view>
</template>

<script>

import configData from "@/mixins/configData.js"
	
export default {
	mixins: [ configData ],
	computed: {
		tsgzData(){
			const { tsgz = {} } = this.total.zbgz;
			return tsgz
		}
	}
}
	
</script>

<style lang="scss" scoped>
.tsgz{
	width: 100%;
	min-height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	&_part{
		box-sizing: border-box;
		overflow: hidden;
		background: #FFFFFF;
		border-radius: 15rpx;
		padding: 25rpx;
		display: flex;
		align-items: center;
		margin-bottom: 25rpx;
		box-shadow: 0rpx 0rpx 1rpx #ccc;
		> img{
			width: 90rpx;
			height: 90rpx;
			margin-right: 25rpx;
		}
		&_cont{
			flex: 1;
			height: 90rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&_title{
				width: 550rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			&_date{
				font-size: 24rpx;
				color: #C0C0C0;
			}
		}
	}
}
</style>