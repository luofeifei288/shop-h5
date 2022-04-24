<template>
	<view class="banner">
		<view class="total">
			<view class="txt" style="font-weight: 500;">{{ $t('index.zsr') }}</view>
			<view class="nub" style="margin-top: 9rpx;font-weight: 800;">{{ data.total_revenue || 0 }}</view>
		</view>
		<view class="fmoney" style="margin-top: 40rpx;">
			<view class="txt" style="font-weight: 500;">{{ $t('index.djje') }}</view>
			<view class="nub" style="font-weight: 800;">{{ data.freeze_amount || 0 }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			data: {
				type: Object,
				default:{}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.banner{
		background-color: $uni-color-primary;
		background-image: url(../../static/bannerimg.png);
		background-repeat: no-repeat;
		// background-attachment:fixed;
		// background-position: 419rpx 16rpx;
		background-position: top right;
		background-size: 252rpx 267rpx;
		// width: 694rpx;
		// height: 294rpx;
		border-radius: 40rpx;
		padding: 32rpx 75rpx;
		margin-top: 112rpx;
		color: #FFFFFF;
		overflow: hidden;
	}
</style>
