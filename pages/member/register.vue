<template>
	<view>
		<!-- <title-com></title-com> -->
		<view class="logo">
			<image src="../../static/logo.png" mode=""></image>
		</view>
		
		<view class="box">
			<view class="name">
				<view class="txt">{{$t("register.register1")}}:</view>
				<view class="nameinp" style="display: flex;">
					<el-select v-model="area_code" value_key="label" :area="area_code" :options="options"></el-select>
					<input type="number" maxlength="11" :placeholder="$t('register.register2')" v-model="phone" value="" style="width: 66%;"/>
				</view>	
			</view>
			
			<view class="name possword">
				<view class="txt">{{$t("register.register3")}}:</view>
				<view class="nameinp" style="display: flex;align-items: center;justify-content: space-between;padding-right: 11rpx;">
					<input type="text" maxlength="5" :placeholder="$t('register.register4')" v-model="yzm" value="" />
					<text class="codeyz" @click="sendsms" v-if="show">{{ rtime }}</text>
					<text class="codeyz1" v-else>{{ count }}s</text>
				</view>	
			</view>
			
			<view class="name possword">
				<view class="txt">{{$t("register.register6")}}:</view>
				<view class="nameinp">
					<input type="text" password maxlength="16" :placeholder="$t('register.register7')" v-model="password" value="" />
				</view>	
			</view>
			
			<view class="name possword">
				<view class="txt">{{$t("register.register8")}}:</view>
				<view class="nameinp">
					<input type="text" password maxlength="16" :placeholder="$t('register.register9')" v-model="password2" value="" />
				</view>	
			</view>
			
			<view class="name">
				<view class="txt">{{$t("register.register10")}}:</view>
				<view class="nameinp">
					<input type="text" maxlength="6" :placeholder="$t('register.register11')" v-model="vercode" value="" />
				</view>	
			</view>
			<view class="gologin" @click="toUrl">{{$t("register.register12")}}</view>
			
			<view class="btn">
				<button type="primary" @click="register">{{$t("register.register13")}}</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import titleCom from '@/pages/component/titleCom.vue'
	import elSelect from '@/components/ep-select/ep-select.vue'
	export default {
		components:{
			titleCom,elSelect
		},
		data() {
			return {
				phone: '',
				password: '',
				password2: '',
				yzm: '',
				vercode: '',
				area_code: '54',
				options:[
				    {value:"1",label:"54"}
				],
				show: true,
				count: '',
				timer: null
			};
		},
		computed:{
			rtime:{
				get:function(){
					return this.$t("register.register5")
				},
				set:function(v){
					
				}
			}
		},
		onLoad(i) {
			if(i.code){
				this.vercode = i.code
			}
			
		},
		methods: {
			switch1Change: function(e){
				
			},
			toUrl(){
				uni.navigateTo({
					url: './login'
				});
			},
			// 发送验证码
			sendsms(){
				this.$api.sendsms({
					area_code: this.area_code,
					tel: this.phone,
					type: 1
				}).then(res=>{
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					if(res.code == 200){
						const TIME_COUNT = 60;
						if (!this.timer) {
							this.count = TIME_COUNT;
							this.show = false;
							this.timer = setInterval(() => {
								if (this.count > 0 && this.count <= TIME_COUNT) {
									this.count--;
								} else {
									this.show = true;
									clearInterval(this.timer);
									this.timer = null;
								}
							}, 1000)
						}
					}else{
						
					}
				})
			},
			// 注册
			register() {
				let params = {
					area_code: this.area_code,
					tel: this.phone,
					pwd: this.password,
					confirm_pwd: this.password2,
					smscode: this.yzm,
					vercode: this.vercode
				}
				this.$api.register(params).then(res=>{
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
					if(res.code == 200){
						uni.navigateTo({
							url: "./login"
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #e8eee4;
	}
	.logo{
		display: flex;
		image{
			width: 210rpx;
			height: 182rpx;
			margin: 102rpx auto 133rpx;
		}
	}
	
	.box{
		margin: 0 78rpx;
	}
	.name{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 37rpx;
		padding-bottom: 37rpx;
		border-bottom: 2rpx solid rgba($color: #707070, $alpha: 0.22);
		&:nth-child(5){
			margin-bottom: 0!important;
		}
		.txt{
			font-size: 26rpx;
			font-weight: bold;
			min-width: 126rpx;
			max-width: 126rpx;
			word-break: break-all;
			color: $uni-color-primary;
		}
		.nameinp{
			width: 438rpx;
			height: 78rpx;
			box-shadow: 0px 2rpx 6rpx rgba(0, 0, 0, 0.16);
			border-radius: 20rpx;
			margin-left: 44rpx;
			input{
				height: 78rpx;
				width: 80%;
				text-indent: 21rpx;
			}
			.codeyz{
				color: #FFFFFF;
				font-size: 25rpx;
				background-color: #D66A28;
				border-radius: 18rpx;
				height: 54rpx;
				width: 116rpx;
				text-align: center;
				line-height: 54rpx;
			}
			.codeyz1{
				color: #FFFFFF;
				font-size: 25rpx;
				background-color: #C0C0C0;
				border-radius: 18rpx;
				height: 54rpx;
				width: 116rpx;
				text-align: center;
				line-height: 54rpx;
			}
		}
	}
	.gologin{
		font-size: 25rpx;
		color: $uni-color-primary;
		text-align: right;
		font-weight: bold;
		margin-top: 26rpx;
		text-decoration: underline;
	}
	.possword{
		margin-top: 67rpx;
	}
	.switch{
		display: flex;
		align-items: center;
		font-size: 28rpx;
		font-weight: bold;
	}
	.setpoword{
		font-size: 28rpx;
		font-weight: bold;
	}
	.btn button{
		width: 440rpx;
		height: 86rpx;
		font-weight: bold;
		margin-top: 95rpx;
		background-color: #D66A28;
		border-radius: 20rpx;
		font-size: 28rpx;
		line-height: 86rpx;
	}
	.ep-picker-box{
		min-width: 110rpx;
		margin-left: 10rpx;
		background-color: transparent;
	}
	/deep/ .ep-input-box{
		border: none;
	}
	/deep/ .ep-input-box .label-item{
		min-height: 80rpx;
	}
</style>
