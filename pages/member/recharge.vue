<template>
	<view class="container">
		<view class="selchannel">
			<text class="title">{{ $t("recharge.recharge1") }}：</text>
			<view class="selcon">
				<picker style="width: 100%;" 
					:value="index" 
					:range="array" 
					range-key="name"
					@change="bindPickerChange" 
					mode = selector>
					<view class="uni-input">{{name}}</view>
				</picker>
				<image src="../../static/xjt.png" mode=""></image>
			</view>
		</view>
		
		<view class="smoney">
			<view class="">{{ $t("recharge.recharge2") }}：</view>
			<!-- <view class="">{{ money }}</view> -->
			<uni-easyinput type="number" :clearable="false" v-model="money"></uni-easyinput>
		</view>
		
		<view class="rlist">
			<view class="ritem" v-for="(item,index) in moneylist" @click="selmoney(index,item)" :class="index==czmoney?'active':''">{{ item }}</view>
		</view>
		
		<view class="btn">
			<button type="primary" @click="recharge">{{ $t("recharge.recharge3") }}</button>
		</view>
		
		<view class="tips">
			<view class="" style="font-weight: bold;">{{ $t("recharge.recharge4") }}：</view>
			<view class="" style="margin-top: 25rpx;" v-html="message">
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [],
				index: 0,
				moneylist:[],
				czmoney:0,
				money: '',
				name: '',
				cid: '',
				message : ''
			};
		},
		onLoad() {
			this.getList()
		},
		methods:{
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
			selmoney(i,m){
				this.money = m
				this.czmoney = i
			},
			// 获取账号
			getList(){
				this.$api.rechargeList({
					
				}).then(res=>{
					if(res.code==200){
						this.array = res.data
						this.name = res.data[0].name
						this.cid = res.data[0].id
						this.moneylist = res.list				
						this.money = this.moneylist[this.czmoney]
						this.message = res.message
						
						if(!res.bstatus){
							uni.redirectTo({
								url:'./certification'
							})
						}
					}
				})
			},
			// 充值
			recharge(){
				this.$api.goRecharge({
					pid: this.cid,
					amount: this.money
				}).then(res=>{
					if(res.code==200){
						setTimeout(()=>{
							location.href=res.data.url
						},1000)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.selchannel{
	display: flex;
	align-items: center;
	justify-content: space-between;
	.title{
		font-weight: bold;
		width: 188rpx;
		display: block;
		font-size: 32rpx;
	}
}
.selcon{
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0rpx 2rpx 5rpx rgba(0, 0, 0, 0.16);
	border-radius: 18rpx;
	padding: 14rpx 32rpx;
	width: 472rpx;
	image{
		width: 18rpx;
		height: 14rpx;
	}
}
.smoney{
	display: flex;
	align-items: center;
	margin-top: 54rpx;
	font-weight: bold;
}
.rlist{
	display: flex;
	flex-wrap: wrap;
	margin-top: 46rpx;
	justify-content: space-between;
	.ritem{
		border: 2rpx solid rgba(180, 180, 180, 0.2);
		border-radius: 18rpx;
		width: 210rpx;
		height: 82rpx;
		text-align: center;
		line-height: 82rpx;
		&:nth-child(n+4){
			margin-top: 32rpx;
		}		
	}
	.active{
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.16);
		color: #FFFFFF;
		font-weight: bold;
		background-color: $uni-color-primary;
	}
}
.btn button{
	width: 440rpx;
	height: 86rpx;
	font-weight: bold;
	margin-top: 79rpx;
	background-color: #D66A28;
	border-radius: 20rpx;
	font-size: 28rpx;
	line-height: 86rpx;
}
.tips{
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.16);
	padding: 42rpx;
}
</style>
