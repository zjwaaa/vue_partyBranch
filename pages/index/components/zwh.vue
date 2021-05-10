<template>
	<view class="zwh">
		<view class="zwh_title">互联网支部委员会主要议题</view>
        <view class="box">
            <t-table>
                <t-tr font-size="24" color="#fff" >
                    <t-th class="styWidth14" background="#C00000">序列</t-th>
                    <t-th class="styWidth18" background="#C00000">时间</t-th>
                    <t-th class="styWidth68" background="#C00000">会议内容</t-th>
                </t-tr>
                <t-tr v-for="item in tableList" :key="item.id" font-size="24" color="#000">
                    <t-td class="styWidth14">{{ item.id + 1 }}</t-td>
                    <t-td class="styWidth18">{{ item.time }}</t-td>
                    <t-td class="styWidth68">{{ item.title }}</t-td>
                </t-tr>
            </t-table>
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
	data() {
		return {
			tableList: [{
					id: 0,
					time: '1-7',
					title: '制定2020年支部党建工作计划',
				},
				{
					id: 1,
					time: '2-13',
					title: '商定新冠肺炎防控应急预案',
				},
				{
					id: 2,
					time: '3-17',
					title: '学习国网公司、省公司、公司两会精神',
				},
				{
					id: 3,
					time: '4-21',
					title: '研讨“云上课堂”实施方案，对徐双江同志半年考察',
				},
				{
					id: 4,
					time: '5-26',
					title: '学习“四不两直”安全督察工作方案，学习习近平总书记近期重要讲话指示批示精神，研讨发展对象一事',
				},
				{
					id: 5,
					time: '6-10',
					title: '确定将入党积极分子徐双江同志列为发展对象并报备',
				},
				{
					id: 6,
					time: '7-27',
					title: '凉森整组办〔2020〕17号火源管控问题专项整治行动工作方案学习',
				},
				{
					id: 7,
					time: '8-28',
					title: '知形势·明责任·勇担当讨论、发展对象政治审查',
				},
				{
					id: 8,
					time: '9-29',
					title: '总结近期支部工作，部署支部党员带头讲党课',
				},
				{
					id: 9,
					time: '10-13',
					title: '总结安排党支部近期活动：各支委总结1-10月工作，书记安排下阶段工作',
				},
				{
					id: 10,
					time: '11-2',
					title: '审查发展对象记录',
				},
				{
					id: 11,
					time: '12-29',
					title: '年终总结',
				}
			]
		};
	}
}
	
</script>

<style lang="scss" scoped> 
.zwh{
	background: #FFFFFF;
	padding: 35rpx;
	border-radius: 15rpx;
	box-shadow:0px 0px 20rpx 0px rgba(0,0,0,0.08);
	line-height: 50rpx;	
	&_title{
		text-align: center;
		letter-spacing: 8rpx;
		font-weight: bold;
		margin-bottom: 35rpx;
	}
	.styWidth14{
		width: 14%;
	}
	.styWidth18{
		width: 18%;
	}
	.styWidth68{
		width: 68%;
	}
}
</style>
