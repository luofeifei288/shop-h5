<template>
	<view class="container">
		<!-- <title-com style="margin-top: 80rpx;"></title-com> -->
		<view class="invite">
			<view class="img">
				<tki-qrcode ref="qrcode"
					:val="val" 
					:size="size"
					:unit="unit"
					:background="background"
					:foreground="foreground"
					:pdground="pdground"
					:lv="lv"
					:onval="onval"
					:loadMake="loadMake"
					:icon="icon"
					:loadingText="loadingText"
					@result="qrR" />
			</view>

			<view class="info">
				<view>{{ $t('share.share1') }}</view>
				<view style="margin-top: 18rpx;">{{ $t('share.share2') }}</view>
			</view>
			<view class="code">
				{{ $t('share.share3') }}：{{ shareinfo.code }}
			</view>

			<view class="inlink">
				<view class="txt1">{{ $t('share.share4') }}</view>
				<view class="txt2">{{ $t('share.share5') }}</view>
				<view class="copy">
					<view class="copytxt">{{ copytxt }}</view>
					<view class="copybtn" @click="copy">{{ $t('share.share6') }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import titleCom from "../component/titleCom.vue"
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		data() {
			return {
				shareinfo: {},
				copytxt: '',

				val: '', //要生成二维码的值
				size: 228, // 二维码的大小 单位为rpx
				background: '#ffffff', //背景色
				foreground: '#000000',
				pdground: '#000000', //角标色
				icon: '../../static/logo.png', //二维码图标
				iconsize: 20, //二维码图标大小
				lv: 3, //二维码容错级别
				onval: true, //val值变化时自动重新生成二维码
				unit: 'upx',
				loadMake: true, //组件加载完成后自动生成二维码
				src: '',
				showLoading: true, //loading
				
				title: 'Hello'
			}
		},
		computed:{
			loadingText(){
				return this.$t('share.share7')
			}
		},
		components: {
			titleCom,
			tkiQrcode
		},
		onLoad() {
			this.getData()
		},
		methods: {
			copy() {
				uni.setClipboardData({
					data: this.copytxt,
					success: function() {
						// console.log('success');
					}
				});
			},
			// 获取数据
			getData() {
				this.$api.share({

				}).then(res => {
					if (res.code == 200) {
						this.shareinfo = res.data
						this.copytxt = res.data.url
						this.val = res.data.url
					}
				})
			},
			qrR(res) {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.invite {
		display: flex;
		flex-direction: column;
		margin-top: 50rpx;
		align-items: center;

		.img {
			width: 266rpx;
			height: 266rpx;
			background-color: #F3F3F3;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.info {
			margin-top: 28rpx;
			width: 224rpx;
			text-align: center;
			font-size: 28rpx;
			color: #03081A;
		}

		.code {
			font-size: 42rpx;
			color: $uni-color-primary;
			margin-top: 47rpx;
		}

		.inlink {
			background-color: #CB5F1B;
			background-image: url(../../static/bannerimg.png);
			background-repeat: no-repeat;
			background-size: 252rpx 267rpx;
			background-position: 419rpx 16rpx;
			border-radius: 53rpx;
			width: 578rpx;
			padding: 86rpx 58rpx 44rpx;
			font-size: 32rpx;
			color: #FFFFFF;
			margin-top: 109rpx;

			.txt1 {
				font-weight: bold;
			}

			.txt2 {
				margin-top: 35rpx;
			}

			.copy {
				background-color: #FFFFFF;
				border-radius: 18rpx;
				display: flex;
				align-items: center;
				padding: 10rpx 14rpx;
				justify-content: space-between;
				margin-top: 86rpx;

				.copytxt {
					font-size: 25rpx;
					color: #000000;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					width: 300rpx;
				}

				.copybtn {
					background-color: $uni-color-primary;
					font-size: 25rpx;
					border-radius: 18rpx;
					padding: 18rpx 39rpx;
					font-weight: 800;
				}
			}
		}
	}
</style>
