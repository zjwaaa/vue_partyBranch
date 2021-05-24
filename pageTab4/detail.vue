<template>
	<view class="dtDetail">
		<view class="part" v-for="(el, idx) in answer" :key="idx" @click="showAnswer(el)">
			<text>{{ idx + 1 }}</text>
			<view :class="[ el.fldAnswer == el.rightAnswer && 'right' ]">{{ el.fldAnswer }}</view>
		</view>
	</view>
</template>

<script>
	
	export default{
		data(){
			return {
				answer: [
					
				]
			}
		},
		onLoad(val){
			const answer = JSON.parse(decodeURIComponent(val.answer))
			console.log(answer)
			this.answer = answer;
		},
		methods:{
			showAnswer(el){
				if(el.fldAnswer != el.rightAnswer){
					uni.navigateTo({
						url: `/pageTab4/showTm?el=${encodeURIComponent(JSON.stringify(el))}`
					})
				}
			}
		},
		beforeDestroy(){
			uni.$emit('pullQuestion');
		}
	}
	
</script>

<style lang="scss">
	.dtDetail{
		padding: 35rpx;
		display: flex;
		flex-wrap: wrap;
		.part{
			display: flex;
			align-items: center;
			flex-direction: column;
			width: calc(100% / 6);
			margin-bottom: 25rpx;
			> text{
				font-size: 32rpx;
				margin-bottom: 20rpx;
			}
			> view{
				width: 50rpx;
				height: 50rpx;
				background: red;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #FFFFFF;
			}
			.right{
				background: green
			}
		}
	}
</style>
