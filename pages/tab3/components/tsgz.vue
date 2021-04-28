<template>
	<view class="tsgz">
		<navigator class="tsgz_part" v-for="(el, idx) in dataArray" :key="idx" :url="`/pageTab3/detail?el=${encodeURIComponent(JSON.stringify(el))}`">
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
			dataArray: [{ title: '疫情复工监测', date: '2020.04.23', subTitle: '疫情复工复产期间，支部党员带领团青积极开展疫情保障、预防宣传、复工复产监测等重要	工作，党员团青先后发挥先锋模范作用共计354人次。', imgArr: [ '11', '12' ] }, 
						{ title: '支部骨干牵头省信通重点工作任务', date: '2020.04.24', subTitle: '支部积极响应上级党委号召，积极参与电力数据看扶贫活动。苏育均：牵头负责该项工作。向银太：为电力数据看扶贫做顶层框架设计。黄劲松、李扬：为电力数据看扶贫提供基础数据保障。', imgArr: [ '21' ] },
						{ title: '党群师徒合同签订', date: '2020.04.25', subTitle: '支部一直以“深入基层不放松，立根原在群众中”为出发点，要求部门党员、领导干部带着责任与担当，用行动拉紧与群众的情感纽带。年初组织签订了党员群众师徙结对合同13份，要求支部全体党员要在群众中积极发挥先锋引领作用，用实事说话。', imgArr: [ '31', '32' ] },
						{ title: '党群共防共守防山火承诺签订', date: '2020.04.26', subTitle: '2020年4月，支部组织党员群众签订森林草原防火共防共守承诺书13份，将部门防火工作落到实处。', imgArr: [ '41' ] },
						{ title: '支部骨干考察盐源电商发展状况', date: '2020.04.27', subTitle: '', imgArr: [ '51', '52' ]},
						{ title: '党员领办重点工作任务', date: '2020.04.28', subTitle: '', imgArr: [ '61' ] },
						{ title: '支部组织外委厂商签订防山火承诺', date: '2020.04.29', subTitle: '', imgArr: [ '71', '72', '73' ] },
						{ title: '创新现场作业风险管控', date: '2020.04.30', subTitle: '', imgArr: [ '81' ] },
						{ title: '履职责任分解', date: '2020.04.30', subTitle: '', imgArr: [ '91' ] },
						{ title: '开展党建+安全生产活动 隐患排查治理', date: '2020.04.30', subTitle: '', imgArr: [ '101', '102' ] },
						{ title: '组织扶贫日自愿捐赠活动', date: '2020.04.30', subTitle: '', imgArr: [ '111' ] },
						{ title: '不忘初心继续前进', date: '2020.04.30', subTitle: '2019年10月，支部结合“不忘初心，牢记使命”主题教育活动，制定了“六个一”专项行动，2020年4月，支部派出骨干力量前往公司定点扶贫村塘泥湾村进行了现场勘察，事后为塘泥湾村筹集到两次爱心捐款，捐款累计金额14698元整，落地于“六个一”专项行动，具体情况如下：', imgArr: [ '121', '122', '123' ] },
						{ title: '党员发展', date: '2020.04.30' }]
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