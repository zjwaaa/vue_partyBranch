<template>
	<view class="tsgz">
		<navigator class="tsgz_part" v-for="(el, idx) in dataArray" :key="idx" :url="`/pages/tab3/detail?title=${el.title}`">
			<img src="/static/data.png" alt="">
			<view class="tsgz_part_cont">
				<text class="tsgz_part_cont_title">{{ el.title }}</text>
				<text class="tsgz_part_cont_date">{{ el.date }}</text>
			</view>
		</navigator>
	</view>
</template>

<script>
	
export default {
	data(){
		return {
			dataArray: [{ title: '组织开展“蚂蚁森林”植树活动', date: '2020.04.23', id: 0 }, 
						{ title: '支部骨干牵头省信通重点工作任务', date: '2020.04.24', id: 1 },
						{ title: '党群师徒合同签订', date: '2020.04.25', id: 2 },
						{ title: '党群共防共守防山火承诺签订', date: '2020.04.26', id: 3 },
						{ title: '支部骨干考察盐源电商发展状况', date: '2020.04.27', id: 4 },
						{ title: '党员领办重点工作任务', date: '2020.04.28', id: 5 },
						{ title: '支部组织外委产商签订防山火承诺', date: '2020.04.29', id: 6 },
						{ title: '创新现场作业风险管控', date: '2020.04.30', id: 7 }]
		}
	}
}
	
</script>

<style lang="scss" scoped>
.tsgz{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	overflow: scroll;
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
				font-weight: bold;
			}
			&_date{
				font-size: 24rpx;
				color: #C0C0C0;
			}
		}
	}
}
</style>