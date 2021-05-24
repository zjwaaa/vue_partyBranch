<template>
	<view class="zqdm">
		<view class="line_under exam-item-title">
			{{ detail.fldName }}
		</view>
		<view class="exam-item-option" v-for="(item,rowIndex_1) in detail.QuestionOptionList" v-bind:key='rowIndex_1'>
			<radio :checked="item.fldOptionIndex == detail.rightAnswer" disabled="" color="#C00000"/>
			<text :class="[ item.fldOptionIndex == detail.rightAnswer && 'right' ]">{{checkNum(item.fldOptionIndex)}}</text>.<text :class="[ item.fldOptionIndex == detail.rightAnswer && 'right' ]">{{item.fldOptionText}}</text>
		</view>
	</view>
</template>

<script>
	
	export default{
		onLoad(val) {
			const detail = JSON.parse(decodeURIComponent(val.el));
			this.detail = detail;
		},
		data(){
			return {
				detail: {}
			}
		},
		methods: {
			checkNum(num) { //把数字转换为字母
				if (typeof(num) == 'number')
					return String.fromCharCode(0x60 + num).toUpperCase();
				else
					return num;
			},
		}
		
	}
	
</script>

<style lang="scss">
	.zqdm{
		padding: 35rpx;
		.exam-item-option {
			font-size: 30rpx;
			padding: 10rpx 0;
			margin: 30rpx 0;
		}
		.right{
			color: #C00000;
		}
	}
</style>
