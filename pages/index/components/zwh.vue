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
                <t-tr v-for="item in zwhData.tableList" :key="item.id" font-size="24" color="#000">
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
import configData from "@/mixins/configData.js"

export default {
	components: { tTable, tTh, tTr, tTd },
	mixins: [ configData ],
	computed: {
		zwhData(){
			const { zwh = {} } = this.total.jcgz;
			return zwh
		}
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
