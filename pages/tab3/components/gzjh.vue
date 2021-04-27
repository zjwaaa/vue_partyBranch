<template>
	<view class="gzjh">
		<view class="gzjh_part" v-for="(el, idx) in dataArray" :key="idx" >
			<img src="/static/data.png" alt="">
			<view class="gzjh_part_cont">
				<text class="gzjh_part_cont_title">{{ el.title }}</text>
				<text class="gzjh_part_cont_date">{{ el.date }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
export default {
	data(){
		return {
			dataArray: [{ title: '组织开展“蚂蚁森林”植树活动', date: '2020.04.23' }, 
						{ title: '与省公司携手开展“智援团”助学和“乡村振兴”活动', date: '2020.04.24' },
						{ title: '组织开展“抖音直播带货活动”', date: '2020.04.25' },
						{ title: '组织党群签订共防共守防山火承诺', date: '2020.04.26' },
						{ title: '打造数字化党支部', date: '2020.04.27' },
						{ title: '党员领办重点工作任务', date: '2020.04.28' },
						{ title: '组织外委产商签订防山火承诺', date: '2020.04.29' },
						{ title: '“云上课堂”集约化管控', date: '2020.04.30' },
						{ title: '“部门学习平台”数据化管控', date: '2020.04.30' },
						{ title: '不忘初心继续前进，落实两支部结对共建协议', date: '2020.04.30' },
						{ title: '实施2021互联网办“人才培养计划', date: '2020.04.30' }]
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