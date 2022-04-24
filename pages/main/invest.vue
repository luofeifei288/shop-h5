<template>
	<view class="container">
		<view class="banner">
			<title-com style="background-color: #D66A28;"></title-com>
			<uni-swiper-dot class="uni-swiper-dot-box" @clickItem="clickItem()" :info="banner" :current="current" :mode="mode"
				:dots-styles="dotsStyles" field="content">
				<swiper class="swiper-box" autoplay @change="change" :current="swiperDotIndex">
					<swiper-item v-for="(item, index) in banner" :key="index" @click="tolink(item.url)">
						<view class="swiper-item" :class="'swiper-item' + index">
							<image :src="static_url+item.img" mode="scaleToFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			
			<view class="ilist">
				<view class="ititle">
					<text>{{ $t('invest.invest1') }}</text>
					<view class="line"></view>
				</view>
				<view class="investbox">
					<view class="iitem" v-for="(item,index) in shoplist" :key="index">
						<image class="img" :src="static_url+item.cate_pic" style="background-color: #F3F3F3;"></image>
						<view class="info">
							<view class="intro">
								<view class="name">{{ item.name }}</view>
								<view style="display: flex;justify-content: space-around;">
									<view class="time">{{ $t('invest.invest2') }}：{{ item.cycle }}{{ $t('sys.day') }}</view>
									<button type="default" @click="open(item.id)">{{ $t('invest.invest4') }}</button>
								</view>
								<view class="money">{{ $t('invest.invest3') }}：{{ item.min_price }}-{{ item.max_price }}</view>
							</view>
							
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="center" :is-mask-click='false'>
			<view class="ipop">
				<view class="top" style="display: flex;align-items: center;">
					<view class="" style="width: 266rpx;height: 182rpx;background-color: #F3F3F3;border-radius: 18rpx;">
						<image style="width: 266rpx;height: 182rpx;border-radius: 18rpx;" :src="static_url+shopinfo.goods_pic" mode=""></image>
					</view>
					<view class="bankinfo" style="font-size: 28rpx;color: #57585B;margin-left: 32rpx;">
						<view class="">{{ $t('invest.invest5') }}：{{ suffix }}</view>
						<view class="" style="margin-top: 21rpx;">{{ $t('invest.invest6') }}：{{ shopinfo.d_amount }}</view>
						<view class="" style="margin-top: 21rpx;">{{ $t('invest.invest7') }}：{{ shopinfo.d_fenqi }}</view>
					</view>
				</view>
				<view class="shopline"></view>
				<view class="bot">
					<view class="bleft" style="font-size: 28rpx;color: #57585B;">
						<view class="mt21">{{ $t('invest.invest8') }}：{{ yongjin }}</view>
						<view class="mt21">{{ $t('invest.invest9') }}：{{ shopinfo.cycle }}</view>
						<view class="mt21" style="display: flex;align-items: center;"><text>{{ $t('invest.invest10') }}：</text><uni-number-box v-model="vModelValue" :step="step" :max='max' :min="min_amount"></uni-number-box></view>
						<view class="mt21">{{ $t('invest.invest11') }}：{{ shopinfo.lasttime }}</view>
					</view>
					<view class="bright">
						<button type="default" @click="overOrder">{{ $t('invest.invest12') }}</button>
					</view>
				</view>
			</view>
			<image src="../../static/clone.png" style="width: 81rpx;height: 81rpx;margin-top: 30rpx;margin-left: 45%;margin-right: 45%;" @click="close"></image>
		</uni-popup>
		<!-- <uni-load-more :status="status" /> -->
	</view>
</template>

<script>
	import titleCom from '../component/titleCom.vue'
	export default {
		components:{
			titleCom
		},
		data() {
			return {
				shoplist: [],
				banner:[],
				shopinfo:{},
				max: 0,
				orderid: 0,
				suffix: '',
				current: 0,
				mode: 'indexes',
				// status: 'more',
				dotsStyles: {
					backgroundColor: '#E8E8E8',
					border: '2rpx #E8E8E8 solid',
					color: '#A4A4A4',
					selectedBackgroundColor: '#D66A28',
					selectedBorder: '2rpx #D66A28 solid'
				},
				swiperDotIndex: 0,
				vModelValue:0,
				step:1,
				min_amount:0,
				static_url:static_url,
				shopid: ''
			};
		},
		computed:{
			yongjin(){
				//佣金=还款金额 X 返佣比例 X 还款周期
				return this.vModelValue*this.shopinfo.d_yongjin*this.shopinfo.cycle
			}
		},
		onLoad() {
			this.getData()
		},
		// onReachBottom() {
			
		// },
		methods:{
			change(e) {
				this.current = e.detail.current;
			},
			clickItem(e) {
				this.swiperDotIndex = e
			},
			tolink(url){
				location.href = url
			},
			open(id) {
				this.$api.getshop({
					cid: id
				}).then(res=>{
					if(res.code == 200){
						this.$refs.popup.open('center')
						this.shopinfo=res.data
						this.vModelValue = res.data.d_min_amouny
						this.min_amount = res.data.d_min_amouny
						this.step = res.data.d_muliple
						this.suffix = res.data.suffix
						this.orderid = id
						this.shopid = res.data.id
						this.max = Number(res.data.d_max_amouny)
					}
				})
			},
			close() {
				this.$refs.popup.close()
			},
			// 商品
			getData() {
				this.$api.shoplist({
					
				}).then(res=>{
					if(res.code == 200){
						this.shoplist = res.data.list
						this.banner = res.data.banner
					}
				})
			},
			// 完成订单
			overOrder(){
				uni.showLoading({
					title:''
				})
				let _this = this
				setTimeout(function(){
					uni.hideLoading()
					_this.$api.overorder({
						suffix: _this.suffix,
						id: _this.shopid,
						amount: _this.vModelValue
					}).then(res=>{
						uni.showToast({
							title: res.msg,
							icon:'none'
						})
						if(res.code==200){
							_this.$refs.popup.close()
						}
					})
				},1000)	
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background: #F0F3F7;
	}
	.ipop{
		background-color: #FFFFFF;
		padding: 30rpx 25rpx;
		box-shadow: 0px 2rpx 5rpx rgba(0, 0, 0, 0.16);
		border-radius: 18rpx;
		.shopline{
			height: 2rpx;
			opacity: 0.26;
			margin-top: 40rpx;
			width: 640rpx;
		}
		.bot{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.bright button{
				background-color: #D46927;
				border-radius: 47rpx;
				color: #FFFFFF;
				font-size: 28rpx;
			}
		}
	}
	.container{
		padding: 0;
		margin: 0;
	}
	.banner{
		background-image: url(../../static/bgimg.png);
		background-repeat: no-repeat;
		background-size: 100% 404rpx;
		width: 100%;
		height: 404rpx;
	}
	
	.uni-bg-red {
		background-color: #ff5a5f;
	}

	.uni-bg-green {
		background-color: #09bb07;
	}

	.uni-bg-blue {
		background-color: #007aff;
	}
	.swiper-box{
		margin: 142rpx auto 0;
		width: 694rpx;
		height: 328rpx;
	}
	.swiper-item{
		text-align: center;
	}
	.swiper-item image{
		width: 694rpx;
		height: 328rpx;
		box-shadow: 0rpx 2rpx 5rpx rgba(0, 0, 0, 0.16);
		border-radius: 28rpx;
	}
	/deep/ .uni-swiper__dots-box{
		right: 26rpx;
		left: 577rpx;
	}
	// /deep/ .uni-swiper__dots-indexes-text{
	// 	color: #A4A4A4;
	// }
	.ilist{
		margin: 35rpx 28rpx 160rpx;
		.investbox::-webkit-scrollbar{
			display: none;
		}
		.ititle{
			display: flex;
			align-items: center;
			text{
				font-weight: bold;
				display: block;
				width: 168rpx;
			}
			.line{
				width: 100%;
				background-color: rgba(#707070,0.11);
				height: 2rpx;
				margin-left: 32rpx;
			}
		}
		.ilist{
			background-color: #F0F3F7;
		}
		.iitem{
			display: flex;
			border-radius: 18rpx;
			padding: 23rpx 16rpx 21rpx 0;
			background-color: #FFFFFF;
			align-items: center;
			margin-top: 18rpx;
			&:nth-child(2n){
				background-color: #F8FDFB;
			}
			.img{
				min-width: 182rpx;
				max-width: 18rpx;
				height: 180rpx;
			}
			.info{
				margin-left: 37rpx;
				align-items: center;
				display: flex;
				justify-content: space-between;
				width: 100%;
				button{
					width: 182rpx;
					height: 65rpx;
					line-height: 65rpx;
				}
				.intro{
					width: 100%;
					.name{
						color: #D46927;
						font-weight: bold;
						font-size: 28rpx;
					}
					.time{
						font-size: 25rpx;
						color: #57585B;
						margin-top: 28rpx;
					}
					.money{
						color: #57585B;
						font-size: 25rpx;
						margin-top: 9rpx;
					}
				}
				button{
					background-color: #D46927;
					border-radius: 47rpx;
					color: #FFFFFF;
					font-size: 28rpx;
					margin-bottom: 10px;
					margin-right: 10px;
				}
			}
		}
	}
	.mt21{
		margin-top: 21rpx;
	}
</style>
