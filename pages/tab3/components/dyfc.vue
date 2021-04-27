<template>
	<view class="dyfc">
		<img src="/static/fc01.png" alt="">
		<view class="dyfc_part" v-for="(el, idx) in jlData" :key="idx">
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
	
export default {
	data(){
		return {
			jlData: [
				{ name: '刘悦', des: '刘悦，男，汉族，1974年11月生，四川西昌人，1994年7月参加工作，1997年12月16日加入中国共产党，现任支部书记' },
				{ name: '向银太', des: '向银太，男，汉族，1981年11月生，四川攀枝花人，2000年12月参加工作，2012年9月14日加入中国共产党，现任支部组织委员' },
				{ name: '余波', des: '余波，男，汉族，1988年10月生，四川仁寿人，2012年7月参加工作，2010年11月23日加入中国共产党，现任支部纪检委员' },
				{ name: '苏育均', des: '苏育均，男，汉族，1986年02月生，四川梓潼人，2012年7月参加工作，2011年10月28日加入中国共产党，现任支部宣传委员' },
				{ name: '邹欣茹', des: '邹欣茹，女，汉族，1994年12月生，四川达州人，2017年7月参加工作，2016年4月14日加入中国共产党，现任支部青年委员' },
			]
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