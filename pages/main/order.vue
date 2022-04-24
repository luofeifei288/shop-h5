<template>
	<view class="container">
		<!-- <title-com v-on:kebab-case="sellag"></title-com> -->
		<!-- <banner-com :data="datainfo"></banner-com> -->
		<image class="bannerimg" :src="static_url+banner.img" mode="" @click="tolink(banner.url)"></image>
		
		<view class="order">
			<view class="order-name pricolor">
				{{ $t('order.ordlist') }}
			</view>
			<view class="order-list">
				<view class="order-item" v-for="(item,index) in orderdata" :key="index">
					<view class="top">
						<view class="img">
							<image :src="static_url+item.goods_pic" mode=""></image>
						</view>
						<view class="shopinfo">
							<view class="name">
								<view class="sname">{{ $t('order.ordlist1') }}:{{ item.order_suffix }}</view>
								<view class="nub">{{ item.status_name }}</view>
							</view>
							<view class="id">{{ $t('order.ordlist1') }}：{{ item.id }}</view>
							<view class="time">{{ $t('order.ordlist2') }}：{{ item.create_time }}</view>
						</view>
					</view>
					<view class="bot">
						<view class="money">
							{{ $t('order.ordlist3') }}：{{ item.num }}
						</view>
						<view class="fh">
							{{ $t('order.ordlist4') }}：{{ item.commission }}
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status" :contentText="contentText"/>
	</view>
</template>

<script>
	import titleCom from "../component/titleCom.vue"
	import bannerCom from "../component/bannerCom.vue"
	export default {
		components: {
			titleCom,
			bannerCom
		},
		computed:{
			contentText() {
				return {
					contentdown: this.$t('team.team8'),
					contentrefresh: this.$t('team.team9'),
					contentnomore: this.$t('team.team10')
				}
			}
		},
		data() {
			return {
				title: this.$t(''),
				orderdata: [],
				datainfo: {},
				status: 'more',
				page: 1,
				size: 10,
				static_url:static_url,
				isrequest: true,
				banner: {}
			}
		},
		onShow() {
			this.page = 1
			this.orderdata = []
			this.getData()
			// this.homeData()
		},
		onLoad() {
			
		},
		//上拉下载
		onReachBottom() {
			this.page++
			this.status = 'loading'
			if(this.isrequest){
				this.getData()
			}else{
				this.status = 'no-more'
			}
		},
		methods: {
			sellag(){
				this.page = 1
				this.orderdata = []
				this.getData()
			},
			tolink(url){
				location.href = url
			},
			getData() {
				this.$api.orderlist({
					page: this.page,
					size: this.size
				}).then(res=>{
					if(res.code == 200){
						this.orderdata = [...this.orderdata,...res.data.data];
						this.banner = res.topimg;
						if(res.data.data.length<this.size){
							this.status = 'no-more'
							this.isrequest = false
						}else{
							this.status = 'more'
						}
					}	
				})
			},
			// 首页
			homeData() {
				var token = ''
				uni.getStorage({
					key: 'token',
					success(res) {
						token = res.data
					}
				})
				this.$api.home({
					Authorization: token
				},{
					Authorization: token
				}).then(res=>{
					if(res.code==200){
						this.datainfo = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bannerimg{
		// margin-top: 112rpx;
		width: 100%;
		height: 314rpx;
		border-radius: 24rpx;
	}
	.order {
		margin-top: 35rpx;

		.order-name {
			font-weight: 800;
			font-size: 32rpx;
		}

		.order-list {
			margin-top: 21rpx;

			.order-item {
				box-shadow: 0rpx 2rpx 5rpx rgba(0, 0, 0, 0.16);
				padding: 28rpx 23rpx 7rpx;

				&:nth-child(n+2) {
					margin-top: 25rpx;
				}

				.top {
					display: flex;
					align-items: center;

					.img image {
						width: 145rpx;
						height: 100rpx;
						border-radius: 18rpx;
					}

					.shopinfo {
						margin-left: 33rpx;
						width: 100%;

						.name {
							display: flex;
							align-items: center;
							justify-content: space-between;

							.sname {
								font-size: 28rpx;
								;
								font-weight: 800;
							}

							.nub {
								font-size: 25rpx;
								color: #666666;
							}
						}

						.id {
							font-size: 25rpx;
							margin-top: 19rpx;
						}

						.time {
							font-size: 25rpx;
							margin-top: 5rpx;
						}
					}
				}

				.bot {
					display: flex;
					margin-top: 18rpx;
					justify-content: space-between;

					.money {
						font-size: 25rpx;
					}

					.fh {
						font-size: 25rpx;
					}
				}
			}
		}
	}
</style>
