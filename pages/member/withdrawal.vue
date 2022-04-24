<template>
	<view class="container">
		<view class="smoney">
			<view class="">{{ $t("withdrawal.withdrawal2") }}：</view>
			<!-- <view class="">{{ money }}</view> -->
			<uni-easyinput type="number" :clearable="false" v-model="money"></uni-easyinput>
		</view>
		
		<view class="selchannel" style="margin-top: 53rpx;">
			<text class="title">{{ $t("withdrawal.withdrawal1") }}：</text>
			<view class="selcon">
				<picker style="width: 100%;" 
					:value="index" 
					:range="array" 
					range-key="bankname" 
					@change="bindPickerChange" 
					mode = selector>
					<view class="uni-input">{{ bankname }}</view>
				</picker>
				<image src="../../static/xjt.png" mode=""></image>
			</view>
		</view>
		
		<view class="rlist">
			<view class="ritem" v-for="(item,index) in moneylist" @click="selmoney(index,item)" :class="index==czmoney?'active':''">{{ item }}</view>
		</view>
		
		<view class="selchannel" style="margin-top: 53rpx;">
			<text class="title">{{ $t("withdrawal.withdrawal3") }}：</text>
			<view class="selcon">
				<input type="text" password maxlength="16" value="" v-model="pwd2" :placeholder="$t('withdrawal.withdrawal4')"/>
			</view>
		</view>
		
		<view class="btn">
			<button type="primary" @click="goDeposit()">{{ $t("withdrawal.withdrawal5") }}</button>
		</view>
		
		<view class="tips">
			<view class="" style="font-weight: bold;">{{ $t("withdrawal.withdrawal6") }}：</view>
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
				moneylist:[100,200,300,400,500,600],
				czmoney:0,
				money: '',
				bankname: '',
				cid: "",
				pwd2: "",
				message: ""
			};
		},
		onLoad() {
			this.getAccount()
		},
		methods:{
			bindPickerChange: function(e) {
				this.index = e.detail.value
				this.cid = this.array[e.detail.value].id
			},
			selmoney(i,m){
				this.money = m
				this.czmoney = i
			},
			// 获取账号
			getAccount(){
				this.money = this.moneylist[this.czmoney]
				this.$api.getAccount({
					
				}).then(res=>{
					if(res.code==200){
						this.array = res.data
						this.bankname = res.data[0].bankname
						this.cid = res.data[0].id
						this.message = res.message
					}
				})
			},
			// 提现
			goDeposit() {
				this.$api.goDeposit({
					amount: this.money,
					bid: this.cid,
					pwd2: this.pwd2
				}).then(res=>{
					uni.showToast({
						title: res.msg,
						icon:'none'
					})
					if(res.code==200){
						
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
		min-width: 164rpx;
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
	// margin-top: 54rpx;
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
