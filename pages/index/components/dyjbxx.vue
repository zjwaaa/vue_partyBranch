<template>
	<view class="dyjbxx">
		<view class="dyjbxx_people" v-if="dyjbxxData.lyData.name">
			<view class="dyjbxx_people_sj">
				<view class="dyjbxx_people_sj_cont" @click="bindSetJl(dyjbxxData.lyData)">
					<text>{{ dyjbxxData.lyData.name }}支部书记</text>
					<view class="bg">
						<img :src="`/static/photo/${ dyjbxxData.lyData.photo }.png`" alt="" mode="widthFix">
					</view>
				</view>
			</view>
			<view class="dyjbxx_people_wy">
				<view class="dyjbxx_people_wy_cont" v-for="(el, idx) in dyjbxxData.wyData" :key="idx" @click="bindSetJl(el)">
					<view class="bg">
						<img :src="`/static/photo/${el.photo}.png`" alt="" mode="widthFix">
					</view>
					<text>{{ el.name }}</text>
					<text class="desc">{{ el.desc }}</text>
				</view>
			</view>
			<view class="dyjbxx_people_other">
				<view class="dyjbxx_people_other_cont" v-for="(el, idx) in dyjbxxData.otherData" :key="idx" @click="bindSetJl(el)">
					<view class="bg">
						<img :src="`/static/photo/${el.photo}.png`" alt="" mode="widthFix">
					</view>
					<text>{{ el.name }}</text>
				</view>				
			</view>
			<view class="dyjbxx_people_part">
				<view class="dyjbxx_people_part_title">
					<img src="/static/fc02.png" alt="">
					<text>{{ dyjbxxData.showData.name }}简历</text>
				</view>
				<view class="dyjbxx_people_part_des">
					{{ dyjbxxData.showData.jl }}
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
				<t-tr v-for="(item, idx) in dyjbxxData.tableList" :key="idx" font-size="24" color="#000">
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
		<view class="dyjbxx_dyfz mt15" v-if="dyjbxxData.dyfzqk.photo">
			<view class="dyjbxx_dyfz_title">预备党员</view>
			<view class="dyjbxx_dyfz_detail">
				<img :src="`/static/photo/${dyjbxxData.dyfzqk.photo}.png`" alt="" mode="widthFix">
				<text>{{ dyjbxxData.dyfzqk.jl }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
import tTable from '@/components/t-table/t-table.vue';
import tTh from '@/components/t-table/t-th.vue';
import tTr from '@/components/t-table/t-tr.vue';
import tTd from '@/components/t-table/t-td.vue';	
import configData from "@/mixins/configData.js"
	
export default {
	components: { tTable, tTh, tTr, tTd },	
	mixins: [ configData ],
	methods: {
		bindSetJl(el){
			const { name = '', jl = '' } = el;
			this.dyjbxxData.showData.name = name;
			this.dyjbxxData.showData.jl = jl;
		}
	},
	computed: {
		dyjbxxData(){
			const { dyjbxx = {} } = this.total.jcgz;
			return dyjbxx
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
