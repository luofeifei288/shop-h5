<template>
	<view class="container">
		<view class="head" style="padding-top: 112rpx;">
			<title-com style="background-color: #D66A28;"></title-com>
			<view class="inviteCode" style="margin-top: 20rpx;color: #FFFFFF;font-size: 32rpx;font-weight: bold;">
				{{ $t('my.mine0') }}：{{ mydata.invite_code }}
			</view>
		</view>
		<view class="micon">
			<image src="../../static/mine/micon.png" mode=""></image>
		</view>
		<view class="zmoney">{{ $t('my.mine1') }}：{{ mydata.balance }}</view>
		<view class="cztx">
			<view class="cz" @click="toUrl('recharge')">
				<image src="../../static/mine/chongzhi.png" mode=""></image>
				<text class="pricolor">{{ $t('my.mine2') }}</text>
			</view>
			<view class="tx" @click="toUrl('withdrawal')">
				<image src="../../static/mine/tixian.png" mode=""></image>
				<text class="pricolor">{{ $t('my.mine3') }}</text>
			</view>
		</view>
		
		<view class="czinfo">
			<!-- <view style="margin: 158rpx 0 0 28rpx;">
				<view>
					<view>{{ $t('my.mine4') }}：</view>
					<view>{{ mydata.recharge_num }}</view>
				</view>
				<view style="margin-top: 25rpx;">
					<view>{{ $t('my.mine5') }}：</view>
					<view>{{ mydata.deposit_num }}</view>
				</view>
				<view class="info">{{ $t('my.mine6') }}</view>
			</view> -->
		</view>
		
		<view class="serve">
			<view class="title">{{ $t('my.mine7') }}</view>
			<view class="list">
				<view class="item" v-for="(item,index) in iconlist" @click="toUrl(item.url)">
					<image :src="item.icon" mode=""></image>
					<view class="title pricolor">{{ item.title }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import titleCom from "../component/titleCom.vue"
	export default {
		data() {
			return {
				mydata: {}
			}
		},
		computed:{
			iconlist(){
				return [
					{
						"icon": "../../static/index/tuandui.png",
						"title": this.$t('my.mine8'),
						"url": "team"
					},
					{
						"icon": "../../static/index/chongzhi.png",
						"title": this.$t('my.mine9'),
						"url": "detail"
					},
					{
						"icon": "../../static/index/dingdan.png",
						"title": this.$t("my.mine15"),
						"url": "order"
					},
					{
						"icon": "../../static/index/fengx.png",
						"title": this.$t('my.mine10'),
						"url": "share"
					},
					{
						"icon": "../../static/mine/message.png",
						"title": this.$t('my.mine11'),
						"url": "message"
					},
					{
						"icon": "../../static/mine/down.png",
						"title": this.$t('my.mine12'),
						"url": "down"
					},
					{
						"icon": "../../static/mine/setting.png",
						"title": this.$t('my.mine13'),
						"url": "setting"
					},
					{
						"icon": "../../static/index/tuichu.png",
						"title": this.$t('my.mine14'),
						"url": "out"
					}
				]
			}
		},
		components:{
			titleCom
		},
		onLoad() {
			this.getData()
		},
		methods: {
			toUrl(url) {
				switch (url){
					case 'recharge':
						uni.navigateTo({
							url: '../member/recharge'
						})
						break;
					case 'withdrawal':
						uni.navigateTo({
							url: '../member/withdrawal'
						})
						break;
					case 'team':
						uni.switchTab({
							url: './../activity/Invite'
						})
						break;
					case 'setting':
						uni.navigateTo({
							url: '../member/setting'
						})
						break;
					case 'detail':
						uni.navigateTo({
							url: './detail'
						})
						break;
					case 'order':
						uni.navigateTo({
							url: './order'
						})
						break;	
					case 'share':
						uni.navigateTo({
							url: './share'
						})
						break;
					case 'message':
						uni.navigateTo({
							url: './message'
						})
						break;
					case 'out':
						uni.showActionSheet({
							itemList: [this.$t('sys.out')],
							success: function (res) {
								if((res.tapIndex + 1)==1){
									uni.removeStorage({
										key:'token',
										success() {
											uni.navigateTo({
												url: '../member/login'
											})
										}
									})
								}
							},
							fail: function (res) {
								console.log(res.errMsg);
							}
						})
						break;
					case 'down':
						location.href = http_download
						break;
					default:
						break;
				}
				
			},
			getData(){
				this.$api.mine({
					
				}).then(res=>{
					if(res.code==200){
						this.mydata = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		padding: 0;
		.head{
			// background-color: $uni-color-primary;
			background-image: url(../../static/bgimg.png);
			background-repeat: no-repeat;
			background-size: 100% 404rpx;
			height: 404rpx;
			padding: 28rpx 28rpx;
		}
		.micon{
			width: 198rpx;
			height: 198rpx;
			background-color: #EFCEBC;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: -240rpx auto 0;
			image{
				width: 117rpx;
				height: 117rpx;
			}
		}
		.zmoney{
			font-weight: bold;
			color: $uni-color-primary;
			text-align: center;
			margin-top: 23rpx;
		}
		.cztx{
			padding: 0 163rpx;
			display: flex;
			justify-content: space-between;
			margin-top: 46rpx;
			.cz{
				display: flex;
				align-items: center;
				image{
					width: 43rpx;
					height: 50rpx;
				}
				text{
					font-weight: bold;
					margin-left: 16rpx;
				}
			}
			.tx{
				display: flex;
				align-items: center;
				image{
					width: 44rpx;
					height: 51rpx;
				}
				text{
					font-weight: bold;
					margin-left: 18rpx;
				}
			}
		}
		.czinfo{
			background-image: url(../../static/mine/czimg.png);
			background-size: 575rpx 456rpx;
			background-position: top right 18rpx;
			//width: 100%;
			height: 456rpx;
			background-repeat: no-repeat;
			margin-top: 26rpx;
			overflow: hidden;
			// padding: 128rpx 28rpx 0px 40px;
			.info{
				margin-top: 25rpx;
				font-weight: 500;
			}
		}
		.serve{
			padding: 0 28rpx;
			margin-top: 74rpx;
			.title{
				font-weight: bold;
			}
			.list{
				display: flex;
				width: 694rpx;
				flex-wrap: wrap;
				margin: 49rpx auto 35rpx;
				.item{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 33.3%;
					&:nth-child(n+4){
						margin-top: 26rpx;
					}
					image{
						width: 123rpx;
						height: 123rpx;
					}
					.title{
						font-size: 32rpx;
						font-weight: 500;
						width: 160rpx;
						text-align: center;
						margin-top: 18rpx;
					}
				}
			}
		}
	}	
</style>
