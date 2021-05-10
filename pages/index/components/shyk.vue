<template>
	<view class="shyk">
		<view class="shyk_title">互联网办会议记录</view>
		<view class="shyk_tabs">
			<view v-for="(el,idx) in tabs" :key="idx" :class="[ el.check && 'textSty' ]" @click="bindCheckTab(idx)">{{ el.text }}</view>
		</view>
		<timeline>
				<timelineItem :leftTime='el.date' v-for="(el,idx) in xhData" :key="idx">
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
	
export default {
	components: { timeline, timelineItem },  
	data(){
		return {
			tabs: [ { text:'党课', check: true }, { text:'主题党日', check: false }, { text:'支部党员大会', check: false }, { text:'组织生活', check: false } ],
			xhData: [],
			tData: [
				{ 
					date: '2020/10/13',
					content: '习近平总书记关于安全生产工作论述摘编',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/9/29',
					content: '影视观看',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/8/28',
					content: '建设和弘扬优秀的企业文化',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/7/27',
					content: '学习党史、新中国史、社会主义发展史、改革开放史',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/6/18',
					content: '加强全面从严治党  促进企业改革发展',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/5/26',
					content: '为江城高擎明灯的人',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/4/21',
					content: '党课--五年后再访陕西，习近平首站考察秦岭',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/3/17',
					content: '冲锋在第一线、战斗在最前沿的党支部书记胡海波、郭光吉、刘杨',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/2/13',
					content: '观看习总书记《心系凉山》专题片',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/1/7',
					content: '守初心担使命 奋力建功新时代',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				}
			],
			ztdrData: [
				{ 
					date: '2020/10/13',
					content: '“发挥优势做贡献·决胜脱贫勇担当”',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/9/29',
					content: '“做好电力先行官、架起党群连心桥”主题党日活动',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/8/28',
					content: '知形势·明责任·勇担当',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/7/27',
					content: '塘泥湾村、省信通公司调控中心支部结对共建“学战略、讲担当、干精彩”7月主题党日活动',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/6/18',
					content: '1、“安全生产万里行”6月主题党日；2、“学战略、讲担当、干精彩”主题党日',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/5/26',
					content: '集体学习：国家电网有限公司党组书记、董事长毛伟明同志在《学习时报》上发布了署名文章——《坚持两手抓夺取双胜利向党和人民交出国家电网出色答卷》',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/4/21',
					content: '主题党日1---我的岗位·我负责；主题党日2---“护林防火党员在行动”主题党日活动',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/3/17',
					content: '1、认真学习习近平总书记关于新型冠状病毒感染的肺炎疫情防控的重要讲话精神及党中央、上级党组织关于疫情防控的重要指示精神 2、认真学习省公司、公司关于发挥基层党组织和共产党员作用全力做好新型冠状病毒肺炎防控工作的通知 3、认真学习学习国网公司、省公司两会精神',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/2/13',
					content: '“牢记嘱托、担当使命，坚决打赢疫情防控阻击战和脱贫攻坚战',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/1/7',
					content: '纪律处分条例学习、学习十九届中央纪律检查委员会第四次全体会议精神',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				}
			],
			zbdydhData: [
				{ 
					date: '2020/10/13',
					content: '1、学习习近平总书记近期重要讲话、指示批示精神2、学习《<习近平谈治国理政>第三卷》3、学习《国网四川省电力公司关于开展森林草原火灾防治涉电行为法律政策解析及实务操作成果深化运用工作的通知》4、学习《中共国网四川省电力公司委员会关于印发加强和改进新时代职工队伍思想政治工作实施方案的通知》5、学习各级安全生产会议、文件精神及党风廉政建设等内容',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/9/29',
					content: '让“共产党员服务队”旗帜高高飘扬——探索国有企业加强基层党建的有效途径.关于学习贯彻毛伟明董事长调研国网四川电力共产党员服务队讲话精神的通知.学习各级安全生产会议、文件精神及党风廉政建设等内容；公司第二次党代会、警示教育大会精神；学习《<习近平谈治国理政>第三卷》',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/8/28',
					content: '1、学习习近平总书记近期重要讲话、指示批示精神；2、学习《<习近平谈治国理政>第三卷》；3、学习《中国共产党基层组织选举工作条例》；4、学习国网公司、省公司、公司年中工作会精神；5、学习各级安全生产会议（特别是国家电网公司森林草原输配电线路火灾隐患排查治理工作推进会）、文件精神及党风廉政建设等内容',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/7/27',
					content: '《党风廉政建设责任制“三维一体”考核办法（试行）》；学习辛保安同志在公司安全生产专项整治三年行动部署暨2020年迎峰度夏电视电话会议上的讲话；学习火源管控问题专项整治行动工作方案；学习近平总书记全国两会期间重要讲话精神和全国两会精神',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/6/18',
					content: '查处诬告陷害行为做好失实检举控告澄清工作实施办法（试行）》学习川森整〔2020〕5号　四川省森林草原防灭火专项整治工作领导小组关于印发省委书记彭清华、国务院督导组副组长戴建国在省森林草原防灭火专项整治工作领导小组会议上讲话的通知；国家电网公司战略目标与公司“12333”战略体系学习、“具有中国特色”“国际领先”“能源互联网”等战略要素学习',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/5/26',
					content: '学习习近平总书记近期重要讲话；习近平总书记指示批示学习国网公司、省公司、公司2020年第二季度工作会议精神；学习省公司、公司2020年党风廉政建设和反腐败工作会精神学习各级安全生产会议、文件精神（《国家电网公司总部“四不两直”安全督察工作方案》，安委会、安全例会等会议精神，各级森林草原防火文件精神）公布：将徐双江列为发展对象',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/4/21',
					content: '关于加强近期输配电线路防山火工彭清华同志在全省森林草原防火灭火暨安全生产工作会议上的讲话（试行）川电内通〔2020〕11号　谭洪恩同志在公司2020年党建工作领导小组会议上的讲话',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/3/17',
					content: '学习国网公司、省公司、公司两会精神',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/2/13',
					content: '1、认真学习习近平总书记关于新型冠状病毒感染的肺炎疫情防控的重要讲话精神及党中央、上级党组织关于疫情防控的重要指示精神；2、认真学习省公司、公司关于发挥基层党组织和共产党员作用全力做好新型冠状病毒肺炎防控工作的通知；3、认真学习学习国网公司、省公司两会精神',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				},
				{ 
					date: '2020/1/7',
					content: '学习公司警示教育大会精神、安委会精神传达、学习党的十九届四中全会精神、学习国网公司党支部工作规则、民主评议党员实施办法',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				}
			],
			zzshData: [
				{
					date: '2020/3/3',
					content: '民主评议（对刘悦、权长荣、徐双江19年述职述责述廉测评）',
					people: '刘悦，叶平，权长荣，黄劲松，向银太，苏育均，杨燕霞，蒲春梅，杨晓，余波，林豪，邹欣茹，李扬，曾超',
					show: false
				}
			]
		}
	},
	mounted(){
		this.xhData = this.tData;
	},
	methods: {
		bindShowPeople(idx){
			this.xhData[idx].show = !this.xhData[idx].show;
		},
		bindCheckTab(idx){
			const tabs = [ ...this.tabs ];
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
						this.xhData = this.tData;
						break;
				case 1: 
						this.xhData = this.ztdrData;
						break;
				case 2: 
						this.xhData = this.zbdydhData;
						break;
				case 3:
						this.xhData = this.zzshData;
						break;
				default:
						this.xhData = this.tData;
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
