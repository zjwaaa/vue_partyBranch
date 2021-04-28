<template>
	<view class="tabtDetail">
		<view class="tabtDetail_title">{{ title }}</view>
		<view class="tabtDetail_subtitle">{{ subTitle }}</view>
		<view class="imgCont">
			<img :src="`/pageTab3/static/${el}.png`" alt="" v-for="(el, idx) in imgArr" :key="idx" mode="widthFix">
		</view>
	</view>
</template>

<script>
	
export default {
	data(){
		return {
			title: '',
			subTitle: '',
			imgArr: []
		}
	},
	onLoad(val){
		const option = JSON.parse(decodeURIComponent(val.el))
		console.log(option)
		const { title = '', subTitle = '', imgArr = [] } = option;
		this.title = title;
		this.subTitle = subTitle;
		this.imgArr = imgArr;
	},
	methods: {

	}
}

</script>

<style lang="scss" scoped>
.tabtDetail{
	padding: 20rpx;
	display: flex;
	flex-direction: column;
	// justify-content: center;
	&_title{
		font-size: 38rpx;
		font-weight: bold;
		margin: 0 auto;
	}
	&_subtitle{
		font-size: 30rpx;
		margin-top: 20rpx;
		text-indent: 60rpx;
	}
	.imgCont{
		> img{
			width: 100%;
			margin-top: 10rpx;
		}
	}
}
</style>
