<template>
	<view class="container">
		<title-com></title-com>
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
		<!-- <banner-com :data="datainfo"></banner-com> -->
		<!-- 广告 -->
		<view class="ad">
			<image src="../../static/index/adicon.png" mode=""></image>
			<uni-notice-bar class="con" :single="true" :speed="20" scrollable background-color="EFCEBC" color="#000000"
				:text="message">
			</uni-notice-bar>
			<view class="more" @click="toUrl('message')">
				<image src="../../static/index/more.png" mode=""></image>
			</view>
		</view>
		
		<!-- <bull-com :sendVal='newsList'></bull-com> -->

		<view class="list">
			<view class="item" v-for="(item,index) in iconlist" :key="index" @click="toUrl(item.url)">
				<image :src="item.icon" mode=""></image>
				<view class="title pricolor">{{ item.title }}</view>
			</view>
		</view>

		<view class="join">
			<view class="title">{{ $t("index.jrwm") }}</view>
			<view class="info">
				{{ $t("index.jrwm1") }}
			</view>
			<image src="../../static/index/joinme.png" mode=""></image>
			<view class="btn" @click="toUrl('startast')">{{ $t("index.jrwm2") }}</view>
		</view>

		<view class="stat">
			<view class="title">
				{{ $t("index.pttj") }}
			</view>
			<view class="list_s">
				<view class="item">
					<image src="../../static/index/tj1.png" mode=""></image>
					<view class="pricolor" style="margin-top: 14rpx;">{{ $t("index.pttj1") }}</view>
					<view style="margin-top: 14rpx;">{{ datainfo.profit }}</view>
				</view>
				<view class="item">
					<image src="../../static/index/tj2.png" mode=""></image>
					<view class="pricolor" style="margin-top: 14rpx;">{{ $t("index.pttj2") }}</view>
					<view style="margin-top: 14rpx;">{{ datainfo.count_user }}</view>
				</view>
			</view>
		</view>

		<view class="join" style="margin-top: 35rpx;">
			<view class="title"><router-link class="btn1" :to="'./intro?type=jianjie'">{{ $t("index.gywm") }}</router-link></view>
			<view class="info">
				{{ $t("index.gywm1") }}&nbsp;&nbsp;&nbsp;{{ $t("index.gywm2") }}&nbsp;&nbsp;&nbsp;{{ $t("index.gywm3") }}
			</view>
			<image src="../../static/index/joinme.png" mode=""></image>
		</view>

		<view class="team" style="margin-top: 35rpx;">
			<view class="title">
				{{ $t("index.hzhb") }}
			</view>
			<view class="tlist">
				<view class="titem" v-for="(item,index) in datainfo.cooperate" :key="index" @click="tolink(item.url)">
					<image :src="static_url+item.img" mode=""></image>
				</view>
			</view>
		</view>
		<popup type="3" :content="pupinfo.content" @close="closeMask()" v-if="pupinfo.isMask"></popup>
	</view>
</template>

<script>
	import titleCom from "../component/titleCom.vue"
	import bannerCom from "../component/bannerCom.vue"
	import popup from "../../components/ge-popup_1/components/ge-popup.vue"
	export default {
		data() {
			return {
				datainfo: {},
				message: '',
				systemLocale: '',
				applicationLocale: '',
				static_url: static_url,
				
				pupinfo:{
					isMask:true,//是否显示弹窗
					index:1,//显示第几个弹窗
					money:99.99,//红包金额
					title:'',
					content:'',
					version:'1.0',
					desc:''
				},
				dotsStyles: {
					backgroundColor: '#E8E8E8',
					border: '2rpx #E8E8E8 solid',
					color: '#A4A4A4',
					selectedBackgroundColor: '#D66A28',
					selectedBorder: '2rpx #D66A28 solid'
				},
				banner:[],
				current: 0,
				mode: 'indexes',
				swiperDotIndex: 0
			}
		},
		components: {
			titleCom,
			bannerCom,
			popup
		},
		computed: {
			iconlist(){
				return [
					{
						"icon": "../../static/index/jianjie.png",
						"title": this.$t("index.chongzhi"),
						"url": "jianjie"
					},
					{
						"icon": "../../static/index/renzhen.png",
						"title": this.$t("index.tixian"),
						"url": "renzhen"
					},
					{
						"icon": "../../static/index/fengx.png",
						"title": this.$t("index.fenxiang"),
						"url": "share"
					},
					{
						"icon": "../../static/index/kefu.png",
						"title": this.$t("index.kefu"),
						"url": "kefu"
					},
					// {
					// 	"icon": "../../static/index/tuandui.png",
					// 	"title": this.$t("index.tuandui"),
					// 	"url": "team"
					// },
					// {
					// 	"icon": "../../static/index/dingdan.png",
					// 	"title": this.$t("index.dingdan"),
					// 	"url": "order"
					// },
					// {
					// 	"icon": "../../static/index/tuichu.png",
					// 	"title": this.$t("index.tuichu"),
					// 	"url": "out"
					// },
				]
			}
		},
		onShow() {
			this.getData()
		},
		onLoad() {
			console.log("index-onLoad")
		},
		methods: {
			closeMask() {
				this.pupinfo.isMask=false;
			},
			clickItem(e) {
				this.swiperDotIndex = e
			},
			change(e) {
				this.current = e.detail.current;
			},
			// 获取客服地址
			getkefu() {
				this.$api.kefu({}).then(res => {
					if (res.code == 200) {
						location.href=res.data.url
					}
				})
			},
			toUrl(url) {
				switch (url) {
					case 'team':
						uni.navigateTo({
							url: './team'
						})
						break;
					case 'order':
						uni.switchTab({
							url: './order'
						})
						break;
					case 'jianjie':
						uni.navigateTo({
							url: './intro?type='+url
						})
						break;
					case 'renzhen':
						uni.navigateTo({
							url: '../member/certification'
						})
						break;
					case 'share':
						uni.navigateTo({
							url: './share'
						})
						break;
					case 'kefu':
						this.getkefu()
						break;
					case 'message':
						uni.navigateTo({
							url: './message'
						})
						break;
					case 'out':
						uni.showActionSheet({
							itemList: [this.$t("sys.out")],
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
					case 'startast':
						uni.switchTab({
							url: './invest'
						})
						break;
					default:
						break;
				}

			},
			tolink(url){
				location.href = url
			},
			// 首页
			getData() {
				this.$api.home({
					
				}).then(res=>{
					if(res.code==200){
						this.datainfo = res.data
						this.message = res.data.bulletin[0]
						this.pupinfo.content = res.message??''
						this.banner = res.data.banner
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ad {
		display: flex;
		align-items: center;
		border-radius: 61rpx;
		padding: 26rpx 46rpx;
		background-color: #EFCEBC;
		position: relative;
		margin-top: 35rpx;
		image {
			width: 32rpx;
			height: 31rpx;
		}
		.uni-noticebar {
			padding: 0;
			margin: 0;
		}

		.con {
			font-size: 32rpx;
			font-weight: 500;
			margin-left: 28rpx;
		}

		.more {
			background-color: #CE611E;
			position: absolute;
			right: 0;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			width: 95rpx;
			border-top-right-radius: 61rpx;
			border-bottom-right-radius: 61rpx;

			image {
				width: 36rpx;
				height: 38rpx;
			}
		}
	}

	.list {
		display: flex;
		// width: 100%;
		flex-wrap: wrap;
		margin: 49rpx auto 35rpx;
		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 33.3%;

			&:nth-child(n+4) {
				margin-top: 35rpx;
			}

			image {
				width: 123rpx;
				height: 123rpx;
			}

			.title {
				font-size: 32rpx;
				font-weight: 500;
				text-align: center;
				margin-top: 18rpx;
			}
		}
	}

	.join {
		text-align: center;
		box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.13);
		padding: 47rpx 68rpx;

		.title {
			font-weight: bold;
			font-size: 32rpx;
		}

		.info {
			font-size: 25rpx;
			margin-top: 21rpx;
			// text-align: left;
		}

		image {
			width: 368rpx;
			height: 291rpx;
			margin-top: 39rpx;
		}

		.btn {
			width: 307rpx;
			height: 61rpx;
			background: linear-gradient(90deg, #512601 0%, #844110 100%);
			opacity: 1;
			border-radius: 35rpx;
			color: #FFFFFF;
			font-size: 25rpx;
			line-height: 61rpx;
			font-weight: 500;
			margin: 14rpx auto 0;
		}
		.btn1{
			display: inline-block;
			width: 307rpx;
			height: 61rpx;
			background: linear-gradient(90deg, #512601 0%, #844110 100%);
			opacity: 1;
			border-radius: 35rpx;	
			font-size: 25rpx;
			line-height: 61rpx;
			font-weight: 500;
			margin: 14rpx auto 0;
			color: #FFFFFF;
			text-decoration: none;
		}
	}

	.stat {
		margin-top: 35rpx;

		.title {
			font-size: 32rpx;
			font-weight: 800;
			text-align: center;
		}

		.list_s {
			display: flex;
			justify-content: space-between;
			margin-top: 95rpx;

			.item {
				text-align: center;
				font-size: 32rpx;
				padding-bottom: 35rpx;

				image {
					width: 131rpx;
					height: 131rpx;
					margin-top: -65rpx;
				}

				width: 336rpx;
				box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.13);
			}
		}
	}

	.team {
		padding: 47rpx 12rpx;
		box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.13);

		.title {
			font-size: 32rpx;
			font-weight: 800;
			text-align: center;
		}

		.tlist {
			display: flex;
			flex-wrap: wrap;
			// justify-content: flex-start;
			margin-top: 44rpx;
			.titem {
				width: 198rpx;
				height: 95rpx;
				background: #E1E1E1;
				margin:12rpx;
				image{
					width: 202rpx;
					height: 95rpx;
				}
			}
		}
	}
	.swiper-box{
		margin: 122rpx auto 0;
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
</style>
