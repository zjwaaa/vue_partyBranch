<template>
	<view class="content_tab3">
		<view class="tabTop">
			<liuyuno-tabs  :tabData="tabs"  @tabClick='tabClick'></liuyuno-tabs>
		</view>
		<view class="temp"></view>
		<view class="mainContent">
			<Jgzz v-if="tabIdx == 0"></Jgzz>
			<Dyfc v-if="tabIdx == 1"></Dyfc>
			<Tsgz v-if="tabIdx == 2"></Tsgz>
			<Gzjh v-if="tabIdx == 3"></Gzjh>
		</view>
		<!-- <treeTuY :serverData="serverData" @dataChange="change"></treeTuY> -->
	</view>
</template>

<script>
	
import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue"
import treeTuY from '@/components/treeTuY/treeTuY.vue'
import Jgzz from './components/jgzz.vue'
import Dyfc from './components/dyfc.vue'
import Tsgz from './components/tsgz.vue'
import Gzjh from './components/gzjh.vue'

export default {
	components: { liuyunoTabs, treeTuY, Jgzz, Dyfc, Tsgz, Gzjh },
	data() {
		return {
			tabIdx: 0, 
			tabs: [ "机构组织", "党员风采", "特色工作", "重点工作计划" ],
			serverData: {
                    title: '报道新生',
                    ArrC: [{
                            title: '船舶专业群',
                            child: [{
                                title: '船舶2001班'
                            }]
                        },
                        {
                            title: '船舶专业群',
                            child: [{
                                    title: '船舶2001班'
                                },{
                                    title: '船舶2001班'
                                }
                            ]
                        },
						{
                            title: '船舶专业群',
                            child: [{
                                    title: '船舶2001班'
                                },{
                                    title: '船舶2001班'
                                }
                            ]
                        },
						{
                            title: '船舶专业群',
                            child: [{
                                    title: '船舶2001班'
                                },{
                                    title: '船舶2001班'
                                }
                            ]
                        }
                    ]
                }
		}
	},
	onLoad() {

	},
	methods: {
		tabClick(val){
			this.tabIdx = val;
		},
		change(res){
			console.log(res)
		}
	}
}
</script>

<style lang="scss" scoped>
.content_tab3{
	position: relative;
	width: 100%;
	height: 100%;
	.temp{
		height: 90rpx;
		width: 100%;
	}
	.tabTop{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: #FFFFFF;
	}
	.mainContent{
		box-sizing: border-box;
		width: 100%;
		padding: 20rpx;
		background: #F7F6F6;
	}
}
</style>
