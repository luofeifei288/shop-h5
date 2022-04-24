<template>
	<view class="content">
		<view class="name">
			<view class="txt">{{ $t('setting.set7') }}:</view>
			<view class="nameinp">
				<input type="text" maxlength="6" :placeholder="$t('setting.set7_1')" v-model="username" value="" />
			</view>
			<text style="margin-left: 10rpx;color: #D66A28;">*</text>
		</view>

		<view class="name" v-if="phone">
			<view class="txt">{{ $t('setting.set1') }}:</view>
			<view class="nameinp" style="background-color: #F3F3F3;">
				<input disabled="" type="number" maxlength="11" :placeholder="$t('setting.set1_1')" v-model="phone"
					value="" />
			</view>
		</view>

		<!-- <view class="name">
			<view class="txt">{{ $t('setting.set2') }}:</view>
			<view class="nameinp">
				<input type="text" password maxlength="16" :placeholder="$t('setting.set2_1')" v-model="password" value="" />
			</view>	
		</view>
		
		<view class="name">
			<view class="txt">{{ $t('setting.set3') }}:</view>
			<view class="nameinp">
				<input type="text" password maxlength="16" :placeholder="$t('setting.set3_1')" v-model="tradPassword" value="" />
			</view>	
		</view>
		
		<view class="name">
			<view class="txt">{{ $t('setting.set4') }}:</view>
			<view class="nameinp">
				<input type="text" maxlength="16" :placeholder="$t('setting.set4_1')" v-model="emaill" value="" />
			</view>	
		</view> -->

		<view class="name">
			<view class="txt">{{ $t('setting.set5') }}:</view>
			<view class="nameinp">
				<input type="text" maxlength="16" :placeholder="$t('setting.set5_1')" v-model="bankname" value="" />
			</view>
			<text style="margin-left: 10rpx;color: #D66A28;">*</text>
		</view>

		<view class="name">
			<view class="txt">{{ $t('setting.set6') }}:</view>
			<view class="nameinp">
				<input type="number" maxlength="19" :placeholder="$t('setting.set6_1')" v-model="account" value="" />
			</view>
			<text style="margin-left: 10rpx;color: #D66A28;">*</text>
		</view>

		<view class="name">
			<view class="txt">{{ $t('setting.set8') }}:</view>
			<view class="nameinp">
				<input type="text" :placeholder="$t('setting.set8_1')" v-model="p1" value="" />
			</view>
			<text style="margin-left: 10rpx;color: #D66A28;">*</text>
		</view>

		<view class="name">
			<view class="txt">{{ $t('setting.set10') }}:</view>
			<view class="nameinp">
				<input type="number" :placeholder="$t('setting.set10_1')" v-model="p2" value="" />
			</view>
			<text style="margin-left: 10rpx;color: #D66A28;">*</text>
		</view>

		<view class="example-body">
			<uni-file-picker style="font-weight: bold;"
			:title="$t('setting.set11')"
			v-model="imageValue" 
			fileMediatype="image"
			:limit="1"
			@select="select"
			@progress="progress" 
			@success="success" 
			@fail="fail" 
			@delete="delImg"/>
		</view>

		<view class="btn">
			<button type="primary" @click="save">{{ $t('setting.set9') }}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				password: '',
				tradPassword: '',
				emaill: '',
				bankname: '',
				account: '',
				username: '',
				p1: '',
				p2: '',
				p3: '',
				imageValue: {
					
				}
			};
		},
		onLoad() {
			this.getset()
		},
		methods: {
			// 获取上传状态
			select(e) {
				const tempFilePaths = e.tempFilePaths;
				const imginfo = e.tempFiles
				let header={}
				
				if(uni.getLocale()=='zh-Hans'){
					header = {
						'think-lang': 'cn'
					}
				}else{
					header = {
						'think-lang': uni.getLocale()
					}
				}
				
				uni.getStorage({
					key: 'token',
					success(t) {
						Object.assign(header,{ 'Authorization':t.data })
					}
				})
				uni.showLoading({
					title: ''
				})
				uni.uploadFile({
					url: http_url+'/users/uploadDNI', //仅为示例，非真实的接口地址
					filePath: tempFilePaths[0],
					name: imginfo.name,
					header: header,
					success: (uploadFileRes) => {
						let json = JSON.parse(uploadFileRes.data)
						this.p3 = json.data.src
						uni.hideLoading()
					}
				});
			},
			// 获取上传进度
			progress(e) {
				console.log('上传进度：', e)
			},

			// 上传成功
			success(e) {
				console.log('上传成功')
			},

			// 上传失败
			fail(e) {
				console.log('上传失败：', e)
			},
			delImg(){
				this.imageValue = {}
				this.p3 = ""
			},

			getset() {
				this.$api.getset().then(res => {
					if (res.code == 200) {
						this.phone = res.data.tel ?? ''
						this.account = res.data.cardnum ?? ''
						this.p1 = res.data.p1 ?? ''
						this.p2 = res.data.p2 ?? ''
						this.bankname = res.data.bankname ?? ''
						this.username = res.data.username ?? ''
						if(!res.data.p3){
							this.p3 = ''
							this.imageValue = {}
						}else{
							this.p3 = res.data.p3 ?? ''
							this.imageValue = {
								"name":"",
								"extname":"",
								"url": http_url+res.data.p3
							}
						}
					} else {
						uni.showToast({
							title: res.msg,
							icon: "none"
						})
					}
				})
			},
			setfun() {
				this.$api.setting({
					bankname: this.bankname,
					cardnum: this.account,
					username: this.username,
					p1: this.p1,
					p2: this.p2,
					p3: this.p3
				}).then(res => {
					uni.showToast({
						title: res.msg,
						icon: "none"
					})
					if (res.code == 200) {

					}
				})
			},
			save() {
				this.setfun()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		margin: 68rpx 78rpx;
	}

	.name {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 37rpx;
		padding-bottom: 37rpx;
		border-bottom: 2rpx solid rgba($color: #707070, $alpha: 0.22);

		.txt {
			font-size: 28rpx;
			font-weight: bold;
			display: inline-block;
			min-width: 150rpx;
			max-width: 150rpx;
		}

		.nameinp {
			width: 438rpx;
			height: 78rpx;
			box-shadow: 0px 2rpx 6rpx rgba(0, 0, 0, 0.16);
			border-radius: 20rpx;
			margin-left: 32rpx;

			input {
				height: 78rpx;
				width: 80%;
				text-indent: 21rpx;
			}
		}
	}

	.btn button {
		width: 440rpx;
		height: 86rpx;
		font-weight: bold;
		margin-top: 95rpx;
		background-color: #D66A28;
		border-radius: 20rpx;
		font-size: 28rpx;
		line-height: 86rpx;
	}
</style>
