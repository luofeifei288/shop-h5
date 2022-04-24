<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let _this = this
			// #ifdef APP-PLUS
			// token标志来判断
			let token= uni.getStorageSync('token');    
			if (token) {
				//存在则关闭启动页进入首页
				plus.navigator.closeSplashscreen();
			
			} else {
				//不存在则跳转至登录页
				uni.reLaunch({
					url: "pages/member/login",
					success: () => {
						plus.navigator.closeSplashscreen();
					}
				})
			}
			// #endif
			
			// #ifdef H5
			// uni.getStorage({
			// 	key:'token',
			// 	success() {
					
			// 	},
			// 	fail(err) {
			// 		if(_this._route.fullPath.indexOf('register')!=-1||_this._route.fullPath.indexOf('findpassword')!=-1){
						
			// 		}else{
			// 			uni.navigateTo({
			// 				url:'pages/member/login'
			// 			})
			// 		}
			// 	}
			// })
			
			// #endif
			var lag = ""
			if(lang=='cn'){
				lag = 'zh-Hans'
			}else{
				lag = lang
			}
			uni.setLocale(lag)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 28rpx;
	}
	.pricolor{
		color: $uni-color-primary;
	}
	button {
		margin-bottom: 15px;
	}
	/deep/ .uni-tabbar {
		background-color: #FFFFFF!important;
		backdrop-filter: none!important;
		box-shadow:-4rpx 0rpx 22rpx 12rpx rgba(0,0,0,0.13)!important;
		border: 0rpx!important;
	}
</style>
