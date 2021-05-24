<template>
	<view class="gzjh">
		<navigator class="gzjh_part" v-for="(el, idx) in gzjhData.dataArray" :key="idx" :url="`/pageTab3/detail?el=${encodeURIComponent(JSON.stringify(el))}`">
			<img src="/static/data.png" alt="">
			<view class="gzjh_part_cont">
				<text class="gzjh_part_cont_title">{{ el.title }}</text>
				<text class="gzjh_part_cont_date">{{ el.date }}</text>
			</view>
		</navigator>
	</view>
</template>

<script>
	
import configData from "@/mixins/configData.js"
	
export default {
	mixins: [ configData ],
	computed: {
		gzjhData(){
			const { gzjh = {} } = this.total.zbgz;
			return gzjh
		}
	}
}
	
</script>

<style lang="scss" scoped>
.gzjh{
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
		box-shadow: 0rpx 0rpx 2rpx #ccc;
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
				font-size: 26rpx;
			}
			&_date{
				font-size: 24rpx;
				color: #C0C0C0;
			}
		}
	}
}
</style>