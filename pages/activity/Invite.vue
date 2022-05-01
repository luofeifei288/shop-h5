<template>
	<view>
		<title-com></title-com>
		<view class="box1" style="margin-top: 112rpx;">
			<view class="v1">
				{{ hd1 }}
			</view>
			<view class="v2">
				{{ $t('hd.hd2') }}
			</view>
			<view class="v3">
				<view class="v3_img">
					<img src="@/static/activity/bz1.png" alt="">
					<img src="@/static/activity/jiantou.png" alt="">
					<img src="@/static/activity/bz2.png" alt="">
					<img src="@/static/activity/jiantou.png" alt="">
					<img src="@/static/activity/bz3.png" alt="">
				</view>
				<view class="info">
					<view class="i_1">
						{{ $t('hd.hd3') }}
					</view>
					<view class="i_2">
						{{ $t('hd.hd4') }}
					</view>
					<view class="i_3">
						{{ $t('hd.hd5') }}
					</view>
				</view>
			</view>
			<view class="v4">
				{{ $t('hd.hd6') }}
			</view>
			<button class="btn1" @click="tolink('share')">{{ $t('hd.hd7') }}</button>
		</view>
		
		<view class="box1" style="margin-top: 10rpx;">
			<view class="v1">
				{{ $t('hd.hd8') }}
			</view>
			<view class="v2">
				{{ $t('hd.hd9') }}
			</view>
			<view class="v3">
				<view class="v3_box">
					<view class="item">
						<view class="header_i">
							<view class="head_img">
								<img src="@/static/activity/title_1.png" alt="">
							</view>
							<view class="head_name">
								{{ $t('hd.hd10') }}
							</view>
						</view>
						<view class="txt">
							{{ $t('hd.hd11') }}
						</view>
					</view>	
					<view class="item">
						<view class="header_i">
							<view class="head_img">
								<img src="@/static/activity/title_2.png" alt="">
							</view>
							<view class="head_name">
								{{ $t('hd.hd12') }}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="v4">
				{{ $t('hd.hd13') }}
			</view>
			<button class="btn1" @click="tolink('team')">{{ $t('hd.hd14') }}</button>
		</view>
	</view>
</template>

<script>
	import titleCom from "../component/titleCom.vue"
	export default {
		components:{
			titleCom
		},
		data() {
			return {
				
			};
		},
		computed:{
			hd1(){
				return this.$t('hd.hd1').toUpperCase()
			}
		},
		methods:{
			tolink(url){
				switch (url){
					case 'share':
						uni.navigateTo({
							url:'../main/share'
						})
						break;
					case 'team':
						uni.navigateTo({
							url: '../main/team'
						})
						break;
					default:
						break;
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	page{		
		background: #F7F7F9;
	}
	*{white-space: pre-wrap;}
	.box1{
		// width: 615rpx;
		background: #FFFFFF;
		// margin: 0;
		padding: 0 73rpx;
		overflow: hidden;
		text-align: center;
		.v1{
			font-size: 29rpx;
			font-weight: 500;
			color: #0082EF;
			line-height: 42rpx;
			margin-top: 72rpx;
			background-image: url('@/static/activity/a_bg.png');
			background-repeat: no-repeat;
			background-size: 255rpx 98rpx;
			width: 615rpx;
			height: 98rpx;
			line-height: 98rpx;
			background-position: center center;
		}
		.v2{
			font-size: 23rpx;
			font-weight: 500;
			color: #0082EF;
			line-height: 31rpx;
			letter-spacing: 1rpx;
			margin-top: 42rpx;
		}
		.v3{
			margin-top: 10rpx;
			.v3_img{
				// background-color: #F7F7F9;
				width: 544rpx;
				height: 147rpx;
				margin-top: 36rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 30rpx;
				img:nth-child(1){
					width: 88rpx;
					height: 87rpx;
				}
				img:nth-child(2){
					width: 81rpx;
					height: 29rpx;
				}
				img:nth-child(3){
					width: 88rpx;
					height: 87rpx;
				}
				img:nth-child(4){
					width: 81rpx;
					height: 29rpx;
				}
				img:nth-child(5){
					width: 88rpx;
					height: 87rpx;
				}
			}
			.info{
				font-size: 19rpx;
				display: flex;
				justify-content: space-between;
				margin-top: 10rpx;
				.i_1,.i_2,.i_3{
					width: 188rpx;
				}
			}
			.v3_box{
				.item{
					margin-top: 68rpx;
					.header_i{
						display: flex;
						align-items: center;
						justify-content: center;
						.head_img{
							width: 83rpx;
							height: 83rpx;
							background-color: #F7F7F9;
							border-radius: 50%;
							display: inline-block;
							img{
								width: 83rpx;
								height: 83rpx;
							}
						}
						.head_name{
							font-size: 25rpx;
							font-weight: 500;
							color: #000000;
							line-height: 25rpx;
							margin-left: 20rpx;
						}
					}
					.txt{
						font-size: 23rpx;
						color: #000000;
						line-height: 29rpx;
						margin-top: 36rpx;
						text-align: center;
					}
					
				}
			}
		}
		.v4{
			font-size: 23rpx;
			line-height: 29rpx;
			color: rgba(0, 0, 0, 0.3);
			margin-top: 50rpx;
		}
		.btn1{
			width: 321rpx;
			height: 63rpx;
			line-height: 63rpx;
			background: #0082EF;
			border-radius: 31rpx;
			font-size: 29rpx;
			color: #FFFFFF;
			margin: 36rpx auto;
		}
	}
</style>
