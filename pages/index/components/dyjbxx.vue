<template>
	<view class="dyjbxx">
		<view class="dyjbxx_people">
			<view class="dyjbxx_people_sj">
				<view class="dyjbxx_people_sj_cont" @click="bindSetJl(lyData)">
					<text>{{ lyData.name }}支部书记</text>
					<view class="bg">
						<img :src="`/static/photo/${ lyData.photo }.png`" alt="" mode="widthFix">
					</view>
				</view>
			</view>
			<view class="dyjbxx_people_wy">
				<view class="dyjbxx_people_wy_cont" v-for="(el, idx) in wyData" :key="idx" @click="bindSetJl(el)">
					<view class="bg">
						<img :src="`/static/photo/${el.photo}.png`" alt="" mode="widthFix">
					</view>
					<text>{{ el.name }}</text>
					<text class="desc">{{ el.desc }}</text>
				</view>
			</view>
			<view class="dyjbxx_people_other">
				<view class="dyjbxx_people_other_cont" v-for="(el, idx) in otherData" :key="idx" @click="bindSetJl(el)">
					<view class="bg">
						<img :src="`/static/photo/${el.photo}.png`" alt="" mode="widthFix">
					</view>
					<text>{{ el.name }}</text>
				</view>				
			</view>
			<view class="dyjbxx_people_part">
				<view class="dyjbxx_people_part_title">
					<img src="/static/fc02.png" alt="">
					<text>{{ showData.name }}简历</text>
				</view>
				<view class="dyjbxx_people_part_des">
					{{ showData.jl }}
				</view>
			</view>
		</view>
		<view class="dyjbxx_dfjn mt15">
			<view class="dyjbxx_dfjn_title">党费收缴情况</view>
			<t-table>
				<t-tr font-size="24" color="#fff" >
					<t-th class="styWidth14" background="#C00000" padding="2">姓名</t-th>
					<t-th class="styWidth14" background="#C00000" padding="2">党费/月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">1月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">2月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">3月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">4月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">5月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">6月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">7月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">8月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">9月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">10月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">11月</t-th>
					<t-th class="styWidth6" background="#C00000" padding="2">12月</t-th>
				</t-tr>
				<t-tr v-for="(item, idx) in tableList" :key="idx" font-size="24" color="#000">
					<t-td class="styWidth14" padding="2rpx">{{ item.name }}</t-td>
					<t-td class="styWidth14" padding="2rpx">{{ item.sole }}</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn1" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn2" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn3" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn4" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn5" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn6" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn7" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn8" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn9" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn10" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn11" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
					<t-td class="styWidth6" padding="2rpx" color="red">
						<img v-if="item.jn12" class="yeah" src="/static/duigou.png" alt="">
					</t-td>
				</t-tr>	
			</t-table>
		</view>
		<view class="dyjbxx_dyfz mt15">
			<view class="dyjbxx_dyfz_title">党员发展情况</view>
			<view class="dyjbxx_dyfz_detail">
				<img src="/static/photo/zxr.png" alt="" mode="widthFix">
				<text>邹欣茹，女，汉族，1994年12月生，四川达州人，2017年7月参加工作，2016年4月14日加入中国共产党，现任支部青年委员</text>
			</view>
		</view>
	</view>
</template>

<script>
	
import tTable from '@/components/t-table/t-table.vue';
import tTh from '@/components/t-table/t-th.vue';
import tTr from '@/components/t-table/t-tr.vue';
import tTd from '@/components/t-table/t-td.vue';	
	
export default {
	components: { tTable, tTh, tTr, tTd },	
	data(){
		return {
			showData: {
				name: '刘悦', jl: '刘悦，男，汉族，1974年11月生，四川西昌人，1994年7月参加工作，1997年12月16日加入中国共产党，现任支部书记'
			},
			lyData: { photo: 'ly', name: '刘悦', jl: '刘悦，男，汉族，1974年11月生，四川西昌人，1994年7月参加工作，1997年12月16日加入中国共产党，现任支部书记' },
			wyData: [ 
				{ photo: 'xyt', name: '向银太', desc: '组织委员', jl: '向银太，男，汉族，1981年11月生，四川攀枝花人，2000年12月参加工作，2012年9月14日加入中国共产党，现任支部组织委员' }, 
				{ photo: 'yb', name: '余波', desc: '纪检委员', jl: '余波，男，汉族，1988年10月生，四川仁寿人，2012年7月参加工作，2010年11月23日加入中国共产党，现任支部纪检委员' },
				{ photo: 'syj', name: '苏育均', desc: '宣传委员', jl: '苏育均，男，汉族，1986年02月生，四川梓潼人，2012年7月参加工作，2011年10月28日加入中国共产党，现任支部宣传委员' }, 
				{ photo: 'zxr', name: '邹欣茹', desc: '青年委员', jl: '邹欣茹，女，汉族，1994年12月生，四川达州人，2017年7月参加工作，2016年4月14日加入中国共产党，现任支部青年委员' }
			],
			otherData: [
				{ photo: 'hy', name: '何莹', jl: '何莹，女，彝族，1998年4月生，四川盐源人，2020年9月参加工作，2018年11月27日加入中国共产党' }, 
				{ photo: 'liyang', name: '李杨', jl: '李杨，男，汉族，1972年3月生，四川大邑人，1997年7月参加工作，2019年9月12日加入中国共产党' },
				{ photo: 'linhao', name: '林豪', jl: '林豪，男，汉族，1994年5月生，四川彭山人，2016年7月参加工作，2015年5月23日加入中国共产党'},
				{ photo: 'panwenfen', name: '潘文分', jl: '潘文分，女，汉族，1994年10月生，四川会东人，2020年8月参加工作，2015年12月14日加入中国共产党' }, 
				{ photo: 'puchunmei', name: '蒲春梅', jl: '蒲春梅，女，汉族，1993年9月生，四川绵阳人，2016年7月参加工作，2015年12月19日加入中国共产党' }, 
				{ photo: 'xushuangjiang', name: '徐双江', jl: '徐双江，男，汉族，云南双江人，2014年7月参加工作，2020年11月30日加入中国共产党' },
				{ photo: 'yangxiao', name: '杨晓', jl: '杨晓，女，汉族，1991年2月生，云南永仁人，2013年7月参加工作，2011年11月21日加入中国共产党' }, 
				{ photo: 'yangyanxia', name: '杨燕霞', jl: '杨燕霞，女，汉族，1990年2月生，四川冕宁人，2015年7月参加工作，2014年11月27日加入中国共产党'  }
			],
			tableList: [
				{
					name: '刘悦',
					sole: '203',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '徐双江',
					sole: '96',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '叶平',
					sole: '116',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '苏育均',
					sole: '47',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '李扬',
					sole: '46',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '向银太',
					sole: '45',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '蒲春梅',
					sole: '14',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '杨晓',
					sole: '31',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '杨燕霞',
					sole: '35',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '潘文分',
					sole: '36',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '何莹',
					sole: '13',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '余波',
					sole: '44',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '林豪',
					sole: '11',
					jn1: true,
					jn2: true,
					jn3: true,
				},
				{
					name: '邹欣茹',
					sole: '11',
					jn1: true,
					jn2: true,
					jn3: true,
				}
			]
		}
	},
	methods: {
		bindSetJl(el){
			const { name = '', jl = '' } = el;
			this.showData.name = name;
			this.showData.jl = jl;
		}
	}
}	
</script>

<style lang="scss">
.dyjbxx{
	&_dfjn, &_dyfz, &_people{
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
		img{
			height: auto;
		}
	}
	&_dyfz{
		&_detail{
			display: flex;
			align-items: center;
			> img{
				width: 150rpx;
			}
			> text{
				flex: 1;
				font-size: 24rpx;
				margin-left: 15rpx;
				text-indent: 48rpx;
			}
		}
	}
	&_people_sj, &_people_other, &_people_wy{
		display: flex;
		justify-content: center;
		&_cont{
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 24rpx;
			.bg{
				box-shadow:0px 0px 20rpx 0px rgba(0,0,0,0.08);
				padding: 5rpx 10rpx;
				> img{
					width: 75rpx;
				}
			}
		}
	}
	&_people_wy{
		justify-content: space-around;
		margin-top: 25rpx;
	}
	&_people_other{
		margin-top: 20rpx;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin-left: 7rpx;
		&_cont{
			margin: 5rpx 17rpx;
		}
	}
	&_people_part{
		margin-top: 40rpx;
		padding: 20rpx;
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
			font-size: 24rpx;
		}
	}
	.desc{
		font-size: 22rpx;
		margin-top: -18rpx;
	}
	.styWidth14{
		width: 14%;
	}
	.styWidth6{
		width: 6%;
	}
	.mt15{
		margin-top: 35rpx;
	}
	.yeah{
		width: 32rpx;
		height: 32rpx;
	}
}
</style>
