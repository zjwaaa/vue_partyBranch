<template>
	<view class="t-th" :style="{ 'border-width': thBorder + 'rpx' ,'border-color':borderColor,'font-size':fontSize+'rpx' ,'color':color,'justify-content':thAlignCpd, 'background': background, 'padding' : padding + 'rpx'}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			align: String,
			background: {
				type: String,
				default: '#fff'
			},
			padding: {
				type: String,
				default: '15'
			}
		},
		data() {
			return {
				thBorder: '1',
				borderColor: '#fff',
				fontSize: '15',
				color: '#3b4246',
				thAlign: 'center'
			};
		},
		inject: ['table', 'tr'],

		created() {
			this.thBorder = this.table.border;
			// this.borderColor = this.table.borderColor;
			this.fontSize = this.tr.fontSize;
			this.color = this.tr.color;
			if (this.align) {
				this.thAlign = this.align;
			} else {
				this.thAlign = this.tr.align
			}
		},

		computed: {
			thAlignCpd() {
				let nameAlign = '';
				switch (this.thAlign) {
					case 'left':
						nameAlign = 'flex-start'
						break;
					case 'center':
						nameAlign = 'center'
						break;
					case 'right':
						nameAlign = 'flex-end'
						break;
					default:
						nameAlign = 'center'
						break;
				}
				return nameAlign
			}
		}
	};
</script>

<style>
	.t-th {
		flex: 1;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		font-weight: bold;
		text-align: center;
		color: #3b4246;
		border-left: 1rpx #d0dee5 solid;
		border-top: 1rpx #d0dee5 solid;
	}
</style>
