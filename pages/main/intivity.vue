<template>
	<view class="box" style="margin-bottom: 50rpx;">
		<title-com style="background-color: #D66A28;"></title-com>
		<view class="header" style="margin-top: 112rpx;">
			<view class="val">
				<view class="val1">{{ intivitydata.sign_amount }}</view>
				<view class="val2">{{ $t('intivity.amount') }}：（ARS）</view>
			</view>
		</view>
		<view id="chevron">
			<button type="default" @click="goSign()">{{ $t('intivity.tsign') }}</button>
			<view class="signin">
				<view class="title">{{ $t('intivity.lianxu') }} {{ intivitydata.sign_count }} {{ $t('sys.day') }}</view>
				<view class="signlist">
					<block v-for="(item,index) in intivitydata.sign">
						
						<view class="signitem" v-if="!item.status">
							<view class="day">
								{{item.sign}}D
							</view>
						</view>
						<view class="signitem1" v-else-if="item.status">
							<view class="exp">
								+{{ item.num }}
							</view>
							<view class="day">
								{{item.sign}}D
							</view>
						</view>
						<!-- <view class="signitem2" v-else>
							<image src="../../static/lastdaybg.png" mode=""></image>
							<view class="day">
								{{item.sign}}D
							</view>
						</view> -->
					</block>
					
				</view>
			</view>
		</view>

		<!-- 充值活动 -->
		<view class="rintivity">
			<view class="title">
				<text>{{ $t('intivity.recharge') }}</text>
				<view class="gz" @click="openPop('cz')">{{ $t('intivity.rule') }}</view>
			</view>
			<view class="rlist">
				<view class="ritem" v-for="(item,index) in intivitydata.recharge">
					<view class="left">
						<image src="../../static/headimg.png" mode=""></image>
						<view class="val">
							<view class="nub">{{ $t('intivity.chongzhi') }}{{ item.r_num }}</view>
							<view class="num2">
								<text class="t1"></text>
								<text class="t2">+{{ item.num }}</text>
							</view>
						</view>
					</view>
					<view class="right">
						<text :class="!item.status?'btn':'btn1'" @click="item.status?testRecharge():''">
							{{ !item.status?$t('intivity.received'):$t('intivity.receive') }}
						</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 热门活动 -->
		<view class="rintivity" style="margin-top: 18rpx;">
			<view class="title">
				<text>{{ $t('intivity.hotintivity') }}</text>
				<view class="gz" @click="openPop('yq')">{{ $t('intivity.rule') }}</view>
			</view>
			<view class="rlist">
				<view class="ritem" v-for="(item,index) in intivitydata.invate">
					<view class="left">
						<image src="../../static/headimg.png" mode=""></image>
						<view class="val">
							<view class="nub">{{ $t('intivity.yaoqing') }} {{ item.i_num }} {{ $t('sys.man') }}</view>
							<view class="num2">
								<text class="t1"></text>
								<text class="t2">+{{ item.num }}</text>
							</view>
						</view>
					</view>
					<view class="right">
						<text :class="!item.status?'btn':'btn1'" @click="item.status?goinvate(item.id):''">
							{{ !item.status?$t('intivity.received'):$t('intivity.receive') }}
						</text>
					</view>
				</view>
			</view>
		</view>
		<view class="adrift">
			<image src="../../static/lastdaybg.png" mode=""></image>
		</view>
		<popup type="6" :title="pupinfo.title" :content="pupinfo.content" @close="closeMask()" v-if="pupinfo.isMask"></popup>
	</view>
</template>

<script>
	import titleCom from '../component/titleCom.vue'
	import popup from "../../components/ge-popup_1/components/ge-popup.vue"
	export default {
		components:{
			titleCom,popup
		},
		data() {
			return {
				intivitydata: {},
				pupinfo:{
					isMask:false,//是否显示弹窗
					index:1,//显示第几个弹窗
					money:99.99,//红包金额
					title:'',
					content:'',
					version:'1.0',
					desc:'',
					title: ''
				},
			}
		},
		computed:{
			
		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#D46927'
			})
		},
		onShow() {
			this.getData()
		},
		// 方法集合
		methods:{
			// 签到页面
			getData(){
				this.$api.activeIndex({
					
				}).then(res=>{
					this.intivitydata = res.data
				})
			},
			// 点击签到
			goSign(){
				this.$api.gosign({}).then(res=>{
					uni.showToast({
						title:res.msg,
						icon:'none'
					})
					if(res.code==200){
						this.getData()
					}
				})
			},
			// 领取充值
			testRecharge(id){
				uni.navigateTo({
					url:'../member/recharge'
				})
				// this.$api.testRecharge({
				// 	id: id
				// }).then(res=>{
				// 	if(res.code==200){
				// 		this.getData()
				// 	}
				// })
			},
			// 领取邀请
			goinvate(id){
				this.$api.goinvate({
					id:id
				}).then(res=>{
					if(res.code==200){
						this.getData()
					}
				})
			},
			// 打开窗口
			openPop(t){
				this.pupinfo.isMask=true;
				if(t=='cz'){
					this.pupinfo.content = this.intivitydata.recharge_rule??''
				}else if(t=='yq'){
					this.pupinfo.content = this.intivitydata.invate_rule??''
				}
				
			},
			// 规则弹框
			closeMask(){
				this.pupinfo.isMask=false;
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F0F3F7;
	}
	.adrift{
		image{
			width: 107rpx;
			height: 107rpx;
			position: fixed;
			right: 46rpx;
			top: 550rpx;
			z-index: 10;
		}	
	}

	.rintivity {
		background-color: #FFFFFF;
		border-radius: 18rpx;
		margin: 124rpx auto 0;
		padding: 40rpx;
		width: 609rpx;

		.title {
			font-weight: bold;
			font-size: 25rpx;
			text-align: center;
			position: relative;
			padding-bottom: 25rpx;
			border-bottom: 2rpx solid rgba(112, 112, 112, 0.2);

			.gz {
				padding: 6rpx 18rpx;
				background-color: #D46927;
				font-size: 25rpx;
				position: absolute;
				color: #FFFFFF;
				border-radius: 175rpx;
				right: 0;
				top: -6rpx;
			}
		}

		.rlist {
			// margin-top: 44rpx;
			.ritem {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 40rpx 0;
				border-bottom: 2px solid rgba(112, 112, 112, 0.06);
				&:last-child{
					border: none;
				}
				.left{
					display: flex;
					align-items: center;
					image {
						width: 60rpx;
						height: 60rpx;
						border-radius: 50%;
					}
					.val{
						margin-left: 30rpx;
						.nub{
							font-size: 25rpx;
							font-weight: bold;
						}
						.num2{
							display: flex;
							align-items: center;
							margin-top: 10rpx;
							.t1{
								background-color: rgba(233, 192, 76, 1);
								width: 23rpx;
								height: 23rpx;
								display: inline-block;
								border-radius: 50%;
							}
							.t2{
								color: #D46927;
								font-size: 25rpx;
								margin-left: 12rpx;
								font-weight: bold;
							}
						}
					}
				}
				.right{
					.btn{
						background: #F6F6F6;
						border-radius: 175px;
						color: #D1D1D1;
						font-size: 25rpx;
						padding: 6rpx 20rpx;
					}
					.btn1{
						background: #D46927;
						border-radius: 175px;
						color: #FFFFFF;
						font-size: 25rpx;
						padding: 6rpx 32rpx;
					}
				}
			}
		}
	}

	.header {
		background-image: url(../../static/bgimg.png);
		background-repeat: no-repeat;
		background-size: 100% 324rpx;
		width: 100%;
		height: 324rpx;
		position: relative;
		.val {
			width: 689rpx;
			height: 270rpx;
			border-radius: 18rpx;
			background-color: #FFFFFF;
			text-align: center;
			position: absolute;
			top: 84rpx;
			left: 0rpx;
			right: 0rpx;
			margin: auto;
			z-index: 0;

			.val1 {
				font-size: 63rpx;
				font-weight: 500;
				margin-top: 21rpx;
				overflow: hidden;
			}

			.val2 {
				font-size: 32rpx;
				font-weight: 500;
			}
		}
	}

	#chevron {
		// position: relative;
		// text-align: center;
		// padding: 24rpx;
		// margin-bottom: 12rpx;
		// height: 210rpx;
		// width: 100%;

		background-image: url(../../static/invibg2.png);
		background-repeat: no-repeat;
		background-size: 100% 209rpx;
		width: 100%;
		height: 209rpx;
		position: relative;
		z-index: 2;
		top: -20rpx;

		button {
			width: 415rpx;
			font-weight: bold;
			font-size: 32rpx;
			background: #D46927;
			opacity: 1;
			border-radius: 51rpx;
			color: #FFFFFF;
			padding: 6rpx 0;
			border: none;
			margin-top: 28rpx;
			position: absolute;
			left: 0;
			right: 0;
			top: -26rpx;
			margin: auto;
		}

		.signin {
			background-color: #FFFFFF;
			width: 637rpx;
			border-radius: 18rpx;
			position: absolute;
			top: 86rpx;
			left: 0;
			right: 0;
			margin: auto;
			padding: 30rpx 26rpx 46rpx;

			.title {
				font-size: 32rpx;
				font-weight: bold;
			}

			.signlist {
				margin-top: 21rpx;
				display: flex;

				.signitem {
					background-image: url(../../static/signbg.png);
					background-repeat: no-repeat;
					background-size: 82rpx 107rpx;
					width: 82rpx;
					height: 107rpx;
					border-radius: 7rpx;
					margin-right: 10rpx;
					.day {
						font-size: 25rpx;
						color: #FFFFFF;
						margin-top: 64rpx;
						text-align: center;
					}
				}

				.signitem1 {
					width: 82rpx;
					height: 107rpx;
					background-color: #F6F6F6;
					border-radius: 7rpx;
					text-align: center;
					margin-right: 10rpx;
					&:last-child{
						margin-right: 0;
					}

					.exp {
						background-color: #E8E8E8;
						border-radius: 50%;
						font-size: 14rpx;
						line-height: 44rpx;
						font-weight: bold;
						width: 42rpx;
						height: 44rpx;
						text-align: center;
						margin: 10rpx auto 0;
					}

					.day {
						font-size: 25rpx;
						color: #D1D1D1;
						margin-top: 10rpx;
					}
				}

				.signitem2 {
					// background-image: url(../../static/lastdaybg.png);
					background-color: #F6F6F6;
					background-repeat: no-repeat;
					background-size: 107rpx 107rpx;
					width: 82rpx;
					height: 107rpx;
					border-radius: 7rpx;
					text-align: center;
					position: relative;

					image {
						width: 107rpx;
						height: 107rpx;
						position: absolute;
						left: -12rpx;
						top: -30rpx;
						right: 0;
						margin: auto;
					}

					.day {
						font-size: 25rpx;
						color: #D1D1D1;
						margin-top: 64rpx;
					}
				}
			}
		}
	}

	// #chevron:before {
	//   content: '';
	//   position: absolute;
	//   top: 0;
	//   left: 0;
	//   height: 100%;
	//   width: 47%;
	//   background: #EEB18C;
	//   transform: skew(0deg, 6deg);
	// }
	// #chevron:after {
	//   content: '';
	//   position: absolute;
	//   top: 0;
	//   right: 0;
	//   height: 100%;
	//   width: 53%;
	//   background: #EEB18C;
	//   transform: skew(0deg, -6deg);
	// }
</style>
