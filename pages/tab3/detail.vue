<template>
	<view class="tabtDetail">
		<view class="tabtDetail_title">{{ title }}</view>
		<view class="tabtDetail_subtitle">疫情复工复产期间，支部党员带领团青积极开展疫情保障、预防宣传、复工复产监测等重要工作，党员团青先后发挥先锋模范作用共计354人次。
		</view>
		<view class="imgCont">
			<img src="/static/zbDetail/11.png" alt="">
			<img src="/static/zbDetail/12.png" alt="">
		</view>
	</view>
</template>

<script>
	
export default {
	data(){
		return {
			title: ''
		}
	},
	onLoad(val){
		const { title = '' } = val;
		this.title = title;
	},
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
