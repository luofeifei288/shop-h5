<template>
	<view>
		<title-com :isshow="false" :bgcolor="bgcolor"></title-com>
		<view class="logo">
			<image src="../../static/logo.png" mode=""></image>
		</view>
		
		<view class="box">
			<view class="name">
				<view class="txt">{{ $t('login.login1') }}:</view>
				<view class="nameinp" style="display: flex;">
					<el-select v-model="area" value_key="label" :area="area" :options="options"></el-select>
					<input type="number" maxlength="11" :placeholder="$t('login.login1_1')" v-model="phone" style="width: 66%;"/>
				</view>	
			</view>
			
			<view class="name possword">
				<view class="txt">{{ $t('login.login2') }}:</view>
				<view class="nameinp">
					<input type="text" password maxlength="16" :placeholder="$t('login.login2_1')" v-model="password" />
				</view>	
			</view>
			
			
			
			<view style="display: flex;align-items: center;justify-content: space-between;margin-top: 30rpx;">
				<view class="switch">
					<switch color="#D66A28" :checked="isRemember" @change="switch1Change" style="transform:scale(0.7)"/>
					<view class="jzmm">{{ $t('login.login3') }}</view>
				</view>
				<view class="setpoword" style="height: 1;" >
					<text @click="toUrl('zc')">{{ $t('login.login4') }}</text>
				</view>
			</view>
			
			<view class="btn">
				<button type="primary" :loading="loading" @click="login">{{ $t('login.login6') }}</button>
			</view>
			
			<view class="findpass">
				<text @click="toUrl('zh')">{{ $t('login.login5') }}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import elSelect from '@/components/ep-select/ep-select.vue'
	import titleCom from '../component/titleCom.vue'
	export default {
		components:{
			elSelect,titleCom
		},
		data() {
			return {
				phone: '',
				password: '',
				isRemember: true,
				loading: false,
				area: '',
				options:[
				    {value:"1",label:"54"}
				],
				bgcolor:{
					'background-color':'#e8eee4'
				}
			};
		},
		onLoad() {
			let _this = this
			uni.getStorage({
				key: 'userinfo',
				success(res) {
					_this.isRemember = true
					_this.phone = res.data.phone
					_this.password = res.data.password
				},
				fail(err){
					this.isRemember = false
				}
			})
			this.area = this.options[0].label
			this.goIndex()
		},
		methods: {
			goIndex(){
				//判断是否存在token
				let _this = this;
				uni.getStorage({
					key:'token',
					success(t) {
						_this.$api.valiToken({
							'token': t.data
						}).then(res=>{
							if(res.data.valid){
								uni.switchTab({
									url: '../main/index'
								})
							}
						})
					}
				})
			},
			// 记住密码
			switch1Change: function(e){
				this.isRemember = e.detail.value
				if(e.detail.value==false){
					uni.removeStorage({
						key: 'userinfo'
					})
				}
			},
			// 跳转
			toUrl(type){
				if(type=='zc'){
					uni.navigateTo({
						url: './register'
					});
				}else if(type=='zh'){
					uni.navigateTo({
						url: './findpassword'
					});
				}
				
			},
			// 登录
			login(){
				if(!this.phone||!this.password){
					uni.showToast({
						title: this.$t('login.login7'),
						icon: 'none'
					})
					return
				}
				if(this.isRemember){
					uni.setStorage({
						key: 'userinfo',
						data: {
							phone:this.phone,
							password:this.password
						}
					})
				}
				// 登陆时获取token
				let _this = this
				uni.getStorage({
					key:'token',
					success(t) {
						_this.$api.valiToken({
							'token': t.data
						}).then(res=>{
							if(res.data.valid){
								uni.switchTab({
									url: '../main/index'
								})
							}else{
								_this.loginfun.apply(this)
							}
						})
					},
					fail() {
						_this.loginfun.apply(this)
					}
				})
			},
			// 登陆接口
			loginfun(){
				this.$api.passwordLogin({
					area_code: this.area,
					tel: this.phone,
					pwd: this.password
				}).then(res=>{
					this.loading = true
					if(res.code==200){
						uni.setStorage({
							key: 'token',
							data: res.data.token,
							success() {
								this.loading = false
								uni.switchTab({
									url: '../main/index'
								})
							}
						})
					}else{
						this.loading = false
						uni.showToast({
							title: res.msg,
							icon: 'none'
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
			margin: 215rpx auto 133rpx;
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
		.txt{
			font-size: 26rpx;
			font-weight: bold;
			min-width: 150rpx;
			max-width: 150rpx;
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
		}
	}
	.possword{
		margin-top: 67rpx;
	}
	.switch{
		display: flex;
		align-items: center;
		font-size: 28rpx;
		font-weight: bold;
		.jzmm{
			color: $uni-color-primary;
			// text-decoration: underline;
			font-size: 26rpx;
		}
	}
	.setpoword{
		font-size: 26rpx;
		font-weight: bold;
		color: $uni-color-primary;
		text-decoration: underline;
	}
	.btn button{
		width: 440rpx;
		height: 86rpx;
		font-weight: bold;
		margin-top: 120rpx;
		background-color: #D66A28;
		border-radius: 20rpx;
		font-size: 28rpx;
		line-height: 86rpx;
	}
	.findpass{
		text-align: right;
		font-weight: bold;
		font-size: 26rpx;
		margin-top: 58rpx;
		color: $uni-color-primary;
		text-decoration: underline;
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
