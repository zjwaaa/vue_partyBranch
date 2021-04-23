<template>
	<view>
		{{ title }}
	</view>
</template>

<script>
	
export default {
	data(){
		return {
			title: ''
		}
	},
	onLoad(val){
		const { title = '' } = val;
		this.title = title;
	},
}

</script>

<style>
</style>
