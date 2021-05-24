<template>
	<view class="shyk">
		<view class="shyk_title">互联网办会议记录</view>
		<view class="shyk_tabs">
			<view v-for="(el,idx) in shykData.tabs" :key="idx" :class="[ el.check && 'textSty' ]" @click="bindCheckTab(idx)">{{ el.text }}</view>
		</view>
		<timeline>
				<timelineItem :leftTime='el.date' v-for="(el,idx) in shykData.xhData" :key="idx">
					<view class="tripItem">
						<view class="part">
							<view class="part_Content">
								<img src="/static/content.png" alt="">
								<text>会议内容</text>
							</view>
							<view class="part_detail">
								{{ el.content }}
							</view>
							<img src="/static/line.png" alt="">
							<view class="part_people">
								<view class="part_people_cont">
									<img src="/static/people.png" alt="">
									<text>参会人员</text>
								</view>
								<view class="part_people_show" @click="bindShowPeople(idx)">{{ el.show ? '收起' : '展开' }}</view>
							</view>
							<view class="part_detail" v-if="el.show">
								{{ el.people }}
							</view>
						</view>
					</view>
				</timelineItem>
		</timeline>
	</view>
</template>

<script>
	
import timeline from '@/components/chenbin-timeline/timeLine.vue'
import timelineItem from '@/components/chenbin-timeline/timelineItem.vue'	
import configData from "@/mixins/configData.js"
	
export default {
	components: { timeline, timelineItem },  
	mixins: [ configData ],
	computed: {
		shykData(){
			const { shyk = {} } = this.total.jcgz;
			return shyk
		}
	},
	mounted(){
		this.shykData.xhData = this.shykData.tData;
	},
	methods: {
		bindShowPeople(idx){
			this.shykData.xhData[idx].show = !this.shykData.xhData[idx].show;
		},
		bindCheckTab(idx){
			const tabs = [ ...this.shykData.tabs ];
			// this.tabs[idx].check = true;
			tabs.forEach((el, i) => {
				if(idx === i){
					el.check = true;
				}else{
					el.check = false;
				}
			})
			switch(idx){
				case 0: 
						this.shykData.xhData = this.shykData.tData;
						break;
				case 1: 
						this.shykData.xhData = this.shykData.ztdrData;
						break;
				case 2: 
						this.shykData.xhData = this.shykData.zbdydhData;
						break;
				case 3:
						this.shykData.xhData = this.shykData.zzshData;
						break;
				default:
						this.shykData.xhData = this.shykData.tData;
			}
		}
	}
}	
	
</script>

<style lang="scss" scoped>
.shyk{
	background: #FFFFFF;
	padding: 35rpx;
	border-radius: 15rpx;
	box-shadow:0px 0px 20rpx 0px rgba(0,0,0,0.08);
	line-height: 50rpx;	
	&_title{
		text-align: center;
		letter-spacing: 8rpx;
		font-weight: bold;
		margin-bottom: 15rpx;
	}
	&_tabs{
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 25rpx;
		> view{
			background: #ECECEC;
			min-width: 100rpx;
			height: 50rpx;
			border-radius: 20rpx;
			text-align: center;
			font-size: 24rpx;
			letter-spacing: 4rpx;
			padding: 0 10rpx;
		}
		.textSty{
			color: #BA1616;
			background: #F0CCCC;
		}
	}
	.tripItem{
		background: url(../../../static/shykbg.png) no-repeat center center;
		background-size: 100% 100%;
		.part{
			padding: 10rpx 10rpx 10rpx 30rpx;
			> img{
				width: 100%;
				height: 19rpx;
			}
			&_Content{
				display: flex;
				align-items: center;
				> img{
					width: 28rpx;
					height: 28rpx;
				}
				> text{
					margin-left: 10rpx;
					color: #BA1616;
					font-weight: bold;
					font-size: 24rpx;
				}
			}
			&_people{
				display: flex;
				justify-content: space-between;
				&_cont{
					display: flex;
					align-items: center;
					> img{
						width: 28rpx;
						height: 28rpx;
					}
					> text{
						margin-left: 10rpx;
						color: #BA1616;
						font-weight: bold;
						font-size: 24rpx;
					}					
				}
				&_show{
					margin-left: 10rpx;
					color: #BA1616;
					font-weight: bold;
					text-decoration: underline;
					font-size: 24rpx;
				}
			}
			&_detail{
				font-size: 22rpx;
				line-height: 36rpx;
			}
		}
	}
}
</style>
